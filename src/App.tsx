import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Building2, 
  FileText, 
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  HardDrive,
  Link as LinkIcon,
  Search,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Maximize2,
  Settings,
  LogOut
} from 'lucide-react';
import { evaluationData as initialData, EvaluationArea, EvidenceLink, EvaluationItem } from './data';
import { initialPresentationData, PresentationSlideData } from './presentationData';
import { PresentationViewer } from './Presentation';
import { CMSAdmin } from './CMSAdmin';

const getEmbedUrl = (url: string) => {
  if (url.includes('drive.google.com/file/d/')) {
    return url.replace(/\/view.*/, '/preview');
  }
  return url;
};

function App() {
  const [activeArea, setActiveArea] = useState<string>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceLink | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPresentation, setShowPresentation] = useState(false);
  const [evaluationData, setEvaluationData] = useState<EvaluationArea[]>(initialData);
  const [presentationSlides, setPresentationSlides] = useState<PresentationSlideData[]>(initialPresentationData);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'Admin' && password === 'password123') {
      setIsAdminLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsCMSOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    
    return evaluationData.map(area => {
      const areaTitleMatches = area.title.toLowerCase().includes(query);
      const matchingItems = area.items.filter(item => 
        item.standard.toLowerCase().includes(query) ||
        item.requiredEvidence.toLowerCase().includes(query) ||
        item.evidenceLinks.some(link => 
          link.label.toLowerCase().includes(query) || 
          (link.description && link.description.toLowerCase().includes(query))
        )
      );

      if (areaTitleMatches || matchingItems.length > 0) {
        return {
          ...area,
          items: areaTitleMatches && matchingItems.length === 0 ? area.items : matchingItems
        };
      }
      return null;
    }).filter(Boolean) as EvaluationArea[];
  }, [searchQuery]);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <Building2 className="w-5 h-5" /> },
    ...evaluationData.map((area, index) => {
      const icons = [
        <CheckCircle className="w-5 h-5" />,
        <GraduationCap className="w-5 h-5" />,
        <BookOpen className="w-5 h-5" />,
        <Building2 className="w-5 h-5" />,
        <FileText className="w-5 h-5" />
      ];
      return {
        id: area.id,
        label: area.title,
        icon: icons[index % icons.length]
      };
    })
  ];

  const activeData = evaluationData.find(a => a.id === activeArea);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-amber-500" />
          <span className="font-semibold truncate">MIT Evaluation</span>
        </div>
        <button onClick={toggleSidebar} className="p-1 hover:bg-slate-800 rounded">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || window.innerWidth >= 768) && (
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`
              fixed md:sticky top-0 left-0 h-screen w-72 bg-slate-900 text-slate-300 flex flex-col z-40
              shadow-2xl md:shadow-none overflow-y-auto
              ${isSidebarOpen ? 'block' : 'hidden md:flex'}
            `}
          >
            <div className="p-6 border-b border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500 p-2 rounded-lg text-slate-900">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-white font-bold leading-tight">Partido State<br/>University</h1>
                </div>
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Master of Information Technology
              </p>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveArea(item.id);
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                    ${activeArea === item.id 
                      ? 'bg-amber-500/10 text-amber-500 font-medium' 
                      : 'hover:bg-slate-800 hover:text-white'}
                  `}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-6 border-t border-slate-800 text-xs text-slate-500">
              <p>RQAT Evaluation for MIT Program</p>
              <p className="mt-1">© {new Date().getFullYear()} ParSU</p>
              
              <div className="mt-6 pt-4 border-t border-slate-800/50">
                {isAdminLoggedIn ? (
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => {
                        setIsCMSOpen(true);
                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 rounded-lg transition-colors text-sm font-medium w-full"
                    >
                      <Settings className="w-4 h-4" />
                      Manage Content
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setIsCMSOpen(true);
                      if (window.innerWidth < 768) setIsSidebarOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-slate-300 hover:bg-slate-800 rounded-lg transition-colors text-sm font-medium w-full"
                  >
                    <Settings className="w-4 h-4" />
                    Admin Login
                  </button>
                )}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-5xl mx-auto w-full relative">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search areas, standards, or evidence..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isCMSOpen ? (
            <motion.div
              key="cms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {!isAdminLoggedIn ? (
                <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Admin Login</h2>
                    <button onClick={() => setIsCMSOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
                      <input 
                        type="text" 
                        name="username" 
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                      />
                    </div>
                    {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                    <button 
                      type="submit" 
                      className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Login
                    </button>
                  </form>
                </div>
              ) : (
                <CMSAdmin 
                  data={evaluationData} 
                  setData={setEvaluationData} 
                  presentationSlides={presentationSlides}
                  setPresentationSlides={setPresentationSlides}
                  onExit={() => setIsCMSOpen(false)} 
                />
              )}
            </motion.div>
          ) : searchQuery.trim() ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 pb-12"
            >
              <header className="border-b border-slate-200 pb-6">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Search Results</h2>
                <p className="text-slate-500 mt-2">Found {filteredData?.reduce((acc, area) => acc + area.items.length, 0)} matching items for "{searchQuery}"</p>
              </header>
              
              {filteredData?.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 border-dashed">
                  <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg font-medium">No results found for "{searchQuery}"</p>
                  <p className="text-slate-400 text-sm mt-1">Try adjusting your search terms</p>
                </div>
              ) : (
                <div className="space-y-12">
                  {filteredData?.map(area => (
                    <div key={area.id} className="space-y-6">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm">{area.title}</span>
                      </h3>
                      <div className="space-y-8">
                        {area.items.map((item, index) => (
                          <EvaluationItemCard key={index} item={item} onSelectEvidence={setSelectedEvidence} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={activeArea}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeArea === 'overview' ? (
                <Overview onOpenPresentation={() => setShowPresentation(true)} />
              ) : activeData ? (
                <AreaView area={activeData} onSelectEvidence={setSelectedEvidence} />
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Document Modal */}
      <AnimatePresence>
        {selectedEvidence && (
          <DocumentModal 
            evidence={selectedEvidence} 
            onClose={() => setSelectedEvidence(null)} 
          />
        )}
      </AnimatePresence>

      {/* Presentation Viewer */}
      <AnimatePresence>
        {showPresentation && (
          <PresentationViewer slidesData={presentationSlides} onClose={() => setShowPresentation(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Overview({ onOpenPresentation }: { onOpenPresentation: () => void }) {
  return (
    <div className="space-y-8">
      <header className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Program Evaluation <br/>
          <span className="text-amber-600">Presentation</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Welcome to the digital presentation of documents and profiles for the Master of Information Technology program at Partido State University.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Institutional Profile</h3>
            <button 
              onClick={onOpenPresentation}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              <Maximize2 className="w-4 h-4" />
              View Presentation at a Glance
            </button>
          </div>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-slate-500">Name of Institution</dt>
              <dd className="font-medium text-slate-900">Partido State University</dd>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <dt className="text-sm text-slate-500">Address</dt>
              <dd className="font-medium text-slate-900">San Juan Bautista St., Goa, Camarines Sur</dd>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <dt className="text-sm text-slate-500">Program Applied for</dt>
              <dd className="font-medium text-slate-900">Master of Information Technology</dd>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <dt className="text-sm text-slate-500">Type of Institution</dt>
              <dd className="font-medium text-slate-900">Public</dd>
            </div>
          </dl>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-sm text-white flex flex-col justify-center">
          <GraduationCap className="w-12 h-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-semibold mb-3">Evaluation Guidelines</h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            This portal provides structured access to all required evidence and documentation based on CMO No. 15 s. 2019 "Policies, Standards and Guidelines for Graduate Education".
          </p>
          <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
            <span>Select an area from the menu to begin</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EvaluationItemCard({ item, onSelectEvidence }: { item: EvaluationItem, onSelectEvidence: (evidence: EvidenceLink) => void, key?: any }) {
  const [expandedLinks, setExpandedLinks] = useState<number[]>([]);

  const toggleExpand = (idx: number) => {
    setExpandedLinks(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Minimum Standards</h3>
        <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-wrap">
          {item.standard}
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Required Evidence</h3>
        <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-wrap mb-8">
          {item.requiredEvidence}
        </div>
        
        {item.evidenceLinks.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Supporting Documents</h4>
            <div className="flex flex-col gap-3">
              {item.evidenceLinks.map((link, linkIdx) => {
                const Icon = link.type === 'drive' ? HardDrive : link.type === 'document' ? FileText : LinkIcon;
                const isImportant = link.important;
                const isExpanded = expandedLinks.includes(linkIdx);
                
                return (
                  <div key={linkIdx} className="flex flex-col">
                    <button
                      onClick={() => isImportant ? toggleExpand(linkIdx) : onSelectEvidence(link)}
                      className={`flex items-start gap-3 p-4 border transition-all text-left w-full group ${
                        isImportant 
                          ? `bg-indigo-50/50 hover:bg-indigo-50 border-indigo-200 ${isExpanded ? 'rounded-t-xl border-b-0 shadow-none' : 'rounded-xl shadow-sm'}` 
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 rounded-xl'
                      }`}
                    >
                      <div className={`bg-white p-2 rounded-lg shadow-sm border transition-colors ${
                        isImportant
                          ? 'border-indigo-200 text-indigo-600 group-hover:border-indigo-400 group-hover:text-indigo-700'
                          : 'border-slate-200 text-slate-700 group-hover:border-amber-300 group-hover:text-amber-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold flex items-center gap-2 ${isImportant ? 'text-indigo-900' : 'text-slate-900'}`}>
                          {link.label}
                          {isImportant && <BadgeCheck className="w-4 h-4 text-indigo-500" />}
                          {!isImportant && <ExternalLink className={`w-3 h-3 text-slate-400`} />}
                        </div>
                        {link.description && (
                          <div className={`text-sm mt-1 ${isImportant ? 'text-indigo-700/80' : 'text-slate-500'}`}>{link.description}</div>
                        )}
                      </div>
                      {isImportant && (
                        <div className="ml-auto pl-4 flex items-center h-full text-indigo-400 group-hover:text-indigo-600 transition-colors pt-2">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {isImportant && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 bg-white border border-t-0 border-indigo-200 rounded-b-xl shadow-sm">
                            {link.extendedDetails && (
                              link.label === 'Faculty Credentials' ? (
                                <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 relative overflow-hidden shadow-sm">
                                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                                    <h5 className="text-sm font-bold text-emerald-800 uppercase tracking-wider">Verified Credentials Summary</h5>
                                  </div>
                                  <div className="text-sm text-emerald-900/90 whitespace-pre-wrap leading-relaxed font-medium">
                                    {link.extendedDetails}
                                  </div>
                                </div>
                              ) : (
                                <div className="mb-5">
                                  <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Key Details</h5>
                                  <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                                    {link.extendedDetails}
                                  </div>
                                </div>
                              )
                            )}
                            
                            <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-inner relative group/preview">
                              {link.url && link.url !== '#' ? (
                                <iframe 
                                  src={getEmbedUrl(link.url)} 
                                  className="w-full h-full border-0" 
                                  title={link.label}
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                                  <FileText className="w-12 h-12 mb-3 opacity-20" />
                                  <p className="text-sm font-medium text-slate-500">Document preview not available</p>
                                  <p className="text-xs mt-1">Update URL to view inline</p>
                                </div>
                              )}
                              
                              <div className="absolute top-3 right-3 opacity-0 group-hover/preview:opacity-100 transition-opacity">
                                <button 
                                  onClick={() => onSelectEvidence(link)}
                                  className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-medium rounded-lg backdrop-blur-sm transition-colors shadow-lg"
                                >
                                  <Maximize2 className="w-3.5 h-3.5" />
                                  View Fullscreen
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AreaView({ area, onSelectEvidence }: { area: EvaluationArea, onSelectEvidence: (evidence: EvidenceLink) => void }) {
  return (
    <div className="space-y-8 pb-12">
      <header className="border-b border-slate-200 pb-6">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{area.title}</h2>
      </header>

      <div className="space-y-12">
        {area.items.map((item, index) => (
          <EvaluationItemCard key={index} item={item} onSelectEvidence={onSelectEvidence} />
        ))}
      </div>
    </div>
  );
}

function DocumentModal({ evidence, onClose }: { evidence: EvidenceLink, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
              {evidence.type === 'drive' ? <HardDrive className="w-6 h-6" /> : evidence.type === 'document' ? <FileText className="w-6 h-6" /> : <LinkIcon className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{evidence.label}</h3>
              {evidence.description && <p className="text-sm text-slate-500">{evidence.description}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={evidence.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 bg-slate-100/50 p-4 md:p-6 overflow-hidden">
          {evidence.url && evidence.url !== '#' ? (
            <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <iframe 
                src={getEmbedUrl(evidence.url)} 
                className="w-full h-full border-0" 
                title={evidence.label}
                allow="autoplay" 
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-white rounded-xl border border-slate-200 border-dashed">
              <FileText className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-medium text-slate-600">Document preview not available</p>
              <p className="text-sm mt-2">Please update the URL in the data source to view this document.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
