import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight, BookOpen, BrainCircuit, BriefcaseBusiness, Check,
  ChevronLeft, ChevronRight, Code2, Database, ExternalLink, GraduationCap,
  Layers3, Mail, MapPin, Menu, Network, Phone, Play, Quote, ShieldCheck, Sparkles, X,
} from 'lucide-react';
import { PresentationViewer } from './Presentation';
import { initialPresentationData } from './presentationData';
import { facultyPresentationProfiles } from './facultyPresentationData';

const curriculum = [
  {
    id: 'core', label: 'Core foundation', units: '12 units', icon: Layers3,
    title: 'Think in systems, lead with evidence.',
    copy: 'Build the strategic and technical foundation to design information systems that solve real organizational and community challenges.',
    courses: [
      'MIT 101 — Advanced Database Systems',
      'MIT 102 — Advanced Operating Systems and Networking',
      'MIT 103 — Advanced System Design and Implementation',
      'MIT 104 — IT Research Methods (Methods of Research)',
    ],
  },
  {
    id: 'major', label: 'Specialization', units: '18 units', icon: BrainCircuit,
    title: 'Go deeper into modern computing.',
    copy: 'Develop advanced capability across project management, web systems, security, and analytics through practice-centered coursework.',
    courses: [
      'MIT 201 — Technology and Project Management',
      'MIT 202 — Web Engineering',
      'MIT 203 — ICT Information Security Administration',
      'MIT 204 — Management Information Systems',
      'MIT 301 — Human-Computer Interaction',
      'MIT 302 — Introduction to Data Analytics',
    ],
  },
  {
    id: 'capstone', label: 'Graduate project', units: '6 units', icon: Code2,
    title: 'Turn insight into working impact.',
    copy: 'Create, defend, and publish a substantial technology solution grounded in original research and a real-world need.',
    courses: [
      'MIT 401 — Graduate Project 1',
      'MIT 402 — Graduate Project 2',
    ],
  },
];

