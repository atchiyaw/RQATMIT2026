import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, ChevronDown,
  BookOpen, GraduationCap, Award, Target, User, Users, 
  Microscope, Library, Monitor, ClipboardCheck, Handshake,
  CheckCircle, FileText, BarChart, Settings, Layout,
  Cpu, Globe, BookMarked, UsersRound, Building2, ExternalLink, FolderOpen
} from 'lucide-react';
import { PresentationSlideData } from './presentationData';
import {
  facultyCredentialsManifest,
  facultyCredentialsFileCounts,
  type CredentialNode,
} from './generated/facultyCredentialsManifest';
import {credentialFileUrl, credentialPreviewKind} from './facultyCredentialUrls';
import {accreditationDocUrl} from './accreditationUrls';
import {
  libraryDocumentTree,
  type LibraryNode,
  type LibraryFileNode,
  type LibraryDirNode,
} from './generated/libraryManifest';
import {libraryFileUrl} from './libraryUrls';
import {laboratoriesDocumentTree} from './generated/laboratoriesManifest';
import {laboratoriesFileUrl} from './laboratoriesUrls';
import {industryDocumentTree, type IndustryNode} from './generated/industryManifest';
import {industryFileUrl} from './industryUrls';
import {researchFileUrl} from './researchUrls';
import {gpmoFileUrl} from './gpmoUrls';
import {researchDocumentTree, type ResearchDirNode} from './generated/researchManifest';
import {gpmoDocumentTree} from './generated/gpmoManifest';
import {flexibleLearningDocumentTree} from './generated/flexibleLearningManifest';
import {flexibleLearningFileUrl} from './flexibleLearningUrls';
import {administrationDocUrl} from './administrationUrls';

type CredentialPreviewState = { url: string; title: string; kind: 'pdf' | 'image' | 'other' } | null;

/** Shared tree shape for static evidence manifests (Research, GPMO, Flexible Learning). */
type EvidenceTreeNode =
  | { type: 'file'; name: string; relPath: string }
  | { type: 'dir'; name: string; children: EvidenceTreeNode[] };

const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Target, Layout, Award, Settings, User, Users, Microscope, Library, Monitor, ClipboardCheck, Handshake,
    BookOpen, Cpu, Globe, UsersRound, BookMarked, FileText, CheckCircle, BarChart, Building2
  };
  return icons[iconName] || Target;
};

/** Purple boxed chip for PQF curriculum map levels (I, R, M, I/R). */
function PqfMapBadge({ code }: { code: string }) {
  const t = code.trim();
  if (!t) return null;
  return (
    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-violet-600 border border-violet-400/50 text-[10px] sm:text-xs font-mono font-bold text-white shadow-sm min-h-[1.375rem]">
      {t}
    </span>
  );
}

