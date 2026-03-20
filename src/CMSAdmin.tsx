import React, { useState } from 'react';
import { EvaluationArea, EvaluationItem, EvidenceLink } from './data';
import { PresentationSlideData } from './presentationData';
import { Plus, Trash2, Edit2, Save, X, Upload, Link as LinkIcon, FileText, HardDrive, LayoutTemplate, ListChecks } from 'lucide-react';

interface CMSAdminProps {
  data: EvaluationArea[];
  setData: (data: EvaluationArea[]) => void;
  presentationSlides: PresentationSlideData[];
  setPresentationSlides: (slides: PresentationSlideData[]) => void;
  onExit: () => void;
}

export function CMSAdmin({ data, setData, presentationSlides, setPresentationSlides, onExit }: CMSAdminProps) {
  const [activeTab, setActiveTab] = useState<'evaluation' | 'presentation'>('evaluation');
  const [editingAreaId, setEditingAreaId] = useState<string | null>(null);
  const [editingItemIndex, setEditingItemIndex] = useState<{areaId: string, itemIndex: number} | null>(null);

  const handleSaveArea = (areaId: string, newTitle: string) => {
    setData(data.map(a => a.id === areaId ? { ...a, title: newTitle } : a));
    setEditingAreaId(null);
  };

  const handleSaveItem = (areaId: string, itemIndex: number, newItem: EvaluationItem) => {
    setData(data.map(a => {
      if (a.id === areaId) {
        const newItems = [...a.items];
        newItems[itemIndex] = newItem;
        return { ...a, items: newItems };
      }
      return a;
    }));
    setEditingItemIndex(null);
  };

  const handleAddItem = (areaId: string) => {
    setData(data.map(a => {
      if (a.id === areaId) {
        return {
          ...a,
          items: [...a.items, { standard: 'New Standard', requiredEvidence: 'New Evidence', evidenceLinks: [] }]
        };
      }
      return a;
    }));
  };

  const handleDeleteItem = (areaId: string, itemIndex: number) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    setData(data.map(a => {
      if (a.id === areaId) {
        const newItems = [...a.items];
        newItems.splice(itemIndex, 1);
        return { ...a, items: newItems };
      }
      return a;
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <div className="flex justify-between items-center mb-6 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Content Management System</h2>
          <p className="text-slate-500 text-sm mt-1">Edit sections, standards, and presentation slides</p>
        </div>
        <button onClick={onExit} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors flex items-center gap-2">
          <X className="w-4 h-4" /> Exit CMS
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('evaluation')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${activeTab === 'evaluation' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          <ListChecks className="w-4 h-4" /> Evaluation Data
        </button>
        <button 
          onClick={() => setActiveTab('presentation')}
          className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${activeTab === 'presentation' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          <LayoutTemplate className="w-4 h-4" /> Presentation Slides
        </button>
      </div>

      {activeTab === 'evaluation' ? (
        <div className="space-y-8">
          {data.map((area) => (
          <div key={area.id} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              {editingAreaId === area.id ? (
                <div className="flex items-center gap-2 w-full max-w-md">
                  <input 
                    type="text" 
                    defaultValue={area.title}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveArea(area.id, e.currentTarget.value);
                      if (e.key === 'Escape') setEditingAreaId(null);
                    }}
                    onBlur={(e) => handleSaveArea(area.id, e.target.value)}
                    autoFocus
                  />
                </div>
              ) : (
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  {area.title}
                  <button onClick={() => setEditingAreaId(area.id)} className="p-1 text-slate-400 hover:text-amber-500 rounded">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </h3>
              )}
              <button 
                onClick={() => handleAddItem(area.id)}
                className="px-3 py-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add Item
              </button>
            </div>

            <div className="space-y-4">
              {area.items.map((item, index) => {
                const isEditing = editingItemIndex?.areaId === area.id && editingItemIndex?.itemIndex === index;
                
                if (isEditing) {
                  return (
                    <ItemEditor 
                      key={index} 
                      item={item} 
                      onSave={(newItem) => handleSaveItem(area.id, index, newItem)}
                      onCancel={() => setEditingItemIndex(null)}
                    />
                  );
                }

                return (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">Standard:</h4>
                        <p className="text-slate-600 text-sm whitespace-pre-wrap">{item.standard}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => setEditingItemIndex({ areaId: area.id, itemIndex: index })} className="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-md transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDeleteItem(area.id, index)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-md border border-slate-100">
                      <h4 className="font-semibold text-slate-800 text-sm mb-1">Required Evidence:</h4>
                      <p className="text-slate-600 text-sm whitespace-pre-wrap">{item.requiredEvidence}</p>
                    </div>
                    {item.evidenceLinks.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-2">Evidence Links ({item.evidenceLinks.length}):</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.evidenceLinks.map((link, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                              {link.type === 'drive' ? <HardDrive className="w-3 h-3" /> : link.type === 'document' ? <FileText className="w-3 h-3" /> : <LinkIcon className="w-3 h-3" />}
                              {link.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              {area.items.length === 0 && (
                <div className="text-center py-6 text-slate-500 text-sm bg-white rounded-lg border border-dashed border-slate-300">
                  No items in this section. Click "Add Item" to create one.
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      ) : (
        <div className="space-y-8">
          {presentationSlides.map((slide, index) => (
            <div key={slide.id} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Slide Title</label>
                <input 
                  type="text" 
                  value={slide.title}
                  onChange={(e) => {
                    const newSlides = [...presentationSlides];
                    newSlides[index] = { ...slide, title: e.target.value };
                    setPresentationSlides(newSlides);
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-bold text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Slide Subtitle</label>
                <input 
                  type="text" 
                  value={slide.subtitle}
                  onChange={(e) => {
                    const newSlides = [...presentationSlides];
                    newSlides[index] = { ...slide, subtitle: e.target.value };
                    setPresentationSlides(newSlides);
                  }}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-slate-600"
                />
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-semibold text-slate-800 text-sm mb-4 border-b border-slate-100 pb-2">Slide Content Data</h4>
                <DynamicObjectEditor 
                  data={slide.content} 
                  onChange={(newContent) => {
                    const newSlides = [...presentationSlides];
                    newSlides[index] = { ...slide, content: newContent };
                    setPresentationSlides(newSlides);
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DynamicObjectEditor({ data, onChange }: { data: any, onChange: (newData: any) => void }) {
  if (typeof data === 'string') {
    return (
      <textarea 
        value={data} 
        onChange={e => onChange(e.target.value)} 
        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none min-h-[60px] text-sm"
      />
    );
  }
  
  if (Array.isArray(data)) {
    return (
      <div className="space-y-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
        {data.map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="flex-1 border-l-2 border-amber-300 pl-3">
              <DynamicObjectEditor 
                data={item} 
                onChange={newItem => {
                  const newArr = [...data];
                  newArr[i] = newItem;
                  onChange(newArr);
                }} 
              />
            </div>
            <button 
              onClick={() => {
                const newArr = [...data];
                newArr.splice(i, 1);
                onChange(newArr);
              }}
              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors shrink-0 mt-1"
              title="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button 
          onClick={() => {
            const newItemTemplate = data.length > 0 
              ? (typeof data[0] === 'string' ? '' : JSON.parse(JSON.stringify(data[0]))) 
              : '';
            onChange([...data, newItemTemplate]);
          }}
          className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium bg-amber-50 px-2 py-1.5 rounded border border-amber-200"
        >
          <Plus className="w-3 h-3" /> Add Item
        </button>
      </div>
    );
  }
  
  if (typeof data === 'object' && data !== null) {
    return (
      <div className="space-y-4">
        {Object.keys(data).map(key => (
          <div key={key}>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
            <DynamicObjectEditor 
              data={data[key]} 
              onChange={newVal => onChange({ ...data, [key]: newVal })} 
            />
          </div>
        ))}
      </div>
    );
  }
  
  return null;
}

function ItemEditor({ item, onSave, onCancel }: { item: EvaluationItem, onSave: (item: EvaluationItem) => void, onCancel: () => void, key?: any }) {
  const [standard, setStandard] = useState(item.standard);
  const [requiredEvidence, setRequiredEvidence] = useState(item.requiredEvidence);
  const [links, setLinks] = useState<EvidenceLink[]>(item.evidenceLinks || []);

  const handleAddLink = () => {
    setLinks([...links, { label: 'New Link', url: '#', type: 'link', description: '' }]);
  };

  const handleUpdateLink = (index: number, updatedLink: EvidenceLink) => {
    const newLinks = [...links];
    newLinks[index] = updatedLink;
    setLinks(newLinks);
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  return (
    <div className="bg-white border-2 border-amber-200 rounded-lg p-5 shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Standard / Requirement</label>
          <textarea 
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none min-h-[80px] text-sm"
            placeholder="Enter the standard description..."
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Required Evidence</label>
          <textarea 
            value={requiredEvidence}
            onChange={(e) => setRequiredEvidence(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none min-h-[80px] text-sm"
            placeholder="Enter the required evidence description..."
          />
        </div>
        
        <div className="border-t border-slate-200 pt-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-semibold text-slate-700">Evidence Links & Uploads</label>
            <button onClick={handleAddLink} className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium bg-amber-50 px-2 py-1 rounded">
              <Plus className="w-3 h-3" /> Add Link/File
            </button>
          </div>
          
          <div className="space-y-3">
            {links.map((link, index) => (
              <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex flex-col gap-2 relative group">
                <button onClick={() => handleRemoveLink(index)} className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 rounded bg-white shadow-sm border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="w-3 h-3" />
                </button>
                <div className="grid grid-cols-2 gap-2 pr-8">
                  <input 
                    type="text" 
                    value={link.label} 
                    onChange={(e) => handleUpdateLink(index, { ...link, label: e.target.value })}
                    placeholder="Link Label (e.g., Certificate)"
                    className="px-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                  <div className="flex gap-2">
                    <select 
                      value={link.type || 'link'} 
                      onChange={(e) => handleUpdateLink(index, { ...link, type: e.target.value as any })}
                      className="px-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 outline-none bg-white"
                    >
                      <option value="link">Web Link</option>
                      <option value="document">Document</option>
                      <option value="drive">Google Drive</option>
                    </select>
                    <input 
                      type="text" 
                      value={link.url} 
                      onChange={(e) => handleUpdateLink(index, { ...link, url: e.target.value })}
                      placeholder="URL or File Path"
                      className="flex-1 px-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>
                <input 
                  type="text" 
                  value={link.description || ''} 
                  onChange={(e) => handleUpdateLink(index, { ...link, description: e.target.value })}
                  placeholder="Short description (optional)"
                  className="w-full px-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-amber-500 outline-none"
                />
                <div className="flex items-center gap-4 mt-1">
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={link.important || false}
                      onChange={(e) => handleUpdateLink(index, { ...link, important: e.target.checked })}
                      className="rounded text-amber-500 focus:ring-amber-500"
                    />
                    Mark as Important
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer hover:text-amber-600 transition-colors">
                    <Upload className="w-3 h-3" />
                    <span onClick={() => {
                      const url = prompt('Simulate file upload: Enter a URL for the uploaded file', link.url);
                      if (url) handleUpdateLink(index, { ...link, url });
                    }}>Simulate Upload</span>
                  </label>
                </div>
              </div>
            ))}
            {links.length === 0 && (
              <p className="text-xs text-slate-500 italic">No links added yet.</p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-slate-200">
          <button onClick={onCancel} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={() => onSave({ standard, requiredEvidence, evidenceLinks: links })} className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