const outcomes = [
  { icon: Database, title: 'Architect intelligent systems', copy: 'Translate complex needs into scalable, data-informed technology solutions.' },
  { icon: Network, title: 'Lead digital transformation', copy: 'Connect people, process, and platforms to move organizations forward.' },
  { icon: ShieldCheck, title: 'Build responsibly', copy: 'Apply sound research, governance, security, and ethical judgment to every solution.' },
  { icon: BriefcaseBusiness, title: 'Create measurable impact', copy: 'Deliver professional work with value for industry, government, and communities.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [facultyIndex, setFacultyIndex] = useState(0);
  const [showPresentation, setShowPresentation] = useState(false);
  const faculty = facultyPresentationProfiles[facultyIndex];

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="MIT program home">
            <img className="university-logo" src="/psu-logo-hd-transparent.png" alt="Partido State University seal" />
            <span className="brand-copy"><strong>Master of Information Technology</strong><small>Partido State University</small></span>
          </button>
          <div className="nav-links">
            <button onClick={() => scrollTo('program')}>The program</button>
            <button onClick={() => scrollTo('curriculum')}>Curriculum</button>
            <button onClick={() => scrollTo('faculty')}>Faculty</button>
            <button onClick={() => scrollTo('admissions')}>Admissions</button>
          </div>
          <button className="nav-cta" onClick={() => scrollTo('admissions')}>Explore admission <ArrowRight size={16} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
          {['program', 'curriculum', 'faculty', 'admissions'].map(id => <button key={id} onClick={() => scrollTo(id)}>{id === 'program' ? 'The program' : id[0].toUpperCase() + id.slice(1)}</button>)}
        </motion.div>}</AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
          <div className="container hero-content">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <img className="hero-seal" src="/psu-logo-hd-transparent.png" alt="Partido State University" />
              <div className="eyebrow"><Sparkles size={15} /> Graduate education for the digital age</div>
              <h1><span className="headline-lead">Not the first in Bicol.</span><br /><em>Just the one you’ve been waiting for.</em></h1>
              <p>A practice-driven graduate program for professionals ready to design better systems, lead digital change, and build technology with purpose.</p>
              <div className="hero-actions">
                <button className="button-primary" onClick={() => scrollTo('curriculum')}>Discover the program <ArrowRight size={18} /></button>
                <button className="button-ghost" onClick={() => setShowPresentation(true)}><span><Play size={16} fill="currentColor" /></span> View program presentation</button>
              </div>
              <div className="hero-meta"><span><strong>36</strong> total units</span><span><strong>Professional</strong> non-thesis track</span><span><strong>Flexible</strong> graduate learning</span></div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
              <div className="tech-window">
                <div className="window-bar"><span/><span/><span/><small>mit.parsu.edu.ph / future</small></div>
                <div className="code-field">
                  <div className="signal-ring r1"/><div className="signal-ring r2"/><div className="signal-ring r3"/>
                  <div className="core-node"><BrainCircuit size={42}/><span>HUMAN<br/>POTENTIAL</span></div>
                  <div className="data-chip chip-a"><Database size={17}/> DATA</div>
                  <div className="data-chip chip-b"><Code2 size={17}/> SYSTEMS</div>
                  <div className="data-chip chip-c"><Network size={17}/> IMPACT</div>
                </div>
                <div className="terminal-line"><span>01</span> transform(knowledge) → <strong>meaningful_impact</strong><i>_</i></div>
              </div>
              <div className="floating-note"><span className="note-icon"><GraduationCap size={20}/></span><div><small>YOUR NEXT LEVEL</small><strong>starts here.</strong></div></div>
            </motion.div>
          </div>
          <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
        </section>

        <section id="program" className="program section">
          <div className="container">
            <div className="section-heading split"><div><span className="kicker">01 / The program</span><h2>Built for the problems<br />that do not fit in a textbook.</h2></div><p>The MIT at Partido State University connects advanced computing with the realities of organizations and communities. You will learn to investigate deeply, build rigorously, and lead confidently.</p></div>
            <div className="outcome-grid">{outcomes.map((item, i) => <motion.article key={item.title} className="outcome-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}><span className="card-number">0{i + 1}</span><item.icon size={27}/><h3>{item.title}</h3><p>{item.copy}</p><span className="card-line"/></motion.article>)}</div>
          </div>
        </section>

        <section id="curriculum" className="curriculum section">
          <div className="container">
            <div className="section-heading light"><span className="kicker">02 / Curriculum</span><h2>A 36-unit journey from<br />foundations to contribution.</h2></div>
            <div className="curriculum-layout">
              <div className="track-tabs" role="tablist">{curriculum.map((track, index) => <button key={track.id} role="tab" aria-selected={activeTrack === index} className={activeTrack === index ? 'active' : ''} onClick={() => setActiveTrack(index)}><span className="track-index">0{index + 1}</span><span><strong>{track.label}</strong><small>{track.units}</small></span><ChevronRight size={20}/></button>)}</div>
              <AnimatePresence mode="wait"><motion.div key={activeTrack} className="track-panel" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: .28 }}>
                {(() => { const track = curriculum[activeTrack]; return <><div className="panel-icon"><track.icon size={30}/></div><span className="panel-units">{track.units}</span><h3>{track.title}</h3><p>{track.copy}</p><div className="course-list">{track.courses.map(course => <div key={course}><Check size={15}/>{course}</div>)}</div></> })()}
              </motion.div></AnimatePresence>
            </div>
          </div>
        </section>

        <section id="faculty" className="faculty section">
          <div className="container faculty-layout">
            <div className="faculty-intro"><span className="kicker">03 / Faculty</span><h2>Learn from people<br />who build, research,<br />and lead.</h2><p>Our multidisciplinary faculty brings advanced academic training and grounded professional experience into every graduate learning experience.</p><div className="faculty-controls"><button aria-label="Previous faculty" onClick={() => setFacultyIndex(i => (i - 1 + facultyPresentationProfiles.length) % facultyPresentationProfiles.length)}><ChevronLeft/></button><span>{String(facultyIndex + 1).padStart(2,'0')} / {String(facultyPresentationProfiles.length).padStart(2,'0')}</span><button aria-label="Next faculty" onClick={() => setFacultyIndex(i => (i + 1) % facultyPresentationProfiles.length)}><ChevronRight/></button></div></div>
            <AnimatePresence mode="wait"><motion.article key={faculty.name} className="faculty-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
              <div className="faculty-photo"><img src="/psu-logo-hd-transparent.png" alt={faculty.name}/><span>MIT FACULTY</span></div>
              <div className="faculty-info"><Quote size={28}/><p>{faculty.profile}</p><div><h3>{faculty.name}</h3><span>{faculty.rank}</span>{faculty.currentDesignation && <small>{faculty.currentDesignation}</small>}</div></div>
            </motion.article></AnimatePresence>
          </div>
        </section>

        <section id="admissions" className="admissions section">
          <div className="admission-grid" aria-hidden="true"/>
          <div className="container admissions-inner"><div><span className="kicker">04 / Your next chapter</span><h2>Bring your ambition.<br /><em>Build what comes next.</em></h2><p>Join a graduate community committed to useful research, responsible innovation, and technology that matters.</p></div><div className="apply-card"><span className="apply-badge"><BookOpen size={18}/> Admissions</span><h3>Ready to take the next step?</h3><p>Download the official MIT admission forms, complete your requirements, and submit them to the Computational Sciences Department for evaluation.</p><a href="https://drive.google.com/drive/folders/1eySRdpYu_bFXxb8rFiQKlWhBtyAxPO-6?usp=sharing" target="_blank" rel="noreferrer">Download Admission Forms <ExternalLink size={17}/></a><small>College of Engineering and Computational Sciences<br/>Goa, Camarines Sur</small></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <motion.aside
              className="page-contact"
              aria-label="Program contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .35 }}
              transition={{ duration: .55 }}
            >
              <div className="page-contact-rail" aria-hidden="true" />
              <div className="page-contact-body">
                <span className="page-contact-label">Direct line · Admissions &amp; inquiry</span>
                <h2 className="page-contact-name">Kennedy C. Cuya, DIT</h2>
                <ul className="page-contact-roles">
                  <li>Graduate Program Coordinator, MIT Program</li>
                  <li>Department Chair, Department of Computational Sciences</li>
                  <li>College of Engineering and Computational Sciences</li>
                </ul>
                <div className="page-contact-actions">
                  <a className="page-contact-link" href="tel:+639608835187"><Phone size={16} aria-hidden="true" /><span>09608835187</span></a>
                  <a className="page-contact-link" href="mailto:dcs@parsu.edu.ph"><Mail size={16} aria-hidden="true" /><span>dcs@parsu.edu.ph</span></a>
                </div>
                <p className="page-contact-visit"><MapPin size={16} aria-hidden="true" /><span>Visit the Computational Sciences Department Office, beside the ParSU Admin Building, for inquiry and submission of application.</span></p>
              </div>
            </motion.aside>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><div className="brand footer-brand"><img className="university-logo" src="/psu-logo-hd-transparent.png" alt="Partido State University seal" /><span className="brand-copy"><strong>Master of Information Technology</strong><small>Partido State University</small></span></div><p>Advanced knowledge. Responsible innovation. Resilient communities.</p><span>© 2026 Partido State University</span></div></footer>

      <AnimatePresence>{showPresentation && <PresentationViewer slidesData={initialPresentationData} onClose={() => setShowPresentation(false)} />}</AnimatePresence>
    </div>
  );
}

export default App;
