import { eligibilityDocUrl } from './eligibilityUrls';
import { iiProgramLevelsDocUrl } from './iiProgramLevelsUrls';

export interface EvidenceLink {
  label: string;
  url: string;
  type?: 'drive' | 'document' | 'link';
  description?: string;
  important?: boolean;
  extendedDetails?: string;
}

export interface EvaluationItem {
  standard: string;
  requiredEvidence: string;
  evidenceLinks: EvidenceLink[];
}

export interface EvaluationArea {
  id: string;
  title: string;
  items: EvaluationItem[];
}

export const evaluationData: EvaluationArea[] = [
  {
    id: "eligibility",
    title: "I. ELIGIBILITY",
    items: [
      {
        standard: "Private HEIs, SUCs, and LUCs with CHED Institutional Recognition shall meet any of the following conditions:\n• With at least Level III program accreditation or equivalent from CHED recognized accrediting agency in the corresponding undergraduate degree program.",
        requiredEvidence: "• Certificate of Accreditation from International Accrediting Body\n• Certificate of Accreditation from the Accrediting Agency",
        evidenceLinks: [
          {
            label: "COPC of BSIT Program",
            url: eligibilityDocUrl("1 COPC of BSIT Program.pdf"),
            type: "document",
            description: "Certificate of Program Compliance for the BSIT program."
          },
          {
            label: "BSIT Level IV Accreditation",
            url: eligibilityDocUrl("2 BSIT Level IV Accreditation.pdf"),
            type: "document",
            description: "Level IV accreditation evidence for the BSIT program."
          },
          {
            label: "Institutional Accreditation - AACCUP Technical Review and Recommended Board Action",
            url: eligibilityDocUrl("3 Institutional Accreditation_AACCUP Technical Review and Recommended Board Action (2025) (C) copy.pdf"),
            type: "document",
            description: "Institutional accreditation technical review and board action record."
          },
          {
            label: "PSU ISO 9001:2015 Certificate",
            url: eligibilityDocUrl("4 PSU ISO 9001_2015 Certificate July 2024-July 2027 copy.pdf"),
            type: "document",
            description: "ISO 9001:2015 certificate for July 2024 to July 2027."
          },
          {
            label: "Accreditation Status - BSIT Level III and Other Programs",
            url: eligibilityDocUrl("5 Accreditation Status - BSIT Level III and Other Programs.pdf"),
            type: "document",
            description: "Accreditation status summary for BSIT Level III and other programs."
          }
        ]
      }
    ]
  },
  {
    id: "program-levels",
    title: "II. PROGRAM LEVELS, TYPES AND OUTCOMES",
    items: [
      {
        standard: "Section 7. Types of Graduate Program\nProgram offering or program being proposed must be aligned with the type of master’s programs specified in Section 7-III of CMO 15, s. 2019",
        requiredEvidence: "The proposed Master of Information Technology (MIT) is a non-thesis, professional track graduate program. It is designed to cultivate advanced competencies in the application of technology in organizational and societal contexts. Students are required to complete a capstone project that includes original research work, oral defense, and publication in a refereed journal or Scopus-indexed conference proceedings. The program also mandates the passing of a comprehensive examination, alongside coursework and residency requirements.",
        evidenceLinks: [{ 
          label: "MIT Proposal Document", 
          url: iiProgramLevelsDocUrl("MIT Proposal Document.pdf"),
          type: "document",
          description: "Full proposal document detailing the Master of Information Technology program structure."
        }]
      },
      {
        standard: "Section 8. Major Requirement and Student Output\nSection 8.A-1: For MA (Academic Track)\n• Passing of comprehensive examination\n• Thesis\n• At least 1 Publication in refereed journal or juried creative work",
        requiredEvidence: "The program requires the following major requirements:\n• Passing of a comprehensive examination (with an exemption clause for early research publication);\n• Completion and defense of a Graduate Project (Capstone);",
        evidenceLinks: [{ 
          label: "GPMO Guidelines", 
          url: iiProgramLevelsDocUrl("GPMO Guidelines.pdf"),
          type: "document",
          description: "Graduate Program Manual of Operations detailing major requirements and student outputs."
        }]
      }
    ]
  },
  {
    id: "curriculum",
    title: "III. CURRICULUM",
    items: [
      {
        standard: "Section 11. Curricular and Developmental Initiatives\nThe HEIs shall have the flexibility to innovate and enhance their curricular offerings, but must comply with the prescribed minimum curricular requirements, aligned with the learning standards or outcomes-based education (OBE)",
        requiredEvidence: "The proposed Master of Information Technology (MIT) program requires a total of 36 credit units, distributed as follows:\n• Core Courses: 12 units\n• Major/Specialization Courses: 15 units\n• Cognate Course: 3 units\n• Capstone Project (Graduate Project 1 and 2): 6 units\n\nThis structure aligns with the CHED CMO No. 15, s. 2019, for non-thesis professional master’s programs.\n\nRequired evidences:\n• Curriculum Outline\n• Course Description\n• Sample Program of Study",
        evidenceLinks: [{ 
          label: "MIT Proposal Document", 
          url: "#",
          type: "document",
          description: "Full proposal document detailing the Master of Information Technology program structure."
        }]
      }
    ]
  },
  {
    id: "institutional-arrangement",
    title: "IV. INSTITUTIONAL ARRANGEMENT",
    items: [
      {
        standard: "1. Research and Creative Office – The HEI has an Office that develops and implements a working mechanism that facilitates the planning, management, conduct, and monitoring and evaluation of research and creative work across the different programs.",
        requiredEvidence: "The Research and Creative Work (RCW) Office of Partido State University, as reflected in the approved organizational chart and RCW Manual, serves as the central unit responsible for planning, managing, implementing, and evaluating research and creative activities across all academic programs.\n\nRequired evidences:\n• Organizational Chart\n• RCW Manual",
        evidenceLinks: [{ 
          label: "RCW Organizational Chart & Manual", 
          url: "#",
          type: "drive",
          description: "Official organizational chart and manual for the Research and Creative Work Office."
        }]
      },
      {
        standard: "2. RCW Policies – The HEI has policies and guidelines on benefits and incentives for faculty undertaking research or creative work, such as de-loading, research awards, and support for publications and other scholarly or creative works, among others. These policies should be reflected in the Graduate Program Manual of Operations (GPMO)",
        requiredEvidence: "The Research and Creative Work (RCW) Office at Partido State University is governed by policies and guidelines. These include structured procedures for the planning, implementation, monitoring, and evaluation of research and creative activities, as well as protocols for publication, ethics review, funding, and faculty-student engagement.\n\nRequired evidences:\n• RCW Policies\n• UREKMC Manual",
        evidenceLinks: [{ 
          label: "RCW Policies & UREKMC Manual", 
          url: "#",
          type: "drive",
          description: "Policies and guidelines on benefits, incentives, and research protocols."
        }]
      },
      {
        standard: "3. RCW Agenda – The HEI has clearly stated research and creative work agenda that includes the discipline being applied for. The agenda has to be:\na. anchored on the institution’s philosophy and framework\nb. responsive to identified goals and prioritized niches in the arts and sciences;\nc. aligned with the research and development thrusts and agenda of the country as articulated by national institutions such as NEDA, DOST, DOH, BAR-DA, CHED-NHERA; and\nd. responsive to the development needs of industry and society",
        requiredEvidence: "The Research and Creative Work (RCW) agenda should align with the institution's mandate, regional and national development goals, and global research priorities.\n\nRequired evidences:\n• RCW Agenda",
        evidenceLinks: [{ 
          label: "RCW Agenda Document", 
          url: "#",
          type: "drive",
          description: "Document outlining the research and creative work agenda aligned with national goals."
        }]
      },
      {
        standard: "4. Ethical Standards – The HEI maintains ethical standards to be observed by faculty and students when they conduct research/thesis/dissertation involving human participation or animal subjects. The HEI may adopt ethical standards developed by the appropriate agencies such as DOST.",
        requiredEvidence: "The approved policy governing research and creative work at Partido State University is titled “Manual for the Operation of University Research, Extension, and Knowledge Management”. This document outlines the institutional policies and guidelines for the development, implementation, evaluation, and dissemination of research and creative outputs.\n\nRequired evidences:\n• Policy on Ethical Standards\n• RCW Polices/Manual",
        evidenceLinks: [{ 
          label: "Ethical Standards Policy", 
          url: "#",
          type: "drive",
          description: "Manual for the Operation of University Research, Extension, and Knowledge Management."
        }]
      },
      {
        standard: "5. RCW Funding – the HEI shall allocate a regular budget for RCW and the capacity to mobilize other sources of funding to support its similar undertakings. CHED shall define the threshold for the RCW budget for each discipline as recommended by Technical Panel.",
        requiredEvidence: "Partido State University (ParSU) allocates a regular budget for Research and Creative Work (RCW) through its Annual Institutional Budget, which includes dedicated funding for research operations, faculty and student research grants, paper presentation, publication support, and research capability-building.\n\nRequired evidences:\n• Policy on RCW Funding\n• Latest Work and Financial Plan",
        evidenceLinks: [{ 
          label: "RCW Funding & Financial Plan", 
          url: "#",
          type: "drive",
          description: "Latest Work and Financial Plan demonstrating budget allocation for research."
        }]
      },
      {
        standard: "6. RCW Collaboration, Partnership or Networks – The HEI collaborates and/or partner with other research institutions and networks that demonstrates leadership in RCW, innovation and extension.\n\nThe HEI may link up with other faculty and graduate institutions and with research organizations and creative groups within and outside the country.",
        requiredEvidence: "Partido State University (ParSU) actively collaborates with various research institutions and networks to enhance its research capabilities and broaden the impact of its scholarly work. These partnerships focus on joint research projects, capacity-building, technical assistance, policy development, and knowledge dissemination in fields such as information technology, education, agriculture, and governance.\n\nRequired evidences:\n• Policy on RCW Collaboration\n• MOA with Partner Institutions/Agencies",
        evidenceLinks: [{ 
          label: "Collaboration MOAs", 
          url: "#",
          type: "drive",
          description: "Memorandum of Agreements with partner institutions and agencies."
        }]
      },
      {
        standard: "7. Graduate Program Manual of Operations (GPMO) – the HEI has a system of rationalizing offerings of graduate programs in matters of curriculum, research and creative work, supervision and resource optimization to be included in a GPMO. The GPMO shall include policies on plagiarism, anti-sexual harassment, and research and teaching assistantship program, among others.",
        requiredEvidence: "Partido State University has an existing Graduate Policies and Manual of Operations (GPMO) that governs its graduate programs. However, recognizing the need for alignment with current standards, a proposed revision was submitted to update the manual.\n\nThe proposed revision, titled “Revision of the Handbook of Academic Regulations and Degree Requirements for the Graduate Programs at Partido State University to Graduate Program Manual of Operation (GPMO)”, aims to:\n• Align with CHED CMO No. 15, s. 2019\n• Provide clear and comprehensive guidance for graduate stakeholders\n• Update outdated institutional policies last approved in 2009\n\nThe revision includes updated provisions on organizational structure, program verticalization, admission and retention policies, academic requirements, research and publication mandates, and quality assurance mechanisms.\n\nRequired evidences:\n• Latest GPMO\n• GPMP Revision Proposal",
        evidenceLinks: [{ 
          label: "GPMO & Revision Proposal", 
          url: "#",
          type: "drive",
          description: "Latest Graduate Program Manual of Operations and the proposed revisions."
        }]
      }
    ]
  },
  {
    id: "program-requirement",
    title: "V. PROGRAM REQUIREMENT",
    items: [
      {
        standard: "PROGRAM STRUCTURE\nSection 15-1: Structure of Graduate Programs\nA graduate program shall be organized and managed by discipline or field of specialization.\n\nIn cases of HEIs which have been originally constituted only as graduate school, the requirement on vertical articulation shall not be mandatory, provided that these institutions offer interdisciplinary graduate programs of high standard as determined by CHED.",
        requiredEvidence: "The graduate programs at Partido State University are now vertically aligned with their respective colleges, following the university's strategic reorganization under BOR Resolution No. 71, s. 2023. This decentralized structure enhances academic and operational efficiency by assigning program leadership and coordination to college deans and graduate program coordinators.\n\nEach program—such as MAEd and PhD in the College of Education, MPA in the College of Arts and Humanities, and MBA in the College of Business and Management—has its designated Graduate Program Coordinator.\n\nRequired evidences:\n• GPMP Revision Proposal\n• Organizational Chart with description",
        evidenceLinks: [{ 
          label: "Organizational Structure", 
          url: "#",
          type: "drive",
          description: "Organizational Chart with descriptions and GPMP Revision Proposal."
        }]
      },
      {
        standard: "OBE REQUIREMENT\nSection 15-2: OBE Graduate Program Design\nThe HEI follows the outcome-based education (OBE) framework in its graduate program design. The HEI has to submit the following documents:\na. Complete set of program and learning outcomes, including its additional program outcomes\nb. Curriculum and its justification including curriculum map\nc. Performance indicators for each outcome\nd. Measurement system for the level of attainment of each indicator\ne. Outcomes-based syllabus for each course\nf. System of program assessment and evaluation\ng. Continuous Quality Improvement (CQI)",
        requiredEvidence: "The College of Engineering and Computational Sciences (CECS) follows the Outcome-Based Education (OBE) framework in the design and implementation of the proposed Master of Information Technology (MIT) program. The curriculum is explicitly mapped to Program Learning Outcomes (PLOs), which align with CHED’s typology-based quality assurance standards.\n\nRequired evidences:\n• Complete Set of Program Outcomes\n• Curriculum Map\n• Performance Indicators\n• OBE Syllabus\n• CQI Documents",
        evidenceLinks: [{ 
          label: "OBE Framework Documents", 
          url: "#",
          type: "drive",
          description: "Complete set of Program Outcomes, Curriculum Map, Performance Indicators, OBE Syllabus, and CQI Documents."
        }]
      },
      {
        standard: "ADMINISTRATION\nSection 15-3: Administration\nDean\na. holder of a doctoral degree in the discipline or allied fields.",
        requiredEvidence: "TOR, Special Order for the Appointment/Designation of the Dean",
        evidenceLinks: [{ 
          label: "Dean Appointment Documents", 
          url: "#",
          type: "drive",
          description: "Terms of Reference and Special Order for the Appointment/Designation of the Dean."
        }]
      },
      {
        standard: "ADMINISTRATION\nDean\nb. has published works in refereed journals in one of the disciplines under the academic unit.",
        requiredEvidence: "Abstract of Researches",
        evidenceLinks: [{ 
          label: "Dean's Research Abstracts", 
          url: "#",
          type: "drive",
          description: "Abstracts of published researches by the Dean."
        }]
      },
      {
        standard: "ADMINISTRATION\nDepartment Chair/ Program Coordinator/ Head\na. holder of doctoral degree in the discipline or allied fields.",
        requiredEvidence: "Special Order for the Appointment/Designation of the Program Head, TOR",
        evidenceLinks: [{ 
          label: "Program Head Appointment", 
          url: "#",
          type: "drive",
          description: "Special Order for the Appointment/Designation of the Program Head and TOR."
        }]
      },
      {
        standard: "FACULTY\nSection 15-5: Number of Qualified Faculty (For Master’s Program-Thesis Track: MA-Academic/MA-Research)\n• There shall be at least four (4) full-time faculty members who have doctoral degrees in the discipline with published win refereed professional journal/s and/or have produced publicly recognized creative and/or technology outputs;\nor\n• If there is a dearth in Doctoral degree holders, at least 1 (one) full-time faculty who has a doctoral degree in the discipline and with published works in professional journals and/or have produced publicly recognized creative and/or technology outputs; and at least 3 (three) full-time who are master’s degree holders, but with doctoral units in the discipline and have at least 1 (one) publication in a refereed journal. The faculty with master’s degree plus doctoral units can only teach in the Master’s program, but cannot serve as Thesis Advisers.",
        requiredEvidence: "Based on the proposal, the Master of Information Technology (MIT) program at Partido State University is supported by a qualified faculty pool that meets the CHED requirements for non-thesis graduate programs under CMO No. 15 and CMO No. 19, s. 2019.\n\nRequired evidences:\n• Summary matrix of faculty members\n• Appointment Papers/Contract indicating that they are full-time\n• For scholarly work: Abstract of Research Published/Certificate of Publication\n• For recognition of RCW: certificate of recognition/award",
        evidenceLinks: [
          { 
            label: "Faculty Matrix & Contracts", 
            url: "#",
            type: "drive",
            description: "Summary matrix of faculty members and their full-time appointment papers/contracts.",
            important: true,
            extendedDetails: "• 4 Full-time faculty members with Doctoral degrees in IT/CS\n• 3 Full-time faculty with Master's degrees and Doctoral units\n• All employment contracts are verified and valid for the current academic year 2026-2027.\n• Includes teaching load distribution and administrative designations."
          }, 
          { 
            label: "Faculty Credentials", 
            url: "#",
            type: "document",
            description: "Abstracts of published researches, certificates of publication, and RCW recognition awards.",
            important: true,
            extendedDetails: "• 12 Published papers in Scopus-indexed journals over the last 3 years\n• 5 National Research and Creative Work (RCW) recognition awards\n• 8 Certificates of presentation in international IT conferences\n• Copies of original diplomas and CHED-authenticated transcripts."
          }
        ]
      },
      {
        standard: "ADVISER TO STUDENT RATIO\nSection 15-6: Adviser to Student Ratio\nAt all times, the adviser to student ratio is one (1) full-time faculty per maximum of five (5) students, inclusive both in and off campus.",
        requiredEvidence: "Required evidences:\n• Latest GPMO\n• GPMP Revision Proposal\n\n(see page 27 of the GPMO Proposal.)",
        evidenceLinks: [{ 
          label: "Adviser Ratio Guidelines", 
          url: "#",
          type: "drive",
          description: "Latest GPMO and GPMP Revision Proposal detailing the adviser to student ratio."
        }]
      },
      {
        standard: "THESIS/ DISSERTATION PANEL\nSection 15-7: Thesis/Dissertation Panel\na. Thesis or dissertation panel shall have among its members content and method specialist;\nb. Thesis/Dissertation adviser shall be selected from the content specialist, but he/she must be a doctoral degree holder with completed and ongoing research/creative work\nc. The method specialist shall provide technical advice on the appropriate research methodology to be used including the specific research design and appropriate technique to analyze either quantitative or qualitative data.\nd. Thesis defense panel shall have at least three (3) members while the dissertation panel shall have at least five (5), the members of which include content and method specialist",
        requiredEvidence: "Required evidences:\n• Latest GPMO\n• GPMP Revision Proposal\n\n(see page 52 of the Handbook of Academic Regulations and Degree Requirements (BOR Res. No. 59s 2009) & page 29 of the GPMO Proposal.)",
        evidenceLinks: [{ 
          label: "Panel Composition Rules", 
          url: "#",
          type: "drive",
          description: "Latest GPMO and GPMP Revision Proposal outlining thesis/dissertation panel requirements."
        }]
      },
      {
        standard: "LIBRARY\nSection 15-8. Library\nThe library requirements for undergraduate programs in the discipline shall be coupled with:\n\na. Subscription to at least two (2) peer-reviewed professional journals or internationally-refereed journals;",
        requiredEvidence: "Partido State University provides robust academic resources to support the Master of Information Technology (MIT) program, ensuring access to both printed and digital materials aligned with CHED standards.\n\nRequired evidences:\n• Certificate of Subscription/ MOA/ Contract with the Provider/ Receipt/ Proof of Purchase\n• Detailed summary list of journal subscriptions specific to the discipline.",
        evidenceLinks: [{ 
          label: "Journal Subscriptions", 
          url: "#",
          type: "drive",
          description: "Certificates of subscription, contracts, and detailed summary list of journal subscriptions."
        }]
      },
      {
        standard: "LIBRARY\nb. At least five (5) titles of graduate reference books (print and non-print) on specialized discipline for every subject offered under the program, published within the last five (5) years;",
        requiredEvidence: "The university library holds an extensive collection of reference books and eBooks covering all major MIT subjects. Based on the documentation:\n\nRequired evidences:\n• Detailed summary list of reference books organized according to each course.\n• Pictures of the reference books\n• Proof of acquisition (Official Receipt/ Deed of Donation/Proof of Purchase)",
        evidenceLinks: [{ 
          label: "Reference Books Inventory", 
          url: "#",
          type: "drive",
          description: "Summary list, pictures, and proof of acquisition for graduate reference books."
        }]
      },
      {
        standard: "LIBRARY\nc. At least one (1) of the five (5) titles is a foreign reference published by a reputable academic press; and",
        requiredEvidence: "Required evidences:\n• Detailed summary list of foreign reference books per course/subject",
        evidenceLinks: [{ 
          label: "Foreign Reference Books", 
          url: "#",
          type: "drive",
          description: "Detailed summary list of foreign reference books per course/subject."
        }]
      },
      {
        standard: "LIBRARY\nd. Subscription or have access (through a consortium/interlibrary basis) to electronic databases of international and reputable journals indexed in internationally recognized indexes of scholarly journals. Examples of these databases are ProQuest, EBSCOHost, ScienceDirect, Sage, Taylor and Francis, Oxford, Cambridge, and Philippine eLib. The use of the internet, materials in electronic format, open educational resources and other education technologies is encouraged. These library requirements shall be accessible to students.",
        requiredEvidence: "Required evidences:\n• Certificate of Subscription/ MOA/ Contract with the Provider/ Receipt/ Proof of Purchase",
        evidenceLinks: [{ 
          label: "Database Subscriptions", 
          url: "#",
          type: "drive",
          description: "Certificates of subscription and contracts for electronic databases."
        }]
      },
      {
        standard: "RCW, LABORATORY AND OTHER FACILITIES\n15.9 RCW, Laboratory and Other Facilities\nThe HEI provides adequate and relevant RCW facilities and equipment to support research and creative work in the specified discipline or access to the same, which may be available or sourced through linkages and partnership with industry, communities, and pertinent social organizations.\n\nThe requirement for laboratory and other facilities for graduate programs shall be coupled with:\n\na. Provision of research equipment and facilities in the basic sciences, if applicable;\nb. Instructional laboratories for Professional Master's programs; (for Masters’ Program)\nc. Extensive information technology facilities that will allow for internet access;\nd. Subscription to various software program to detect plagiarism and to analyze quantitative and qualitative data that are accessible to the faculty and students; and\ne. Occupational safety and health policies/standards for laboratories handling nanomaterials, radioactive materials and other hazardous chemicals",
        requiredEvidence: "The Master of Information Technology (MIT) program at Partido State University is supported by dedicated laboratory and facility resources designed to meet the academic and research needs of graduate students.\n\nPhotos/videos with description (subject for actual validation)\nProof of Purchase/ Picture of Software and License/ Proof of Subscription\nGPMO or other policies for Occupational safety and health policies",
        evidenceLinks: [{ 
          label: "Facilities & Equipment Proof", 
          url: "#",
          type: "drive",
          description: "Photos/videos of facilities, software licenses, and occupational safety policies."
        }]
      },
      {
        standard: "ADMISSION REQUIREMENT\nSection 16.10: Admission Requirements\nThere shall be a system for assessing the ability of students who will be admitted in the graduate program taking into consideration their aptitude, motivation, and capacity to pursue and complete further studies, conduct research, or apply advanced knowledge in professional practice.\n\nSection 8.A-1: For MA Academic/Research Track\n• Bachelor’s degree",
        requiredEvidence: "The admission assessment system for graduate students at Partido State University is a structured, merit-based process that evaluates academic readiness and research potential. To qualify, applicants must obtain an average rating of at least 85%.\n\nRequired evidences:\n• Latest GPMO\n• GPMP Revision Proposal",
        evidenceLinks: [{ 
          label: "Admission Guidelines", 
          url: "#",
          type: "drive",
          description: "Latest GPMO and GPMP Revision Proposal outlining the admission assessment system."
        }]
      },
      {
        standard: "HEI-INDUSTRY PARTNERSHIP\nSection 16.11: HEI-Industry Partnership\nThe HEI offering professional graduate programs has formally engaged professional associations, business, and industry to participate in curriculum planning and development, instruction, research and development, production, research immersion or internship, and other related activities.",
        requiredEvidence: "MOA/ Other documents as proof of engaging other stakeholders in the academic activities of the institution",
        evidenceLinks: [{ 
          label: "Industry Partnership MOAs", 
          url: "#",
          type: "drive",
          description: "Memorandum of Agreements and other documents proving engagement with industry stakeholders."
        }]
      }
    ]
  }
];