const Slide4Content = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<
    'outcomes' | 'pqf' | 'map' | 'pqmap' | 'syllabus' | 'flexible'
  >('outcomes');
  const [flexiblePreview, setFlexiblePreview] = useState<CredentialPreviewState>(null);

  useEffect(() => {
    if (!flexiblePreview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFlexiblePreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flexiblePreview]);

  const flexNodes = flexibleLearningDocumentTree.children as EvidenceTreeNode[];

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex flex-wrap gap-2 border-b border-white/20 pb-2">
        <button
          onClick={() => setActiveTab('outcomes')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'outcomes' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Learning Outcomes
        </button>
        <button
          onClick={() => setActiveTab('pqf')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'pqf' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          PQF Learning Outcomes
        </button>
        <button
          onClick={() => setActiveTab('map')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'map' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Curriculum Map
        </button>
        <button
          onClick={() => setActiveTab('pqmap')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'pqmap' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          PQF Curriculum Map
        </button>
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'syllabus' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Syllabus & Plan
        </button>
        <button
          onClick={() => setActiveTab('flexible')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'flexible' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Learning continuity (flexible learning)
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {activeTab === 'outcomes' && (
          <div className="space-y-6">
            {data.learningOutcomes?.map((outcome: any, i: number) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-xl font-bold text-white shrink-0 border border-purple-400/30">
                    {outcome.id.toUpperCase()}
                  </div>
                  <p className="text-lg text-purple-50 font-medium leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
                <div className="pl-14 space-y-2">
                  <h5 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">Performance Indicators</h5>
                  {outcome.indicators?.map((indicator: string, j: number) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-purple-100">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pqf' && (
          <div className="space-y-8">
            {data.pqLearningOutcomes?.intro && (
              <p className="text-purple-50 text-base leading-relaxed bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                {data.pqLearningOutcomes.intro}
              </p>
            )}
            {data.pqLearningOutcomes?.sections?.map((section: any, si: number) => (
              <div key={si} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4 border-b border-white/15 pb-3">
                  {section.heading}
                </h4>
                <div className="space-y-6">
                  {section.outcomes?.map((po: any, pi: number) => (
                    <div
                      key={pi}
                      className="rounded-xl border border-white/15 bg-black/10 p-4 sm:p-5 space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="shrink-0 px-3 py-1 rounded-lg bg-purple-500/30 border border-purple-400/40 text-sm font-bold text-white font-mono w-fit">
                          {po.id}
                        </div>
                        <p className="text-purple-50 text-sm sm:text-base leading-relaxed flex-1 font-medium">
                          {po.description}
                        </p>
                      </div>
                      {po.indicators && po.indicators.length > 0 && (
                        <div className="sm:pl-0 border-t border-white/10 pt-4 space-y-2">
                          <h5 className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                            Performance Indicators
                          </h5>
                          <ul className="space-y-2">
                            {po.indicators.map((line: string, ii: number) => (
                              <li key={ii} className="flex items-start gap-2 text-sm text-purple-100">
                                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-2">{data.curriculumMap?.title}</h3>
            <p className="text-purple-200 mb-6">{data.curriculumMap?.description}</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 text-purple-300 font-bold w-32">Course Code</th>
                    <th className="py-3 px-4 text-purple-300 font-bold">Course Title</th>
                    <th className="py-3 px-4 text-purple-300 font-bold">Mapped Outcomes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.curriculumMap?.courses?.map((course: any, i: number) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-mono text-white font-bold">{course.code}</td>
                      <td className="py-3 px-4 text-purple-50">{course.title}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {course.mapped.split(',').map((m: string, j: number) => (
                            <span key={j} className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/30 rounded text-xs font-mono text-purple-200">
                              {m.trim()}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'pqmap' && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-1">{data.pqCurriculumMap?.title ?? "Curriculum Map"}</h3>
            {data.pqCurriculumMap?.description && (
              <p className="text-purple-200 text-sm mb-3">{data.pqCurriculumMap.description}</p>
            )}
            <div className="mb-4 px-3 py-3 rounded-lg bg-black/25 border border-white/10">
              <p className="text-[10px] sm:text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">
                Legend
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                {[
                  { code: 'I', label: 'Introduced' },
                  { code: 'R', label: 'Reinforced/Developed' },
                  { code: 'M', label: 'Mastery/Assessed' },
                  { code: 'I/R', label: 'Introduced & Reinforced' }
                ].map((item) => (
                  <div key={item.code} className="flex items-center gap-2 min-w-0">
                    <PqfMapBadge code={item.code} />
                    <span className="text-purple-100/95 text-xs sm:text-sm leading-tight">= {item.label}</span>
                  </div>
                ))}
              </div>
              {data.pqCurriculumMap?.legend && (
                <p className="mt-3 pt-3 border-t border-white/10 text-purple-200/70 text-[10px] sm:text-xs">
                  {data.pqCurriculumMap.legend}
                </p>
              )}
            </div>
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-left border-collapse text-sm min-w-[56rem]">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 px-2 text-purple-300 font-bold whitespace-nowrap">Course Code</th>
                    <th className="py-2 px-2 text-purple-300 font-bold min-w-[11rem]">Course Title</th>
                    {Array.from({ length: 9 }, (_, i) => (
                      <th key={i} className="py-2 px-1 text-center text-purple-300 font-bold w-11">
                        PO{i + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.pqCurriculumMap?.courses?.map((course: any, i: number) => {
                    const cells = Array.isArray(course.po) ? course.po : [];
                    const padded = [...cells];
                    while (padded.length < 9) padded.push("");
                    return (
                      <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-2 px-2 font-mono text-white font-bold whitespace-nowrap">{course.code}</td>
                        <td className="py-2 px-2 text-purple-50 text-xs sm:text-sm">{course.title}</td>
                        {padded.slice(0, 9).map((cell: string, j: number) => (
                          <td key={j} className="py-2 px-1 text-center align-middle">
                            {cell?.trim() ? (
                              <div className="flex justify-center">
                                <PqfMapBadge code={cell} />
                              </div>
                            ) : (
                              <span className="text-purple-400/50 text-xs">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'syllabus' && (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center max-w-2xl w-full">
              <FileText className="w-24 h-24 text-purple-300 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-white mb-4">{data.syllabusPlan?.title}</h3>
              <p className="text-xl text-purple-200 mb-8">{data.syllabusPlan?.description}</p>
              
              <div className="flex justify-center items-center gap-8">
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-white mb-2">{data.syllabusPlan?.completed}</div>
                  <div className="text-sm text-purple-300 uppercase tracking-wider font-bold">Completed Syllabi</div>
                </div>
                <div className="text-6xl font-light text-white/30">/</div>
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-white mb-2">{data.syllabusPlan?.total}</div>
                  <div className="text-sm text-purple-300 uppercase tracking-wider font-bold">Total Courses</div>
                </div>
              </div>
              
              <div className="mt-12 bg-purple-500/20 border border-purple-400/30 rounded-xl p-6">
                <div className="flex items-center justify-center gap-3 text-purple-100 font-medium">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <span>100% Completion Rate for MIT Program Syllabi</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'flexible' && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
              <div className="mb-2 flex items-center gap-2">
                <Layout className="h-6 w-6 text-violet-300" aria-hidden />
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {data.flexibleLearning?.title ?? 'Learning continuity plan for flexible learning'}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-purple-100/95 md:text-base">
                {data.flexibleLearning?.description}
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/25 bg-black/20 p-4 backdrop-blur-md md:p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-violet-200">
                <FolderOpen className="h-4 w-4" aria-hidden />
                Evidence documents
              </h4>
              {flexNodes.length === 0 ? (
                <p className="text-sm text-violet-200/70">No files in Flexible Learning folder.</p>
              ) : (
                <div className="max-h-[min(55vh,520px)] overflow-y-auto pr-2 custom-scrollbar">
                  <FlexibleLearningFileTree nodes={flexNodes} onPreview={setFlexiblePreview} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <CredentialPreviewModal preview={flexiblePreview} onClose={() => setFlexiblePreview(null)} />
    </div>
  );
};

function FacultyCredentialTree({
  nodes,
  facultyName,
  onPreview,
  depth = 0,
}: {
  nodes: CredentialNode[];
  facultyName: string;
  onPreview: (s: NonNullable<CredentialPreviewState>) => void;
  depth?: number;
}) {
  return (
    <ul className={depth > 0 ? 'ml-2 sm:ml-3 border-l border-white/10 pl-2 sm:pl-3 space-y-0.5 mt-1' : 'space-y-0.5'}>
      {nodes.map((node, idx) => (
        <li key={`${depth}-${idx}-${node.name}`}>
          {node.type === 'dir' ? (
            <details className="group min-w-0">
              <summary className="cursor-pointer list-none flex items-center gap-2 py-1 text-sm text-cyan-200 hover:text-white [&::-webkit-details-marker]:hidden">
                <FolderOpen className="w-4 h-4 shrink-0 text-cyan-400/90" aria-hidden />
                <span className="font-medium truncate">{node.name}</span>
              </summary>
              <FacultyCredentialTree
                nodes={node.children}
                facultyName={facultyName}
                onPreview={onPreview}
                depth={depth + 1}
              />
            </details>
          ) : (
            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 py-1 pl-0.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" aria-hidden />
              <span className="text-xs text-cyan-50/95 flex-1 min-w-[8rem] break-words">{node.name}</span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const url = credentialFileUrl(facultyName, node.relPath);
                    const kind = credentialPreviewKind(node.name);
                    onPreview({ url, title: node.name, kind });
                  }}
                  className="text-xs font-semibold text-cyan-300 hover:text-white underline decoration-cyan-500/40"
                >
                  Preview
                </button>
                <a
                  href={credentialFileUrl(facultyName, node.relPath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-200/90 hover:text-white"
                >
                  Open
                </a>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function CredentialPreviewModal({
  preview,
  onClose,
}: {
  preview: CredentialPreviewState;
  onClose: () => void;
}) {
  if (!preview) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="credential-preview-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-white/20 bg-slate-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-black/40 shrink-0">
          <h2 id="credential-preview-title" className="text-sm font-bold text-white truncate pr-2">
            {preview.title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={preview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-cyan-300 hover:text-white"
            >
              Open in new tab
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-auto p-3 bg-black/30">
          {preview.kind === 'pdf' && (
            <iframe title={preview.title} src={preview.url} className="w-full h-[min(70vh,640px)] rounded-lg border border-white/10 bg-white" />
          )}
          {preview.kind === 'image' && (
            <div className="flex justify-center items-start">
              <img
                src={preview.url}
                alt=""
                className="max-w-full max-h-[min(70vh,640px)] object-contain rounded-lg border border-white/10"
              />
            </div>
          )}
          {preview.kind === 'other' && (
            <div className="text-center py-12 px-4 space-y-4">
              <FileText className="w-14 h-14 mx-auto text-cyan-500/50" />
              <p className="text-sm text-cyan-100/90">
                Inline preview is not available for this file type. Open it in a new tab to view or download.
              </p>
              <a
                href={preview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Open file
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Leadership evidence carousel modal: browse all PDFs for a given role. */
function EvidenceCarouselModal({
  roleLabel,
  evidenceRelPaths,
  initialIndex,
  onClose,
}: {
  roleLabel: string;
  evidenceRelPaths: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(() => Math.min(Math.max(0, initialIndex), evidenceRelPaths.length - 1));

  useEffect(() => {
    setIndex(Math.min(Math.max(0, initialIndex), evidenceRelPaths.length - 1));
  }, [initialIndex, evidenceRelPaths.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((prev) => Math.max(0, prev - 1));
      if (e.key === 'ArrowRight') setIndex((prev) => Math.min(evidenceRelPaths.length - 1, prev + 1));
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [evidenceRelPaths.length, onClose]);

  if (evidenceRelPaths.length === 0) return null;
  const relPath = evidenceRelPaths[index];
  const fileName = relPath.split('/').pop() ?? relPath;
  const url = administrationDocUrl(relPath);
  const kind = credentialPreviewKind(fileName);

  return (
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidence-carousel-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-white/20 bg-slate-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-black/40 shrink-0">
          <div className="min-w-0">
            <h2 id="evidence-carousel-title" className="text-sm font-bold text-white truncate pr-2">
              {roleLabel}: {fileName}
            </h2>
            <div className="text-xs text-white/60">
              {index + 1} / {evidenceRelPaths.length}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
              disabled={index === 0}
              className="px-3 py-2 rounded-lg bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              aria-label="Previous evidence"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => Math.min(evidenceRelPaths.length - 1, prev + 1))}
              disabled={index === evidenceRelPaths.length - 1}
              className="px-3 py-2 rounded-lg bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              aria-label="Next evidence"
            >
              Next
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close carousel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-auto p-3 bg-black/30">
          {kind === 'pdf' && (
            <iframe title={fileName} src={url} className="w-full h-[min(70vh,640px)] rounded-lg border border-white/10 bg-white" />
          )}
          {kind === 'image' && (
            <div className="flex justify-center items-start">
              <img
                src={url}
                alt=""
                className="max-w-full max-h-[min(70vh,640px)] object-contain rounded-lg border border-white/10"
              />
            </div>
          )}
          {kind === 'other' && (
            <div className="text-center py-12 px-4 space-y-4">
              <FileText className="w-14 h-14 mx-auto text-cyan-500/50" />
              <p className="text-sm text-cyan-100/90">
                Inline preview is not available for this file type. Open it in a new tab to view or download.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Open file
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Level of Accreditation / QA: four cards with PDF preview from `Level of Accreditation/`. */
function Slide3AccreditationContent({ data }: { data: PresentationSlideData }) {
  const [preview, setPreview] = useState<CredentialPreviewState>(null);
  const sections = data.content.sections ?? [];

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-1 content-start gap-4 overflow-y-auto pr-2 custom-scrollbar md:grid-cols-2 md:gap-5 lg:gap-6">
        {sections.map((section: any, i: number) => {
          const url = accreditationDocUrl(section.documentFile);
          return (
            <div
              key={i}
              className="flex min-h-[260px] flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
            >
              <div className="mb-3 flex items-start gap-3">
                <Award className="mt-0.5 h-8 w-8 shrink-0 text-amber-300" />
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">{section.title}</h3>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-amber-50/95">{section.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setPreview({ url, title: section.title, kind: 'pdf' })}
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-500/25 px-4 py-2 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-500/35"
                >
                  <FileText className="h-4 w-4" />
                  Preview
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open document
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <CredentialPreviewModal preview={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

function EvidenceFileTree({
  nodes,
  fileUrl,
  onPreview,
  depth = 0,
}: {
  nodes: EvidenceTreeNode[];
  fileUrl: (relPath: string) => string;
  onPreview: (s: NonNullable<CredentialPreviewState>) => void;
  depth?: number;
}) {
  return (
    <ul
      className={
        depth > 0
          ? 'ml-2 mt-1 space-y-0.5 border-l border-fuchsia-500/20 pl-2 sm:ml-3 sm:pl-3'
          : 'space-y-0.5'
      }
    >
      {nodes.map((node, idx) => (
        <li key={`${depth}-${idx}-${node.name}`}>
          {node.type === 'dir' ? (
            <details className="group min-w-0">
              <summary className="flex cursor-pointer list-none items-center gap-2 py-1 text-sm text-fuchsia-200 hover:text-white [&::-webkit-details-marker]:hidden">
                <FolderOpen className="h-4 w-4 shrink-0 text-fuchsia-400/90" aria-hidden />
                <span className="truncate font-medium">{node.name}</span>
              </summary>
              <EvidenceFileTree
                nodes={node.children}
                fileUrl={fileUrl}
                onPreview={onPreview}
                depth={depth + 1}
              />
            </details>
          ) : (
            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 py-1 pl-0.5">
              <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fuchsia-400/80" aria-hidden />
              <span className="min-w-[8rem] flex-1 break-words text-xs text-fuchsia-50/95">{node.name}</span>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const url = fileUrl(node.relPath);
                    const kind = credentialPreviewKind(node.name);
                    onPreview({ url, title: node.name, kind });
                  }}
                  className="text-xs font-semibold text-fuchsia-300 underline decoration-fuchsia-500/40 hover:text-white"
                >
                  Preview
                </button>
                <a
                  href={fileUrl(node.relPath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-200/90 hover:text-white"
                >
                  <ExternalLink className="h-3 w-3 opacity-80" />
                  Open
                </a>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/** OBE slide: files from `Flexible Learning/` (continuity / flexible learning evidence). */
function FlexibleLearningFileTree({
  nodes,
  onPreview,
  depth = 0,
}: {
  nodes: EvidenceTreeNode[];
  onPreview: (s: NonNullable<CredentialPreviewState>) => void;
  depth?: number;
}) {
  const fileUrl = (relPath: string) => flexibleLearningFileUrl(relPath);
  return (
    <ul
      className={
        depth > 0
          ? 'ml-2 mt-1 space-y-0.5 border-l border-violet-500/25 pl-2 sm:ml-3 sm:pl-3'
          : 'space-y-0.5'
      }
    >
      {nodes.map((node, idx) => (
        <li key={`${depth}-${idx}-${node.name}`}>
          {node.type === 'dir' ? (
            <details className="group min-w-0">
              <summary className="flex cursor-pointer list-none items-center gap-2 py-1 text-sm text-violet-200 hover:text-white [&::-webkit-details-marker]:hidden">
                <FolderOpen className="h-4 w-4 shrink-0 text-violet-400/90" aria-hidden />
                <span className="truncate font-medium">{node.name}</span>
              </summary>
              <FlexibleLearningFileTree
                nodes={node.children}
                onPreview={onPreview}
                depth={depth + 1}
              />
            </details>
          ) : (
            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 py-1 pl-0.5">
              <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/80" aria-hidden />
              <span className="min-w-[8rem] flex-1 break-words text-xs text-violet-50/95">{node.name}</span>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const url = fileUrl(node.relPath);
                    const kind = credentialPreviewKind(node.name);
                    onPreview({ url, title: node.name, kind });
                  }}
                  className="text-xs font-semibold text-violet-300 underline decoration-violet-500/40 hover:text-white"
                >
                  Preview
                </button>
                <a
                  href={fileUrl(node.relPath)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-violet-200/90 hover:text-white"
                >
                  <ExternalLink className="h-3 w-3 opacity-80" />
                  Open
                </a>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function resolveResearchSectionNodes(
  source: 'research' | 'gpmo',
  folderName: string | undefined,
): EvidenceTreeNode[] {
  if (source === 'gpmo') {
    return gpmoDocumentTree.children as EvidenceTreeNode[];
  }
  if (!folderName) return [];
  const hit = researchDocumentTree.children.find(
    (n): n is ResearchDirNode => n.type === 'dir' && n.name === folderName,
  );
  return hit ? (hit.children as EvidenceTreeNode[]) : [];
}

/** Research & Creative Works: tabbed RCW themes + evidence file tree + PDF preview. */
function Slide7ResearchContent({ data }: { data: PresentationSlideData }) {
  const [preview, setPreview] = useState<CredentialPreviewState>(null);
  const [activeTab, setActiveTab] = useState(0);
  const c = data.content;
  const sections = (c.sections ?? []) as Array<{
    title: string;
    shortDesc: string;
    icon: string;
    source: 'research' | 'gpmo';
    folderName?: string;
  }>;

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  const safeIndex = Math.min(Math.max(0, activeTab), Math.max(0, sections.length - 1));
  const section = sections[safeIndex];
  const nodes = section
    ? resolveResearchSectionNodes(section.source, section.folderName)
    : [];
  const fileUrlFor =
    section?.source === 'gpmo'
      ? (relPath: string) => gpmoFileUrl(relPath)
      : (relPath: string) => researchFileUrl(relPath);

  return (
    <div className="relative flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/25">
            <Microscope className="h-7 w-7 text-fuchsia-300" aria-hidden />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">{c.introTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-fuchsia-100/95">{c.introDesc}</p>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-hidden">
        <div
          className="flex shrink-0 flex-wrap gap-2"
          role="tablist"
          aria-label="RCW evidence categories"
        >
          {sections.map((s, i) => {
            const TabIcon = getIconComponent(s.icon);
            const selected = i === safeIndex;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(i)}
                className={
                  selected
                    ? 'inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/50 bg-fuchsia-500/30 px-3 py-2 text-left text-xs font-semibold text-white shadow-sm sm:text-sm'
                    : 'inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left text-xs font-medium text-fuchsia-200/90 hover:bg-white/10 sm:text-sm'
                }
              >
                <TabIcon className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                <span className="max-w-[10rem] truncate sm:max-w-[14rem]">{s.title}</span>
              </button>
            );
          })}
        </div>

        {section && (
          <div
            className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5"
            role="tabpanel"
          >
            <div>
              <h3 className="text-lg font-bold text-white md:text-xl">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fuchsia-100/90">{section.shortDesc}</p>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {nodes.length === 0 ? (
                <p className="text-sm text-fuchsia-200/70">No files found for this category.</p>
              ) : (
                <EvidenceFileTree nodes={nodes} fileUrl={fileUrlFor} onPreview={setPreview} />
              )}
            </div>
          </div>
        )}
      </div>

      <CredentialPreviewModal preview={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

function LibraryFileTree({ nodes, depth = 0 }: { nodes: LibraryNode[]; depth?: number }) {
  return (
    <ul
      className={
        depth > 0
          ? 'ml-2 mt-1 space-y-0.5 border-l border-white/10 pl-2 sm:ml-3 sm:pl-3'
          : 'space-y-0.5'
      }
    >
      {nodes.map((node, idx) => (
        <li key={`${depth}-${idx}-${node.name}`}>
          {node.type === 'dir' ? (
            <details className="group min-w-0">
              <summary className="flex cursor-pointer list-none items-center gap-2 py-1 text-sm text-sky-200 hover:text-white [&::-webkit-details-marker]:hidden">
                <FolderOpen className="h-4 w-4 shrink-0 text-sky-400/90" aria-hidden />
                <span className="truncate font-medium">{node.name}</span>
              </summary>
              <LibraryFileTree nodes={node.children} depth={depth + 1} />
            </details>
          ) : (
            <div className="flex flex-wrap items-start gap-x-2 gap-y-1 py-1 pl-0.5">
              <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400/80" aria-hidden />
              <span className="min-w-[8rem] flex-1 break-words text-xs text-sky-50/95">{node.name}</span>
              <a
                href={libraryFileUrl(node.relPath)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-sky-300 hover:text-white"
              >
                <ExternalLink className="h-3 w-3 opacity-80" />
                Open
              </a>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Library Resources: Reference Books hero + cards (left); library documents list with Open links (right). */
function Slide8LibraryContent({ data }: { data: PresentationSlideData }) {
  const c = data.content;
  const { children } = libraryDocumentTree;
  const rootFiles = children.filter((n): n is LibraryFileNode => n.type === 'file');
  const rootDirs = children.filter((n): n is LibraryDirNode => n.type === 'dir');

  return (
    <div className="relative flex h-full min-h-0 flex-col gap-4 lg:flex-row lg:gap-5">
      <aside className="flex shrink-0 flex-col gap-4 lg:max-h-full lg:w-80 lg:overflow-y-auto lg:pr-1 xl:w-96 custom-scrollbar">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-md">
          <BookMarked className="mb-3 h-12 w-12 text-sky-300" />
          <h2 className="mb-2 text-xl font-bold leading-tight text-white xl:text-2xl">{c.mainTitle}</h2>
          <p className="text-sm leading-relaxed text-sky-100">{c.mainDesc}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {c.resources.map((item: any, i: number) => {
            const ItemIcon = getIconComponent(item.icon);
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:p-5"
              >
                <ItemIcon className="mb-3 h-9 w-9 text-sky-400" />
                <h4 className="mb-2 text-base font-bold leading-snug text-white">{item.title}</h4>
                <p className="text-xs leading-relaxed text-sky-100/95 sm:text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3">
        <h3 className="flex shrink-0 items-center gap-2 text-lg font-bold text-white">
          <FolderOpen className="h-6 w-6 text-sky-300" />
          Library documents
        </h3>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {rootFiles.length > 0 && (
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-200">
                Program materials
              </h4>
              <p className="mb-3 text-xs text-sky-200/80">
                MIT graduate program title listings (copyright variants) supporting curriculum and accreditation
                evidence.
              </p>
              <LibraryFileTree nodes={rootFiles} />
            </div>
          )}
          {rootDirs.map((dir, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5"
            >
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-sky-200">{dir.name}</h4>
              <LibraryFileTree nodes={dir.children} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function resolveLaboratorySectionNodes(folderName: string | undefined): EvidenceTreeNode[] {
  if (!folderName) return [];
  const hit = laboratoriesDocumentTree.children.find(
    (n): n is { type: 'dir'; name: string; children: EvidenceTreeNode[] } =>
      n.type === 'dir' && n.name === folderName,
  );
  return hit ? hit.children : [];
}

/** Laboratory & Facilities: tabbed sections from `Laboratories/` with preview/open. */
function Slide9LaboratoryContent({ data }: { data: PresentationSlideData }) {
  const [preview, setPreview] = useState<CredentialPreviewState>(null);
  const [activeTab, setActiveTab] = useState(0);
  const c = data.content;
  const sections = [
    {
      title: 'Digital Instrumentation Laboratory',
      shortDesc:
        'Proposal and requisition evidence for laboratory establishment and equipment acquisition.',
      folderName: '9.a',
    },
    {
      title: 'Instructional Laboratories',
      shortDesc:
        'Computer laboratories, plans, and inventory records supporting instructional delivery.',
      folderName: '9.b Instructional Laboratories',
    },
    {
      title: 'Facilities for Internet Access',
      shortDesc: 'ISP contracts and bandwidth upgrades supporting reliable internet access.',
      folderName: '9.c Facilities for Internet Access',
    },
    {
      title: 'Software Subscriptions',
      shortDesc:
        'Subscription, procurement, and proof-of-access records for software and anti-plagiarism tools.',
      folderName: '9.d Subscription to Various Software Program',
    },
  ];

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  const safeIndex = Math.min(Math.max(0, activeTab), Math.max(0, sections.length - 1));
  const section = sections[safeIndex];
  const nodes = resolveLaboratorySectionNodes(section?.folderName);
  const rootFiles = laboratoriesDocumentTree.children.filter(
    (n): n is { type: 'file'; name: string; relPath: string } => n.type === 'file',
  ) as EvidenceTreeNode[];

  return (
    <div className="relative flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-500/25">
            <Monitor className="h-7 w-7 text-slate-200" aria-hidden />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
              {c.labsTitle ?? 'Laboratory and facilities evidence'}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-100/95">
              Browse laboratory plans, facility documentation, internet access evidence, software
              subscription records, and equipment references from the Laboratories repository.
            </p>
          </div>
        </div>
      </div>

      {rootFiles.length > 0 && (
        <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-200">
            General laboratory evidence
          </h3>
          <EvidenceFileTree
            nodes={rootFiles}
            fileUrl={(relPath) => laboratoriesFileUrl(relPath)}
            onPreview={setPreview}
          />
        </div>
      )}

      <div className="flex shrink-0 flex-wrap gap-2" role="tablist" aria-label="Laboratory sections">
        {sections.map((s, i) => {
          const selected = i === safeIndex;
          return (
            <button
              key={s.folderName}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveTab(i)}
              className={
                selected
                  ? 'inline-flex items-center gap-2 rounded-xl border border-slate-300/50 bg-slate-400/25 px-3 py-2 text-left text-xs font-semibold text-white shadow-sm sm:text-sm'
                  : 'inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left text-xs font-medium text-slate-200/90 hover:bg-white/10 sm:text-sm'
              }
            >
              <span className="max-w-[10rem] truncate sm:max-w-[16rem]">{s.title}</span>
            </button>
          );
        })}
      </div>

      {section && (
        <div
          className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5"
          role="tabpanel"
        >
          <h3 className="text-lg font-bold text-white md:text-xl">{section.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-100/90">{section.shortDesc}</p>
          <div className="mt-4 min-h-0 h-[calc(100%-4.5rem)] overflow-y-auto pr-2 custom-scrollbar">
            {nodes.length === 0 ? (
              <p className="text-sm text-slate-200/70">No files found for this section.</p>
            ) : (
              <EvidenceFileTree
                nodes={nodes}
                fileUrl={(relPath) => laboratoriesFileUrl(relPath)}
                onPreview={setPreview}
              />
            )}
          </div>
        </div>
      )}

      <CredentialPreviewModal preview={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

/** Horizontal / vertical step flow for enrollment (Section VI quick reference). */
function EnrollmentFlowRow({
  title,
  steps,
  flowIcon: FlowIcon,
}: {
  title: string;
  steps: string[];
  flowIcon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-pink-400/25 bg-gradient-to-br from-pink-950/40 to-rose-950/30 p-4 shadow-inner md:p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-500/30">
          <FlowIcon className="h-5 w-5 text-pink-200" aria-hidden />
        </div>
        <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{title}</h3>
      </div>

      {/* Mobile: vertical stack with down arrows */}
      <ol className="flex flex-col gap-0 md:hidden" aria-label={title}>
        {steps.map((step, i) => (
          <li key={i} className="flex flex-col items-stretch gap-0">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-500/40 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm leading-snug text-pink-50">
                {step}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="ml-3.5 flex h-6 items-center justify-start border-l border-dashed border-pink-400/40 pl-3.5">
                <ChevronDown className="h-4 w-4 text-pink-300/70" aria-hidden />
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* md+: horizontal pipeline with scroll on small widths */}
      <div className="hidden md:block">
        <div className="overflow-x-auto pb-1 custom-scrollbar">
          <ol
            className="flex min-w-0 flex-nowrap items-stretch gap-2"
            style={{ width: 'max-content' }}
            aria-label={title}
          >
            {steps.map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <ChevronRight className="h-5 w-5 shrink-0 text-pink-300/60" aria-hidden />
                )}
                <span className="inline-flex max-w-[11rem] items-center rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-center text-xs font-medium leading-snug text-pink-50 shadow-sm sm:max-w-[13rem] sm:text-sm">
                  <span className="mr-2 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-500/45 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/** Admission & Retention: policy summary cards + full PDF preview/open. */
function Slide10AdmissionPolicyContent({ data }: { data: PresentationSlideData }) {
  const [preview, setPreview] = useState<CredentialPreviewState>(null);
  const c = data.content;
  const pdfUrl = c.policyPdfUrl as string;
  const pdfTitle = c.policyTitle as string;
  const cards = (c.cards ?? []) as Array<{ title: string; desc: string; icon: string }>;
  const enrollmentFlows = (c.enrollmentFlows ?? []) as Array<{
    title: string;
    icon: string;
    steps: string[];
  }>;

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <div className="relative flex h-full min-h-0 flex-col gap-4">
      <div className="shrink-0 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/25">
              <ClipboardCheck className="h-7 w-7 text-pink-300" aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">{c.policyTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-pink-100/95">{c.policySubtitle}</p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2 md:justify-end">
            <button
              type="button"
              onClick={() => setPreview({ url: pdfUrl, title: pdfTitle, kind: 'pdf' })}
              className="inline-flex items-center gap-2 rounded-xl border border-pink-400/40 bg-pink-500/25 px-4 py-2.5 text-sm font-semibold text-pink-100 transition-colors hover:bg-pink-500/35"
            >
              <FileText className="h-4 w-4" />
              Preview policy
            </button>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
            >
              <ExternalLink className="h-4 w-4" />
              Open PDF
            </a>
          </div>
        </div>
      </div>

      {enrollmentFlows.length > 0 && (
        <div className="shrink-0 space-y-3">
          <div className="flex items-center gap-2 px-0.5">
            <Layout className="h-5 w-5 text-pink-300/90" aria-hidden />
            <h2 className="text-sm font-bold uppercase tracking-wider text-pink-200/95">
              Enrollment &amp; student flow
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {enrollmentFlows.map((flow, idx) => {
              const FlowIcon = getIconComponent(flow.icon);
              return (
                <div key={idx}>
                  <EnrollmentFlowRow title={flow.title} steps={flow.steps} flowIcon={FlowIcon} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((item, i) => {
            const ItemIcon = getIconComponent(item.icon);
            return (
              <div
                key={i}
                className="flex min-h-[200px] flex-col rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
              >
                <ItemIcon className="mb-3 h-8 w-8 shrink-0 text-pink-300" aria-hidden />
                <h3 className="mb-2 text-base font-bold leading-snug text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-pink-100/90">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <CredentialPreviewModal preview={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

/** Leadership Profile slide: dean + graduate program coordinator, plus Administration evidence PDFs. */
function Slide5LeadershipContent({ data }: { data: PresentationSlideData }) {
  type LeaderRole = 'dean' | 'gpc';

  const [activeLeader, setActiveLeader] = useState<LeaderRole>('dean');
  const [selectedEvidenceIndex, setSelectedEvidenceIndex] = useState(0);

  const deanEvidenceRelPaths = [
    'College Dean/Padayao - Credentials.pdf',
    'College Dean/2025 CEC College Dean.pdf',
    'College Dean/2026 CEC College Dean.pdf',
  ];

  const gpcEvidenceRelPaths = [
    'Graduate Program Coordinator/Designation/Designation-as-Graduate-Program-Coordinator-Doc-ken.pdf',
    'Graduate Program Coordinator/Diploma and TOR/DIT Diploma.pdf',
    'Graduate Program Coordinator/Diploma and TOR/MIT Diploma.pdf',
    'Graduate Program Coordinator/Diploma and TOR/DIT TOR.pdf',
    'Graduate Program Coordinator/Diploma and TOR/MIT TOR.pdf',
    'Graduate Program Coordinator/Oath of Office/Oath to Office.pdf',
    'Graduate Program Coordinator/Oath of Office/Cuya, Kennedy C._Appointment_Assistant Professor II.pdf',
    'Graduate Program Coordinator/Oath of Office/Certification of Assumption to Duty.pdf',
  ];

  const profiles: any[] = data.content?.profiles ?? [];
  const deanProfile = profiles.find((p) => /dean/i.test(String(p.role ?? ''))) ?? profiles[0];
  const gpcProfile =
    profiles.find((p) => !/dean/i.test(String(p.role ?? ''))) ?? profiles.find((p) => p !== deanProfile) ?? profiles[1];

  const activeProfile = activeLeader === 'dean' ? deanProfile : gpcProfile;
  const activeEvidenceRelPaths = activeLeader === 'dean' ? deanEvidenceRelPaths : gpcEvidenceRelPaths;
  const evidenceTitle = activeLeader === 'dean' ? 'College Dean evidences' : 'Graduate Program Coordinator evidences';

  useEffect(() => {
    setSelectedEvidenceIndex(0);
  }, [activeLeader]);

  const selectedRelPath = activeEvidenceRelPaths[selectedEvidenceIndex] ?? activeEvidenceRelPaths[0];
  const selectedFileName = selectedRelPath.split('/').pop() ?? selectedRelPath;
  const selectedUrl = administrationDocUrl(selectedRelPath);
  const selectedKind = credentialPreviewKind(selectedFileName);

  const secondaryLeader: LeaderRole = activeLeader === 'dean' ? 'gpc' : 'dean';
  const secondaryProfile = secondaryLeader === 'dean' ? deanProfile : gpcProfile;
  const secondaryCount = secondaryLeader === 'dean' ? deanEvidenceRelPaths.length : gpcEvidenceRelPaths.length;
  const secondaryEvidenceTitle =
    secondaryLeader === 'dean' ? 'College Dean evidences' : 'Graduate Program Coordinator evidences';

  const univOrgChartPdfUrl = '/organizational-chart/revised-univ-org-structure.pdf';
  const collegeOrgChartPngUrl = '/organizational-chart/rqat-mit-avp.png';

  const SegButton = ({
    leader,
    label,
  }: {
    leader: LeaderRole;
    label: string;
  }) => (
    <button
      type="button"
      onClick={() => setActiveLeader(leader)}
      className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-colors whitespace-nowrap ${
        activeLeader === leader
          ? 'bg-white/15 border-white/30 text-white'
          : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex h-full min-h-0 flex-col gap-4 overflow-hidden">
      <section
        className="shrink-0 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5"
        aria-labelledby="leadership-org-heading"
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Layout className="h-5 w-5 shrink-0 text-rose-300" aria-hidden />
          <h3 id="leadership-org-heading" className="text-lg font-bold text-white">
            Organizational structure
          </h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
            University &amp; college (MIT)
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
          {/* Preview styling aligned with evidence “Preview” panes below */}
          <div className="flex min-h-0 flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-200">
                University organizational chart
              </h4>
              <a
                href={univOrgChartPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-200/90 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                Open PDF
              </a>
            </div>
            <div className="px-1 text-xs font-semibold text-white/60">Preview</div>
            <div className="h-[min(22vh,260px)] min-h-[176px] overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <iframe
                title="University organizational chart (PDF)"
                src={univOrgChartPdfUrl}
                className="h-full w-full bg-white"
              />
            </div>
          </div>
          <div className="flex min-h-0 flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-200">
                College-based organizational chart (MIT)
              </h4>
              <a
                href={collegeOrgChartPngUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-200/90 hover:text-white"
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                Open image
              </a>
            </div>
            <div className="px-1 text-xs font-semibold text-white/60">Preview</div>
            <div className="h-[min(22vh,260px)] min-h-[176px] overflow-auto rounded-lg border border-white/10 bg-white/5 custom-scrollbar">
              <img
                src={collegeOrgChartPngUrl}
                alt="College-based organizational chart for Master of Information Technology: reporting from university leadership through the College of Engineering and Computational Sciences to MIT-related roles."
                className="mx-auto w-full max-w-full object-contain object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 overflow-y-auto pr-2 custom-scrollbar md:grid-cols-2 md:gap-8">
        <div className="min-h-0 flex flex-col gap-6">
          {/* Segmented control */}
          <div className="shrink-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <SegButton leader="dean" label="College Dean" />
              <SegButton leader="gpc" label="Graduate Program Coordinator" />
              <div className="ml-auto text-xs text-white/60 font-semibold">
                {activeEvidenceRelPaths.length} evidence{activeEvidenceRelPaths.length === 1 ? '' : 's'}
              </div>
            </div>
          </div>

          {/* Focused leader card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center relative overflow-hidden group h-full flex flex-col min-h-0">
          <div className="w-32 h-32 bg-rose-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/30 shrink-0">
            {activeProfile?.image ? (
              <img
                src={activeProfile.image}
                alt=""
                className="h-full w-full min-h-0 min-w-0 object-cover object-[center_22%]"
              />
            ) : (
              <User className="w-16 h-16 text-rose-600" />
            )}
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{activeProfile?.name}</h3>
          <p className="text-rose-200 text-xl mb-6 font-medium">{activeProfile?.role}</p>

          <div className="space-y-4 text-rose-50 text-left bg-black/20 p-6 rounded-xl text-sm shrink-0">
            <div>
              <strong className="text-rose-200 block mb-1">Education:</strong>
              {Array.isArray(activeProfile?.education) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {activeProfile.education.map((e: string, j: number) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
              ) : (
                <p>{activeProfile?.education}</p>
              )}
            </div>

            <div>
              <strong className="text-rose-200 block mb-1">Experience:</strong>
              {Array.isArray(activeProfile?.experience) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {activeProfile.experience.map((e: string, j: number) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
              ) : (
                <p>{activeProfile?.experience}</p>
              )}
            </div>

            {activeProfile?.specialization && (
              <div>
                <strong className="text-rose-200 block mb-1">Specialization:</strong>
                <p>{activeProfile.specialization}</p>
              </div>
            )}
          </div>

          {/* Evidence list + inline preview */}
          <div className="mt-6 bg-black/20 border border-white/10 rounded-xl p-4 text-left flex flex-col min-h-0 flex-1">
            <div className="flex items-center justify-between gap-3 mb-3 shrink-0">
              <h4 className="flex items-center gap-2 text-sm font-bold text-white">
                <FileText className="w-4 h-4 text-rose-300" />
                {evidenceTitle}
              </h4>
              <div className="text-xs text-white/60 font-semibold">
                Selected: {selectedFileName}
              </div>
            </div>

            <div className="flex-1 min-h-0 flex gap-4 overflow-hidden">
              <div className="w-full md:w-1/2 min-h-0 flex flex-col">
                <div className="text-xs text-white/60 mb-2 font-semibold shrink-0 px-1">
                  Evidence list
                </div>
                <div className="space-y-2 flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                  {activeEvidenceRelPaths.map((relPath, idx) => {
                    const fileName = relPath.split('/').pop() ?? relPath;
                    const isSelected = idx === selectedEvidenceIndex;
                    return (
                      <button
                        key={relPath}
                        type="button"
                        onClick={() => setSelectedEvidenceIndex(idx)}
                        className={`w-full text-left px-2 py-2 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-white/15 border-white/30 text-white'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold truncate">{fileName}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="w-full md:w-1/2 min-h-0 flex flex-col">
                <div className="text-xs text-white/60 mb-2 font-semibold shrink-0 px-1">
                  Preview
                </div>
                <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  {selectedKind === 'pdf' ? (
                    <iframe title={selectedFileName} src={selectedUrl} className="w-full h-full bg-white" />
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4 text-white/70 space-y-3">
                      <FileText className="w-10 h-10 opacity-60" />
                      <div className="text-sm">
                        Inline preview is available for PDFs only. Use “Open” in a new tab to view.
                      </div>
                      <a
                        href={selectedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 text-white text-sm font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open document
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary leader card (compact) */}
      <div className="min-h-0 flex flex-col gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 flex flex-col min-h-0">
          <div className="flex items-start justify-between gap-3 shrink-0 mb-4">
            <div className="min-w-0">
              <h3 className="text-2xl font-bold text-white truncate">
                {secondaryProfile?.name}
              </h3>
              <p className="text-rose-200 text-base font-medium truncate">
                {secondaryProfile?.role}
              </p>
            </div>
            <div className="shrink-0 text-xs font-bold text-amber-200/90 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-lg">
              {secondaryCount} evidences
            </div>
          </div>

          <div className="flex-1 min-h-0 rounded-xl border border-white/10 bg-black/20 p-4 overflow-hidden flex flex-col">
            <div className="text-xs text-white/60 font-semibold shrink-0 mb-3">
              {secondaryEvidenceTitle}
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar space-y-2">
              {(secondaryLeader === 'dean' ? deanEvidenceRelPaths : gpcEvidenceRelPaths).slice(0, 6).map((relPath) => {
                const fileName = relPath.split('/').pop() ?? relPath;
                return (
                  <div key={relPath} className="flex items-center gap-2 text-xs text-white/80">
                    <FileText className="w-4 h-4 text-rose-300 shrink-0 opacity-80" />
                    <span className="truncate">{fileName}</span>
                  </div>
                );
              })}
              {secondaryCount > 6 && (
                <div className="text-xs text-white/50">
                  +{secondaryCount - 6} more…
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveLeader(secondaryLeader)}
            className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors"
          >
            Switch focus to this leader
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

/** Faculty Profile slide: sidebar stats + research card; scrollable accordion list. */
function Slide6FacultyContent({ data }: { data: PresentationSlideData }) {
  const c = data.content;
  const facultyList = c.facultyList ?? [];
  /** Default open: BRIONES, Salvador II V. (credentials from `Faculty Credentials/BRIONES, Salvador II V./`). */
  const [expandedIndex, setExpandedIndex] = useState<number | null>(() => {
    const idx = facultyList.findIndex((f: { name?: string }) => f.name === 'BRIONES, Salvador II V.');
    return idx >= 0 ? idx : null;
  });
  const [credentialPreview, setCredentialPreview] = useState<CredentialPreviewState>(null);

  useEffect(() => {
    if (!credentialPreview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCredentialPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [credentialPreview]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full min-h-0">
      <aside className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-4 lg:max-h-full lg:overflow-y-auto lg:pr-1 custom-scrollbar">
        <div className="grid grid-cols-1 gap-4">
          {c.stats?.map((stat: any, i: number) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col justify-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-cyan-200 uppercase tracking-wider text-xs font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
        {c.researchPublicationAnalysis && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="shrink-0 p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 mx-auto sm:mx-0">
                <Microscope className="w-8 h-8 text-cyan-300" />
              </div>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {c.researchPublicationAnalysis.title}
                </h3>
                {(c.researchPublicationAnalysis.statValue != null ||
                  c.researchPublicationAnalysis.statLabel) && (
                  <div className="mb-4 rounded-xl bg-black/25 border border-white/10 p-4 text-center sm:text-left">
                    {c.researchPublicationAnalysis.statValue != null && (
                      <div className="text-4xl font-bold text-white mb-1 tabular-nums">
                        {c.researchPublicationAnalysis.statValue}
                      </div>
                    )}
                    {c.researchPublicationAnalysis.statLabel && (
                      <div className="text-cyan-200 uppercase tracking-wider text-xs font-bold leading-snug">
                        {c.researchPublicationAnalysis.statLabel}
                      </div>
                    )}
                    {c.researchPublicationAnalysis.statDetail && (
                      <div className="text-cyan-100/80 text-xs mt-2 font-medium">
                        {c.researchPublicationAnalysis.statDetail}
                      </div>
                    )}
                  </div>
                )}
                <p className="text-cyan-50/95 text-sm leading-relaxed">{c.researchPublicationAnalysis.body}</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      <div className="flex-1 flex flex-col min-h-0 min-w-0">
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 min-h-0">
          {facultyList.map((faculty: any, i: number) => {
            const open = expandedIndex === i;
            const panelId = `faculty-panel-${i}`;
            const credTree = facultyCredentialsManifest[faculty.name as string];
            const credCount = facultyCredentialsFileCounts[faculty.name as string] ?? 0;
            const showGroupHeader =
              faculty.group &&
              (i === 0 || (facultyList[i - 1] as { group?: string }).group !== faculty.group);
            return (
              <React.Fragment key={faculty.name}>
                {showGroupHeader && (
                  <div className="sticky top-0 z-10 -mx-0 mb-1 rounded-xl border border-cyan-400/25 bg-cyan-950/60 px-4 py-2 backdrop-blur-md">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                      {faculty.group}
                    </h3>
                  </div>
                )}
              <div
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              >
                <button
                  type="button"
                  id={`faculty-trigger-${i}`}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setExpandedIndex(open ? null : i)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors"
                >
                  {faculty.image ? (
                    <span className="relative block w-12 h-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                      <img
                        src={faculty.image}
                        alt=""
                        className="h-full w-full object-cover object-center"
                        loading={i > 4 ? "lazy" : "eager"}
                      />
                    </span>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/50 border border-white/10 flex items-center justify-center shrink-0">
                      <User className="w-6 h-6 text-cyan-300" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm sm:text-base truncate">{faculty.name}</div>
                    <div className="text-cyan-300 text-xs truncate">{faculty.role}</div>
                    <div className="text-cyan-100/80 text-xs mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span>
                        Published papers: <span className="font-mono font-bold text-white">{faculty.papers}</span>
                      </span>
                      {credCount > 0 && (
                        <span className="inline-flex items-center rounded-md border border-cyan-400/35 bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-100">
                          {credCount} credential{credCount === 1 ? '' : 's'}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-300 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {open && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faculty-trigger-${i}`}
                    className="border-t border-white/10 p-4 sm:p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 shrink-0 md:border-r border-white/10 md:pr-6">
                        {faculty.image && (
                          <div className="mb-4 flex w-full max-w-[280px] justify-center md:justify-start mx-auto md:mx-0">
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="max-h-[min(22rem,52vh)] w-auto max-w-full rounded-lg border border-white/10 bg-black/35 object-contain object-center"
                              loading="eager"
                            />
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-1">{faculty.name}</h3>
                        <p className="text-cyan-300 font-medium text-sm mb-4">{faculty.role}</p>
                        <div className="bg-black/20 rounded-lg p-3 border border-white/5 inline-block w-full md:w-auto">
                          <div className="text-xs text-cyan-100/70 uppercase tracking-wider mb-1">Published Papers</div>
                          <div className="text-2xl font-bold text-white">{faculty.papers}</div>
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-cyan-200 uppercase tracking-wider mb-2">
                            Educational Background
                          </h4>
                          <ul className="space-y-2">
                            {faculty.degrees.map((degree: string, j: number) => (
                              <li key={j} className="text-cyan-50 text-sm flex items-start gap-2">
                                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{degree}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-cyan-200 uppercase tracking-wider mb-1">Specialization</h4>
                          <p className="text-cyan-50 text-sm">{faculty.specialization}</p>
                        </div>
                        {faculty.researchValidation &&
                          (faculty.researchValidation.links?.length > 0 ||
                            faculty.researchValidation.publishedCount != null ||
                            faculty.researchValidation.scopusIndexedCount != null ||
                            faculty.researchValidation.citations != null) && (
                            <div className="rounded-xl border border-cyan-500/20 bg-black/25 p-4">
                              <h4 className="text-sm font-bold text-cyan-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <BarChart className="w-4 h-4 text-cyan-400 shrink-0" />
                                Published research validation
                              </h4>
                              {faculty.researchValidation.links?.length > 0 && (
                                <ul className="space-y-2 mb-4">
                                  {faculty.researchValidation.links.map(
                                    (link: { label: string; url: string }, li: number) => (
                                      <li key={li}>
                                        <a
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 text-sm text-cyan-100 hover:text-white underline decoration-cyan-500/50 hover:decoration-white transition-colors"
                                        >
                                          <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
                                          {link.label}
                                        </a>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-cyan-100/90">
                                {faculty.researchValidation.publishedCount != null && (
                                  <span>
                                    <strong className="text-cyan-300">Published research:</strong>{" "}
                                    {faculty.researchValidation.publishedCount}
                                  </span>
                                )}
                                {faculty.researchValidation.scopusIndexedCount != null && (
                                  <span>
                                    <strong className="text-cyan-300">Scopus-indexed:</strong>{" "}
                                    {faculty.researchValidation.scopusIndexedCount}
                                  </span>
                                )}
                                {faculty.researchValidation.citations != null && (
                                  <span>
                                    <strong className="text-cyan-300">Citations:</strong>{" "}
                                    {faculty.researchValidation.citations}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        <div className="rounded-xl border border-white/15 bg-black/25 p-4">
                          <h4 className="text-sm font-bold text-cyan-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <FolderOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                            Credential portfolio
                          </h4>
                          {credTree && credTree.children.length > 0 ? (
                            <div className="max-h-64 overflow-y-auto pr-1 custom-scrollbar text-left">
                              <FacultyCredentialTree
                                nodes={credTree.children}
                                facultyName={faculty.name}
                                onPreview={setCredentialPreview}
                              />
                            </div>
                          ) : (
                            <p className="text-xs text-cyan-100/75 leading-relaxed">
                              No credential files in the repository for this faculty yet. Add a folder under{" "}
                              <span className="font-mono text-cyan-200">Faculty Credentials/{faculty.name}/</span>{" "}
                              and run <span className="font-mono text-cyan-200">npm run generate:credentials</span>.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <CredentialPreviewModal preview={credentialPreview} onClose={() => setCredentialPreview(null)} />
    </div>
  );
}

function Slide11IndustryContent({ data }: { data: PresentationSlideData }) {
  const [activeTab, setActiveTab] = useState(0);
  const [preview, setPreview] = useState<CredentialPreviewState>(null);

  const c = data.content;

  const countFiles = (nodes: EvidenceTreeNode[]): number => {
    let n = 0;
    for (const node of nodes) {
      if (node.type === 'file') n += 1;
      else n += countFiles(node.children);
    }
    return n;
  };

  const countFilesWhereName = (
    nodes: EvidenceTreeNode[],
    predicate: (fileName: string) => boolean,
  ): number => {
    let n = 0;
    for (const node of nodes) {
      if (node.type === 'file') {
        if (predicate(node.name)) n += 1;
      } else {
        n += countFilesWhereName(node.children, predicate);
      }
    }
    return n;
  };

  const resolveDirChildren = (dirName: string): EvidenceTreeNode[] => {
    const hit = industryDocumentTree.children.find(
      (n): n is IndustryNode & { type: 'dir'; children: EvidenceTreeNode[] } =>
        n.type === 'dir' && n.name === dirName,
    );
    return hit?.children ?? [];
  };

  const isMoaDocument = (fileName: string) => {
    // Treat “MOA documents” as those explicitly labeled MOA/Agreement/Memorandum.
    // (This intentionally excludes “MOU ...” files from the MOA-docs count.)
    return /(MOA|Agreement|Memorandum)/i.test(fileName);
  };

  const moaChildren = resolveDirChildren('MOA');
  const immersionChildren = resolveDirChildren('Industry Immersion');
  const rootFiles = (industryDocumentTree.children.filter(
    (n): n is IndustryNode & { type: 'file' } => n.type === 'file',
  ) as EvidenceTreeNode[]) as EvidenceTreeNode[];

  const activeLinkagesCount = countFiles(moaChildren);
  const moaCount = countFilesWhereName(moaChildren, isMoaDocument);
  const immersionCount = countFiles(immersionChildren);
  const totalIndustryFiles = countFiles(industryDocumentTree.children as unknown as EvidenceTreeNode[]);

  const moaDocNodes = moaChildren.filter(
    (n): n is EvidenceTreeNode & { type: 'file' } => n.type === 'file' && isMoaDocument(n.name),
  );

  const sections = [
    {
      title: 'Active Linkages',
      shortDesc: 'MOA/MOU documents showing industry and partner engagement.',
      nodes: moaChildren,
    },
    {
      title: 'MOA documents',
      shortDesc: 'Documents labeled as MOA/Agreement/Memorandum (excluding “MOU ...”).',
      nodes: moaDocNodes,
    },
    {
      title: 'Industry Immersion',
      shortDesc: 'Evidence for immersion activities with partner institutions.',
      nodes: immersionChildren,
    },
    {
      title: 'International Affairs reports',
      shortDesc: 'IZN initiatives and accomplishment reports (top-level documents).',
      nodes: rootFiles,
    },
  ];

  const safeIndex = Math.min(Math.max(0, activeTab), Math.max(0, sections.length - 1));
  const section = sections[safeIndex];

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <div className="flex flex-col h-full min-h-0 gap-6">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
        <div className="flex items-start gap-4">
          <Handshake className="w-14 h-14 text-indigo-300" aria-hidden />
          <div className="min-w-0">
            <h2 className="text-3xl font-bold text-white mb-2">{c.mainTitle}</h2>
            <p className="text-indigo-100 max-w-2xl">{c.mainDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-extrabold text-white">{activeLinkagesCount}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mt-1">
              Active linkages
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-extrabold text-white">{moaCount}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mt-1">
              MOA documents
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-extrabold text-white">{immersionCount}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mt-1">
              Immersion evidence
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-extrabold text-white">{totalIndustryFiles}</div>
            <div className="text-xs text-indigo-200 uppercase tracking-wider font-bold mt-1">
              Total documents
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-0 flex-1">
        <div className="flex shrink-0 flex-wrap gap-2" role="tablist" aria-label="Industry documents">
          {sections.map((s, i) => {
            const selected = i === safeIndex;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(i)}
                className={
                  selected
                    ? 'inline-flex items-center gap-2 rounded-xl border border-indigo-400/50 bg-indigo-500/25 px-3 py-2 text-left text-xs font-semibold text-white shadow-sm sm:text-sm'
                    : 'inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left text-xs font-medium text-indigo-200/90 hover:bg-white/10 sm:text-sm'
                }
              >
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
          <div className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:p-5">
            <h3 className="text-lg font-bold text-white md:text-xl">{section.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-indigo-100/95">{section.shortDesc}</p>
            <div className="mt-4">
              {section.nodes.length === 0 ? (
                <p className="text-sm text-indigo-200/70">No documents found for this category.</p>
              ) : (
                <EvidenceFileTree
                  nodes={section.nodes}
                  fileUrl={(relPath) => industryFileUrl(relPath)}
                  onPreview={setPreview}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <CredentialPreviewModal preview={preview} onClose={() => setPreview(null)} />
    </div>
  );
}

const getSlides = (slidesData: PresentationSlideData[]) => {
  return slidesData.map(data => {
    const Icon = getIconComponent(data.icon);
    let content = null;

    if (data.id === 1) {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">{data.content.leftTitle}</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                {data.content.leftDesc}
              </p>
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-lg border border-blue-400/30 text-blue-100 font-semibold self-start">
                {data.content.leftBadge}
              </div>
            </div>
            
            {data.content.collegeGoal && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-300" />
                  College Goal
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {data.content.collegeGoal}
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">{data.content.rightTitle}</h3>
              <ul className="space-y-4">
                {data.content.rightList.map((goal: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-blue-50">
                    <CheckCircle className="w-6 h-6 text-blue-300 shrink-0 mt-0.5" />
                    <span className="text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {data.content.programObjectives && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-300" />
                  Program Objectives
                </h3>
                <ul className="space-y-3">
                  {data.content.programObjectives.map((obj: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-blue-50 text-sm italic">
                      <span className="text-blue-300">•</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );
    } else if (data.id === 2) {
      content = (
        <div className="flex flex-col h-full gap-6 overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-emerald-50 text-sm italic leading-relaxed">
              {data.content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">SUMMARY: CMO NO.15 S.2019</h4>
              <div className="space-y-2">
                {data.content.summary.cmo.map((item: any, i: number) => (
                  <div key={i} className={`flex justify-between text-emerald-50 ${item.isTotal ? 'font-bold border-t border-white/20 pt-2 mt-2' : ''}`}>
                    <span>{item.label}</span>
                    <span>{item.units}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">SUMMARY: PROPOSED</h4>
              <div className="space-y-2">
                {data.content.summary.proposed.map((item: any, i: number) => (
                  <div key={i} className={`flex justify-between text-emerald-50 ${item.isTotal ? 'font-bold border-t border-white/20 pt-2 mt-2' : ''}`}>
                    <span>{item.label}</span>
                    <span>{item.units}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-emerald-300" />
              Program of Study
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.content.programOfStudy.map((cat: any, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-2">
                    <h4 className="text-lg font-bold text-emerald-300">{cat.category}</h4>
                    <span className="bg-emerald-500/30 px-2 py-1 rounded text-xs font-bold text-white">{cat.units} Units</span>
                  </div>
                  <ul className="space-y-3">
                    {cat.courses.map((course: any, j: number) => (
                      <li key={j} className="text-emerald-50 text-sm flex gap-2">
                        <span className="font-mono text-emerald-300 shrink-0">{course.code}</span>
                        <span>{course.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-8 h-8 text-emerald-300" />
              Course Descriptions
            </h3>
            <div className="space-y-10">
              {(() => {
                const descriptions = data.content.courseDescriptions as any[];
                const byCode = new Map(descriptions.map((c) => [c.code, c]));
                const groups: { category: string; codes: string[] }[] = [
                  { category: "Bridging Courses", codes: ["MITB01", "MITB02", "MITB03"] },
                  { category: "Core Courses", codes: ["MIT101", "MIT102", "MIT103", "MIT104"] },
                  { category: "Major Courses", codes: ["MIT201", "MIT203", "MIT204", "MIT205"] },
                  { category: "Cognate Course", codes: ["MIT202", "MIT301"] },
                  { category: "Graduate Project (Capstone)", codes: ["MIT401", "MIT402"] },
                ];
                return groups.map((group, gi) => (
                  <div key={gi} className="space-y-4">
                    <h4 className="text-base font-bold text-emerald-200 uppercase tracking-wider border-b border-emerald-400/25 pb-2">
                      {group.category}
                    </h4>
                    <div className="space-y-4">
                      {group.codes.map((code, ci) => {
                        const course = byCode.get(code);
                        if (!course) return null;
                        return (
                          <div
                            key={`${code}-${ci}`}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                          >
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-3 border-b border-white/10 pb-2">
                              <div>
                                <span className="font-mono text-emerald-300 font-bold mr-2">{course.code}</span>
                                <span className="text-lg font-bold text-white">{course.name}</span>
                              </div>
                              <div className="flex gap-2">
                                <span className="bg-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-200 border border-emerald-500/30 uppercase">
                                  Credit: {course.credit}
                                </span>
                                <span className="bg-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-200 border border-emerald-500/30 uppercase">
                                  Hours: {course.hours}
                                </span>
                              </div>
                            </div>
                            <p className="text-emerald-50 text-sm leading-relaxed mb-3">{course.description}</p>
                            <div className="text-[10px] text-emerald-300/70 font-bold uppercase tracking-wider">
                              Prerequisite: {course.prerequisite}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      );
    } else if (data.id === 3) {
      content = <Slide3AccreditationContent data={data} />;
    } else if (data.id === 4) {
      content = <Slide4Content data={data.content} />;
    } else if (data.id === 5) {
      content = <Slide5LeadershipContent data={data} />;
    } else if (data.id === 6) {
      content = <Slide6FacultyContent data={data} />;
    } else if (data.id === 7) {
      content = <Slide7ResearchContent data={data} />;
    } else if (data.id === 8) {
      content = <Slide8LibraryContent data={data} />;
    } else if (data.id === 9) {
      content = <Slide9LaboratoryContent data={data} />;
    } else if (data.id === 10) {
      content = <Slide10AdmissionPolicyContent data={data} />;
    } else if (data.id === 11) {
      content = <Slide11IndustryContent data={data} />;
    }

    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      icon: Icon,
      color: data.color,
      content
    };
  });
};

export function PresentationViewer({ slidesData, onClose }: { slidesData: PresentationSlideData[], onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const slides = getSlides(slidesData);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const activeSlide = slides[currentSlide];
  const ActiveIcon = activeSlide.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.color} opacity-40 transition-colors duration-1000`} />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Partido State University</h1>
            <p className="text-white/60 text-xs uppercase tracking-wider">MIT Program Evaluation</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-colors border border-white/20"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-7xl h-[80vh] mt-12 flex flex-col px-6 md:px-12 z-10">
        
        {/* Slide Header */}
        <div className="mb-8 flex items-end gap-6">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shrink-0 shadow-xl">
            <ActiveIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <motion.h2 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md"
            >
              {activeSlide.title}
            </motion.h2>
            <motion.p 
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 font-medium"
            >
              {activeSlide.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              {activeSlide.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white/50 font-medium text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 backdrop-blur-md text-white rounded-full transition-colors border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 backdrop-blur-md text-white rounded-full transition-colors border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
