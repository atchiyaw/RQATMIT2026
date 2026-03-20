import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight,
  BookOpen, GraduationCap, Award, Target, User, Users, 
  Microscope, Library, Monitor, ClipboardCheck, Handshake,
  CheckCircle, FileText, BarChart, Settings, Layout,
  Cpu, Globe, BookMarked, UsersRound, Building2, ExternalLink
} from 'lucide-react';
import { PresentationSlideData } from './presentationData';

const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Target, Layout, Award, Settings, User, Users, Microscope, Library, Monitor, ClipboardCheck, Handshake,
    BookOpen, Cpu, Globe, UsersRound, BookMarked, FileText, CheckCircle, BarChart, Building2
  };
  return icons[iconName] || Target;
};

const Slide4Content = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<'outcomes' | 'map' | 'syllabus'>('outcomes');

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex gap-2 border-b border-white/20 pb-2">
        <button
          onClick={() => setActiveTab('outcomes')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'outcomes' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Learning Outcomes
        </button>
        <button
          onClick={() => setActiveTab('map')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'map' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Curriculum Map
        </button>
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeTab === 'syllabus' ? 'bg-white/20 text-white' : 'text-purple-200 hover:bg-white/10'}`}
        >
          Syllabus & Plan
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
      </div>
    </div>
  );
};

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
            <div className="space-y-4">
              {data.content.courseDescriptions.map((course: any, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3 border-b border-white/10 pb-2">
                    <div>
                      <span className="font-mono text-emerald-300 font-bold mr-2">{course.code}</span>
                      <span className="text-lg font-bold text-white">{course.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="bg-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-200 border border-emerald-500/30 uppercase">Credit: {course.credit}</span>
                      <span className="bg-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold text-emerald-200 border border-emerald-500/30 uppercase">Hours: {course.hours}</span>
                    </div>
                  </div>
                  <p className="text-emerald-50 text-sm leading-relaxed mb-3">
                    {course.description}
                  </p>
                  <div className="text-[10px] text-emerald-300/70 font-bold uppercase tracking-wider">
                    Prerequisite: {course.prerequisite}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (data.id === 3) {
      content = (
        <div className="flex flex-col h-full gap-6 overflow-y-auto pr-2 custom-scrollbar">
          {data.content.sections.map((section: any, i: number) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-amber-300" />
                  <h3 className="text-3xl font-bold text-white tracking-tight">{section.title}</h3>
                </div>
                <p className="text-lg text-amber-50 leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl aspect-[3/4] md:aspect-auto md:h-64">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (data.id === 4) {
      content = <Slide4Content data={data.content} />;
    } else if (data.id === 5) {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-stretch">
          {data.content.profiles.map((profile: any, i: number) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center relative overflow-hidden group h-full flex flex-col">
              <div className="w-32 h-32 bg-rose-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/30 shrink-0">
                <User className="w-16 h-16 text-rose-600" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{profile.name}</h3>
              <p className="text-rose-200 text-xl mb-6 font-medium">{profile.role}</p>
              <div className="space-y-4 text-rose-50 text-left bg-black/20 p-6 rounded-xl text-sm flex-grow">
                <div>
                  <strong className="text-rose-200 block mb-1">Education:</strong>
                  {Array.isArray(profile.education) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {profile.education.map((e: string, j: number) => <li key={j}>{e}</li>)}
                    </ul>
                  ) : (
                    <p>{profile.education}</p>
                  )}
                </div>
                <div>
                  <strong className="text-rose-200 block mb-1">Experience:</strong>
                  {Array.isArray(profile.experience) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {profile.experience.map((e: string, j: number) => <li key={j}>{e}</li>)}
                    </ul>
                  ) : (
                    <p>{profile.experience}</p>
                  )}
                </div>
                {profile.specialization && (
                  <div>
                    <strong className="text-rose-200 block mb-1">Specialization:</strong>
                    <p>{profile.specialization}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (data.id === 6) {
      content = (
        <div className="flex flex-col h-full gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
            {data.content.stats.map((stat: any, i: number) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col justify-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-200 uppercase tracking-wider text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
            {data.content.facultyList.map((faculty: any, i: number) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 shrink-0 md:border-r border-white/10 md:pr-6">
                  <h3 className="text-xl font-bold text-white mb-1">{faculty.name}</h3>
                  <p className="text-cyan-300 font-medium text-sm mb-4">{faculty.role}</p>
                  
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5 inline-block w-full md:w-auto">
                    <div className="text-xs text-cyan-100/70 uppercase tracking-wider mb-1">Published Papers</div>
                    <div className="text-2xl font-bold text-white">{faculty.papers}</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-cyan-200 uppercase tracking-wider mb-2">Educational Background</h4>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (data.id === 7) {
      content = (
        <div className="flex flex-col h-full gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <Microscope className="w-12 h-12 text-fuchsia-300" />
                <h3 className="text-2xl font-bold text-white">{data.content.officeTitle}</h3>
              </div>
              <p className="text-fuchsia-100 text-sm mb-6">
                {data.content.officeDesc}
              </p>
              <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <div className="text-fuchsia-200 font-bold mb-2 flex items-center gap-2">
                  <span className="text-3xl text-white">{data.content.fundingAmount}</span> 
                  <span className="text-sm leading-tight">{data.content.fundingLabel}</span>
                </div>
                <ul className="text-xs text-fuchsia-100/80 space-y-1 mt-2">
                  {data.content.fundingList.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-fuchsia-300" />
                {data.content.collabTitle}
              </h3>
              <div className="space-y-3">
                {data.content.collabList.map((item: any, i: number) => (
                  <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <h4 className="text-fuchsia-50 font-semibold text-sm">{item.title}</h4>
                    <p className="text-fuchsia-200/70 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">{data.content.componentsTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.content.componentsList.map((item: any, i: number) => {
                const ItemIcon = getIconComponent(item.icon);
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-2 bg-black/20 p-4 rounded-xl">
                    <ItemIcon className="w-8 h-8 text-fuchsia-400" />
                    <span className="text-sm text-fuchsia-50 font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (data.id === 8) {
      content = (
        <div className="flex flex-col h-full gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 text-center">
            <Library className="w-20 h-20 text-sky-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">{data.content.mainTitle}</h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              {data.content.mainDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            {data.content.resources.map((item: any, i: number) => {
              const ItemIcon = getIconComponent(item.icon);
              return (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <ItemIcon className="w-10 h-10 text-sky-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sky-100">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (data.id === 9) {
      content = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">{data.content.labsTitle}</h3>
            <div className="space-y-4">
              {data.content.labsList.map((item: any, i: number) => (
                <div key={i} className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">{data.content.softwareTitle}</h3>
            <ul className="space-y-4">
              {data.content.softwareList.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle className="text-slate-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (data.id === 10) {
      content = (
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-pink-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{data.content.admissionTitle}</h3>
              <ul className="space-y-3 text-pink-100">
                {data.content.admissionList.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-pink-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{data.content.retentionTitle}</h3>
              <ul className="space-y-3 text-pink-100">
                {data.content.retentionList.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (data.id === 11) {
      content = (
        <div className="flex flex-col h-full gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
            <Handshake className="w-16 h-16 text-indigo-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">{data.content.mainTitle}</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              {data.content.mainDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            {data.content.partners.map((partner: any, i: number) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                <Building2 className="w-8 h-8 text-indigo-400 mb-3" />
                <h4 className="text-white font-bold mb-1">{partner.name}</h4>
                <p className="text-xs text-indigo-200">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      );
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
