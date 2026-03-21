import {FACULTY_PHOTO_URLS, KENNEDY_CUYA_FACULTY_PHOTO_URL} from './generated/facultyPhotos';

export interface PresentationSlideData {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  content: any;
}

export const initialPresentationData: PresentationSlideData[] = [
  {
    id: 1,
    title: "Program Overview",
    subtitle: "Description, Type, Outcomes & Goals",
    icon: "Target",
    color: "from-blue-600 to-indigo-900",
    content: {
      leftTitle: "Master in Information Technology",
      leftDesc: "The Master in Information Technology program prepares students for leadership roles in information technology by providing them with the necessary expertise and knowledge. The program establishes a strong foundation in information technology, allowing students to develop highly specialized, marketable skills in the areas of information technology that are most relevant to their careers and professional interests, as well as the needs of society.",
      leftBadge: "Program type: Master in Information Technology (Academic Track)",
      rightTitle: "Program Outcomes",
      rightList: [
        "Apply advanced IT concepts, methodologies, and tools to develop innovative solutions that address complex problems in industry and society",
        "Perform research and deploy IT-centric solutions efficiently, ensuring adherence to ethical guidelines and professional best practices",
        "Exhibit proficiency in project management, system design, data analysis, and emerging IT domains to meet organizational and societal needs",
        "Communicate and collaborate effectively within multidisciplinary teams, contributing to the achievement of organizational objectives",
        "Pursue lifelong learning and professional development to stay abreast of technological advancements and maintain relevance in the dynamic IT landscape"
      ],
      collegeGoal: "The College of Engineering and Computational Sciences aims to produce globally competitive graduates with high ethical standards of professionalism, committed to advancing mathematical and technological innovations, fostering research-driven solutions, promoting environmental sustainability, ensuring active stakeholder participation, and designing resilient infrastructure development projects.",
      programObjectives: [
        "Participating in professional development or postgraduate study in order to collaborate in diverse team environments and work effectively in the IT field to make a positive contribution to society through leadership positions and/or pursuing a research career.",
        "Integrate and apply IT-based solutions effectively in their practice to solve problems and meet the desired needs of society.",
        "Demonstrate a thorough understanding of the broad concepts of information technology while exercising professionalism and ethical judgment in the development, implementation, and management of information technology systems."
      ]
    }
  },
  {
    id: 2,
    title: "Curriculum Outline",
    subtitle: "Course Descriptions & Structure",
    icon: "Layout",
    color: "from-emerald-600 to-teal-900",
    content: {
      summary: {
        cmo: [
          { label: "Coursework", units: "27" },
          { label: "Comprehensive Exam", units: "-" },
          { label: "Capstone Course", units: "3" },
          { label: "Total", units: "30", isTotal: true }
        ],
        proposed: [
          { label: "Bridging Courses", units: "(9)" },
          { label: "Core Courses", units: "12" },
          { label: "Major Courses", units: "12" },
          { label: "Cognate Course", units: "6" },
          { label: "Comprehensive Exam", units: "(0)" },
          { label: "Graduate Project (Capstone)", units: "6" },
          { label: "Total", units: "36", isTotal: true }
        ]
      },
      programOfStudy: [
        {
          category: "Bridging Courses",
          units: 9,
          courses: [
            { code: "MITB01", title: "Object-Oriented Programming" },
            { code: "MITB02", title: "Data Structure" },
            { code: "MITB03", title: "Trends in IT" }
          ]
        },
        {
          category: "Core Subjects",
          units: 12,
          courses: [
            { code: "MIT101", title: "Advanced Database Systems" },
            { code: "MIT102", title: "Advanced Operating Systems and Networking" },
            { code: "MIT103", title: "Advanced System Design and Implementation" },
            { code: "MIT104", title: "IT Research Methods" }
          ]
        },
        {
          category: "Major Subjects",
          units: 12,
          courses: [
            { code: "MIT201", title: "Technology and Project Management" },
            { code: "MIT203", title: "ICT Information Security Administration" },
            { code: "MIT204", title: "Management Information Systems" },
            { code: "MIT205", title: "Web Engineering" }
          ]
        },
        {
          category: "Cognates",
          units: 6,
          courses: [
            { code: "MIT202", title: "Human Computer Interaction" },
            { code: "MIT301", title: "Introduction to Data Analytics" }
          ]
        },
        {
          category: "Graduate Project",
          units: 6,
          courses: [
            { code: "MIT401", title: "Graduate Project 1" },
            { code: "MIT402", title: "Graduate Project 2" }
          ]
        }
      ],
      courseDescriptions: [
        {
          code: "MITB01",
          name: "Object-Oriented Programming",
          description:
            "This bridging course develops proficiency in object-oriented analysis, design, and programming. Topics include classes, objects, encapsulation, inheritance, polymorphism, and common design patterns applied to software problem solving. Laboratory work reinforces concepts through implementation exercises.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MITB02",
          name: "Data Structure",
          description:
            "This bridging course covers fundamental and intermediate data structures and their algorithms, including lists, stacks, queues, trees, graphs, and hashing. Emphasis is placed on complexity analysis, selection of appropriate structures for problem domains, and implementation considerations for IT applications.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MITB03",
          name: "Trends in IT",
          description:
            "This bridging course surveys contemporary developments in information technology, including emerging tools, platforms, and practices across computing, networking, data, and security. Students explore how current trends shape organizations and graduate-level study in IT.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT101",
          name: "Advanced Database Systems",
          description: "This course offers a comprehensive study of the design, implementation, and management of modern database systems. It covers core principles and techniques in relational databases, query optimization, and data and information management, while exploring advanced topics such as distributed databases, NoSQL systems, data warehousing, and big data management. Students will gain hands-on experience with cutting-edge database technologies and tools, enabling them to design scalable, efficient, and secure database solutions. The course also examines emerging trends, including cloud-based databases, real-time data processing, and future trends in database design, equipping students with the skills to address the challenges of managing large-scale data in today’s data-driven world.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT102",
          name: "Advanced Operating Systems and Networking",
          description: "This course provides an in-depth understanding of the fundamental concepts of modern operating systems and computer networks. It explores advanced topics in operating systems, including parallel processing systems, distributed systems, real-time systems, network operating systems, open-source operating systems, and cloud computing. Students will gain a comprehensive understanding of how these systems are designed, implemented, and managed, with a focus on their role in supporting complex computing environments. The course also covers the integration of operating systems with networking technologies, enabling students to analyze and optimize system performance in distributed and cloud-based environments. Through theoretical knowledge and practical applications, students will develop the skills needed to design, manage, and troubleshoot advanced operating systems and networked computing systems.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT103",
          name: "Advanced System Design and Implementation",
          description: "This course focuses on the systematic analysis, design, and implementation of complex information systems. Students will explore comparative development methodologies and modeling tools to understand the end-to-end process of system development. Key topics include the design of human-computer interfaces, system implementation strategies, and system maintenance practices. The course emphasizes the application of theoretical concepts to real-world scenarios, enabling students to develop, deploy, and maintain robust information systems. Through hands-on projects and case studies, students will gain practical experience in using advanced tools and techniques to design user-friendly, efficient, and scalable systems. By the end of the course, students will be equipped with the skills to successfully manage the lifecycle of information systems, from initial analysis to post-implementation maintenance.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT104",
          name: "IT Research Methods",
          description: "This course provides students with a comprehensive introduction to research methodologies within the field of information technology. It covers a broad range of research-related topics, including major research paradigms, research design principles, research ethics, and data collection and analysis techniques. Students will explore various research methods applicable to IT and its sub-disciplines, such as quantitative, qualitative, and mixed-method approaches. The course emphasizes the development of critical thinking and problem-solving skills, enabling students to design, conduct, and evaluate research projects effectively. By the end of the course, students will be equipped with the knowledge and tools to undertake rigorous IT research, contributing to advancements in the field while adhering to ethical standards and best practices.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT201",
          name: "Technology and Project Management",
          description: "This course explores technology and project management from a managerial perspective, focusing on the essential processes and techniques required to successfully plan, execute, and oversee projects. Students will be introduced to the fundamental principles of project management, including project planning, resource allocation, risk management, and project evaluation. The course also covers technology management techniques and behavioral skills necessary for leading diverse teams and managing complex projects, particularly in the context of instructional design and IT initiatives. Through case studies and practical exercises, students will learn to apply systematic approaches to project management, ensuring the successful delivery of projects on time, within scope, and on budget. By the end of the course, students will be equipped with the tools and strategies to effectively manage technology-driven projects in various organizational settings.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT202",
          name: "Human Computer Interaction",
          description: "This course introduces students to the interdisciplinary field of Human-Computer Interaction (HCI), which integrates principles from computer science, cognitive psychology, design, and other related disciplines. Students will explore the fundamental aspects of human perception, cognition, and learning as they apply to the design, implementation, and evaluation of user interfaces. The course emphasizes both theoretical knowledge and hands-on experience, enabling students to create intuitive, user-friendly, and accessible interfaces. Topics include usability testing, user-centered design, interaction design, and evaluation techniques. Through practical projects and case studies, students will develop the skills to design and evaluate effective interfaces that enhance user experience and meet the needs of diverse user groups. By the end of the course, students will be equipped to apply HCI principles to real-world challenges in technology design and development.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT203",
          name: "ICT Information Security Administration",
          description: "This course provides a comprehensive overview of data security, integrity, privacy, and administration in the context of information and communication technology (ICT). Students will explore the principles of computer security, including the development and application of security policies, mechanisms for policy enforcement, and technologies for vulnerability and intrusion detection. The course covers key topics such as risk management, access control, encryption, network security, and incident response. Through case studies and practical exercises, students will learn to identify security threats, implement protective measures, and manage security systems effectively. By the end of the course, students will be equipped with the knowledge and skills to administer and safeguard ICT systems, ensuring data protection and compliance with security standards in organizational environments.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT204",
          name: "Management Information Systems",
          description: "This course focuses on the strategic role of information technology (IT) in modern organizations, teaching students to evaluate he opportunities and challenges managers face when leveraging IT to add value to their organizations. Students will explore how management information systems (MIS) support decision-making, operational efficiency, and competitive advantage. The course also examines the transformational changes driven by IT within and across industries, including the impact of emerging technologies such as big data, cloud computing, and artificial intelligence. Through case studies and real-world examples, students will develop the skills to analyze, design, and implement IT solutions that align with organizational goals. By the end of the course, students will be equipped to understand and manage the dynamic interplay between technology, business processes, and organizational strategy.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT205",
          name: "Web Engineering",
          description: "This course introduces a structured methodology for Web development projects, drawing parallels to principles used in software engineering. Students will learn the fundamental concepts, methods, technologies, and techniques essential for designing, developing, and maintaining effective websites and web applications. The course covers key topics such as web architecture, information organization, user interface design, database integration, and web security. Emphasis is placed on creating websites that efficiently collect, organize, and expose information resources while ensuring usability, scalability, and maintainability. Through hands-on projects and case studies, students will gain practical experience in applying web engineering principles to real-world scenarios. By the end of the course, students will be equipped with the skills to systematically plan, develop, and manage web-based systems that meet user and organizational needs.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT301",
          name: "Introduction to Data Analytics",
          description: "This course provides a comprehensive introduction to data analytics and visualization, equipping students with the skills to extract, process, analyze, and interpret data effectively. Students will learn how to access data from diverse sources, including web APIs and repository servers, and how to clean and organize data for analysis. The course covers the application of analytical techniques to solve real-world problems and emphasizes the creation of data visualizations to communicate insights clearly. Hands-on instruction will be provided in relevant programming languages (e.g., Python, R) and popular data analytics and visualization tools (e.g., Tableau, Power BI). By the end of the course, students will be able to perform end-to-end data analysis, from data acquisition to visualization, and apply these skills to practical, data-driven decision-making scenarios.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT401",
          name: "Graduate Project 1",
          description: "This is the first course in a two-part sequence. Students complete unique capstone projects that synthesize and integrate concepts and principles taught throughout the MIT program. This course applies IT project management practices by having students define and design projects in the areas of information technology management, such as database management, networking, and security.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        },
        {
          code: "MIT402",
          name: "Graduate Project 2",
          description: "This course is a continuation of MIT 401, in which students complete the project defined and designed in MIT 401. Students should implement, code, test, and document their projects prior to actually presenting them in front of a review panel for final evaluation and approval.",
          credit: "3 units",
          hours: "3 Lecture Hours / Week",
          prerequisite: "None"
        }
      ],
      description: "The MIT curriculum is based on the Commission on Higher Education's (CHED) Policies and Standards for Graduate Programs in Information Technology Education and is benchmarked against the curriculum of leading international academic institutions offering this program."
    }
  },
  {
    id: 3,
    title: "Level of Accreditation",
    subtitle: "Quality Assurance Status",
    icon: "Award",
    color: "from-amber-600 to-orange-900",
    content: {
      sections: [
        {
          title: "COPC from CHED for the BSIT Program",
          description:
            "The Bachelor of Science in Information Technology (BSIT) program holds a Certificate of Program Compliance (COPC) issued by the Commission on Higher Education (CHED) Regional Office V. This certification confirms the program’s legitimacy, regulatory compliance, and readiness for formal accreditation assessment.",
          documentFile: "COPC of BSIT Program.pdf"
        },
        {
          title: "BSIT Level IV Accreditation",
          description:
            "The BSIT program has met accreditation requirements under AACCUP Technical Review and Recommended Board Action, granting Level IV Re-Accredited Status. The review confirms a Grand Mean rating of 4.57, satisfying Level IV criteria and mandatory recommendations. Re-accreditation is effective August 16, 2025 to August 15, 2030, affirming sustained excellence and national quality assurance alignment.",
          documentFile: "BSIT Level IV Accreditation.pdf"
        },
        {
          title: "Institutional Accreditation Level III",
          description:
            "Partido State University maintains Institutional Accreditation at Level III through AACCUP, reflecting sound governance, quality management, and continuous improvement across programs and services. The technical review and board action document the institution’s capacity to deliver outcomes aligned with recognized standards.",
          documentFile:
            "Institutional Accreditation_AACCUP Technical Review and Recommended Board Action (2025) (C).pdf"
        },
        {
          title: "ISO 9001:2015 Certification",
          description:
            "The university operates a certified Quality Management System aligned with ISO 9001:2015, demonstrating systematic processes for meeting stakeholder and regulatory requirements and driving continual improvement in service delivery.",
          documentFile: "PSU ISO 9001_2015 Certificate July 2024-July 2027.pdf"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Outcomes-Based Education",
    subtitle: "OBE Framework & Implementation",
    icon: "Settings",
    color: "from-purple-600 to-violet-900",
    content: {
      learningOutcomes: [
        {
          id: "a",
          description: "Apply advanced IT concepts, methodologies, and tools to develop innovative solutions that address complex problems in industry and society.",
          indicators: [
            "a.1 Design and implement enterprise-level IT solutions that integrate emerging technologies to optimize business and societal processes.",
            "a.2 Develop and optimize large-scale database systems and data-driven applications that support decision-making and business intelligence in various industries.",
            "a.3 Conduct advanced software development and engineering practices by applying object-oriented design, microservices architecture, and DevOps methodologies for scalable and maintainable IT solutions.",
            "a.4 Innovate and prototype new IT-based products or services that address pressing societal issues (e.g., digital divide, smart cities, e-governance, environmental monitoring).",
            "a.5 Lead and manage cross-functional IT projects by applying project management methodologies (e.g., Agile, Scrum, PMBOK) to ensure the successful delivery of technology solutions.",
            "a.6 Develop intelligent and adaptive systems using advanced algorithms, automation, and decision-support systems that improve efficiency and user experience."
          ]
        },
        {
          id: "b",
          description: "Perform research and deploy IT-centric solutions efficiently, ensuring adherence to ethical guidelines and professional best practices.",
          indicators: [
            "b.1 Conduct IT research aligned with industry needs, producing publishable work in refereed journals or Scopus-indexed conferences.",
            "b.2 Analyze and critique existing IT research studies to identify gaps and propose new solutions.",
            "b.3 Develop and document an IT-centric solution following ethical standards, data privacy laws, and security best practices.",
            "b.4 Successfully complete a capstone project with a research-based approach that follows academic and industry standards."
          ]
        },
        {
          id: "c",
          description: "Exhibit proficiency in project management, system design, data analysis, and emerging IT domains to meet organizational and societal needs.",
          indicators: [
            "c.1 Develop and manage IT projects using agile and waterfall methodologies, ensuring timely completion and stakeholder satisfaction.",
            "c.2 Design and implement an information system or enterprise application that streamlines business processes.",
            "c.3 Apply advanced data analytics techniques to derive insights and support business intelligence.",
            "c.4 Utilize project management tools in IT project execution."
          ]
        },
        {
          id: "d",
          description: "Communicate and collaborate effectively within multidisciplinary teams, contributing to the achievement of organizational objectives.",
          indicators: [
            "d.1 Lead and contribute effectively to collaborative software development or IT research teams.",
            "d.2 Conduct professional presentations and defend IT solutions to industry experts, faculty, and peers.",
            "d.3 Write technical reports, research papers, and project documentation that conform to professional standards.",
            "d.4 Utilize collaborative development tools in team projects."
          ]
        },
        {
          id: "e",
          description: "Pursue lifelong learning and professional development to stay abreast of technological advancements and maintain relevance in the dynamic IT landscape.",
          indicators: [
            "e.1 Earn relevant and/or applicable IT certifications (e.g., AWS Certified Solutions Architect, CISSP, PMP, Google Data Engineer).",
            "e.2 Participate in industry conferences, hackathons, or professional development workshops.",
            "e.3 Contribute to open-source projects or maintain a professional portfolio showcasing IT expertise."
          ]
        }
      ],
      curriculumMap: {
        title: "Curriculum Map",
        description: "Alignment of MIT courses to Program Outcomes.",
        courses: [
          { code: "MIT 101", title: "Advanced Database Systems", mapped: "a.2, a.6, b.3, b.4, c.1, c.2, c.3" },
          { code: "MIT 102", title: "Advanced Operating Systems and Networking", mapped: "a.2, a.3, a.6, b.1, b.3, c.1, c.2, c.3, d.1, d.3" },
          { code: "MIT 103", title: "Advanced System Design and Implementation", mapped: "a.1, a.3, a.4, a.5, a.6, c.1, c.2, c.3, d.1" },
          { code: "MIT 104", title: "IT Research Methods", mapped: "b.1, b.2, b.3, b.4, c.4, d.2, d.3, e.2" },
          { code: "MIT 201", title: "Technology and Project Management", mapped: "a.4, a.5, c.1, c.2, c.3, d.1, d.2, d.3, e.1" },
          { code: "MIT 202", title: "Web Engineering", mapped: "a.1, a.3, a.4, a.5, a.6, b.3, c.1, c.2, c.3, d.1, e.3" },
          { code: "MIT 203", title: "ICT Information Security Administration", mapped: "a.3, a.6, b.3, c.2, c.3, d.1, d.2" },
          { code: "MIT 204", title: "Management Information Systems", mapped: "a.2, a.4, a.5, a.6, b.3, c.1, c.2, c.3, c.4, d.2" },
          { code: "MIT 301", title: "Human-Computer Interaction", mapped: "a.4, c.1, c.3, c.4, d.3" },
          { code: "MIT 302", title: "Introduction to Data Analytics", mapped: "a.2, a.6, b.3, b.4, c.4, e.1, e.2" },
          { code: "MIT 401", title: "MIT Capstone Project 1", mapped: "a.1, a.6, b.1, b.2, b.3, b.4, c.1, c.3, c.4, d.2, d.3" },
          { code: "MIT 402", title: "MIT Capstone Project 2", mapped: "a.3, a.5, a.6, d.1, d.2, d.3, d.4, e.3" }
        ]
      },
      syllabusPlan: {
        title: "Syllabus & Learning Plan",
        description: "Total number of complete syllabus as to the total number of courses in the MIT.",
        completed: 12,
        total: 12
      },
      pqLearningOutcomes: {
        intro:
          "The MIT Program at Partido State University aligns with Level 7 of the Philippine Qualifications Framework (PQF) as mandated in CMO No. 15, s. 2019, which specifies that graduate programs must demonstrate:",
        sections: [
          {
            heading: "ADVANCED KNOWLEDGE AND SKILLS IN INFORMATION TECHNOLOGY",
            outcomes: [
              {
                id: "PO1",
                description:
                  "Apply advanced IT concepts, frameworks, and methodologies to design innovative, secure, and scalable technological solutions that address complex organizational and societal problems.",
                indicators: [
                  "a.1 Design and implement enterprise-level IT architectures integrating emerging technologies (AI, IoT, cloud, automation).",
                  "a.2 Develop and optimize large-scale databases and data-driven applications supporting analytics and decision-making.",
                  "a.3 Apply advanced software engineering practices (microservices, DevOps, CI/CD) to build scalable systems.",
                  "a.4 Prototype innovative IT products or services that address societal priorities such as digital transformation, e-governance, smart cities, and sustainability.",
                  "a.5 Apply cybersecurity principles and governance frameworks to protect digital assets and ensure system resilience."
                ]
              },
              {
                id: "PO2",
                description:
                  "Demonstrate mastery of specialized IT domains—including systems design, data analytics, cybersecurity, and IT management—through interdisciplinary and industry-aligned approaches.",
                indicators: [
                  "b.1 Conduct advanced data analytics using statistical and algorithmic techniques to generate actionable insights.",
                  "b.2 Evaluate and implement secure network and cloud infrastructure solutions.",
                  "b.3 Create enterprise information systems aligned with strategic organizational requirements.",
                  "b.4 Integrate principles from management, computing, and design to build user-centered IT solutions."
                ]
              }
            ]
          },
          {
            heading: "SELF-DIRECTED RESEARCH",
            outcomes: [
              {
                id: "PO3",
                description:
                  "Independently conceptualize, design, and conduct high-quality IT research or capstone projects that contribute to innovation, digital transformation, and knowledge creation.",
                indicators: [
                  "c.1 Formulate research problems addressing gaps in IT practice or theory.",
                  "c.2 Apply quantitative, qualitative, mixed-methods, or design science research approaches aligned with IT standards.",
                  "c.3 Produce publishable research output compliant with ethical standards, data protection laws (e.g., Data Privacy Act), and professional guidelines.",
                  "c.4 Develop research-based IT solutions validated through experimentation, prototyping, simulation, or usability testing."
                ]
              },
              {
                id: "PO4",
                description:
                  "Critically evaluate existing IT literature, technologies, and practices to propose improvements, emerging trends, or novel approaches.",
                indicators: [
                  "d.1 Conduct systematic analysis of current IT research to identify trends, limitations, and opportunities.",
                  "d.2 Apply critical and analytical thinking to evaluate competing technologies, methodologies, and evidence to inform IT decision-making and innovation."
                ]
              }
            ]
          },
          {
            heading: "LIFELONG LEARNING WITH A HIGH DEGREE OF INDEPENDENCE",
            outcomes: [
              {
                id: "PO5",
                description:
                  "Demonstrate a high degree of independence, adaptability, and reflective practice in managing continuous professional development aligned with global IT advancements.",
                indicators: [
                  "e.1 Pursue advanced certifications, micro-credentials, or graduate-level training aligned with career goals and industry demand.",
                  "e.2 Engage in reflective practice and self-assessment to update technical and professional competencies continuously.",
                  "e.3 Monitor global IT trends, standards, and best practices to sustain relevance in a rapidly evolving field."
                ]
              },
              {
                id: "PO6",
                description:
                  "Collaborate effectively with interdisciplinary or multidisciplinary teams in designing, evaluating, and delivering IT solutions.",
                indicators: [
                  "f.1 Facilitate communication and coordination across diverse roles (e.g., business, engineering, design, policy) in IT initiatives.",
                  "f.2 Contribute technical leadership and shared accountability in team-based design, implementation, and evaluation of IT solutions.",
                  "f.3 Apply conflict resolution, negotiation, and stakeholder management skills in multidisciplinary IT contexts."
                ]
              }
            ]
          },
          {
            heading:
              "APPLICATION OF ADVANCED KNOWLEDGE AND SKILLS IN RESEARCH, PROFESSIONAL PRACTICE, OR CREATIVE WORK",
            outcomes: [
              {
                id: "PO7",
                description:
                  "Translate advanced IT knowledge and research into effective strategies, solutions, technologies, and digital innovations that support organizational goals and societal development.",
                indicators: [
                  "g.1 Design and deploy IT strategies and innovations that address documented organizational or community needs.",
                  "g.2 Integrate research findings and evidence-based methods into the development of digital products, services, or processes.",
                  "g.3 Assess impact and sustainability of IT interventions on organizations and society."
                ]
              },
              {
                id: "PO8",
                description:
                  "Lead and implement IT projects and innovations that align technological, ethical, and societal considerations.",
                indicators: [
                  "h.1 Plan and govern IT projects using appropriate methodologies while addressing risk, security, and compliance.",
                  "h.2 Uphold ethical principles, professional codes, and legal requirements in the delivery of IT innovations."
                ]
              },
              {
                id: "PO9",
                description:
                  "Apply advanced IT skills in professional and creative work, producing original, innovative, and impactful IT solutions.",
                indicators: [
                  "i.1 Deliver original or substantially improved IT artifacts (systems, research outputs, creative works) that meet professional quality standards.",
                  "i.2 Demonstrate innovation and impact through adoption, evaluation, or recognition in professional or academic contexts."
                ]
              }
            ]
          }
        ]
      },
      pqCurriculumMap: {
        title: "Curriculum Map",
        description: "Course alignment to Program Outcomes PO1–PO9 (PQF Learning Outcomes).",
        legend: "Legend: I = Introduced, R = Reinforced/Developed, M = Mastery/Assessed",
        courses: [
          {
            code: "MIT101",
            title: "Advanced Database Systems",
            po: ["I/R", "R", "", "I", "", "", "", "I", "R"]
          },
          {
            code: "MIT102",
            title: "Advanced Operating Systems & Networking",
            po: ["R", "R", "", "", "", "", "I", "R", "I"]
          },
          {
            code: "MIT103",
            title: "Advanced System Design & Implementation",
            po: ["R", "R", "", "I", "", "R", "I", "I", "R"]
          },
          {
            code: "MIT104",
            title: "IT Research Methods (Methods of Research)",
            po: ["", "", "I/R", "R", "", "", "", "R", ""]
          },
          {
            code: "MIT201",
            title: "Technology & Project Management",
            po: ["I", "I", "", "", "R", "R", "R", "", ""]
          },
          {
            code: "MIT202",
            title: "Human-Computer Interaction",
            po: ["I", "R", "", "I", "", "", "I", "R", "R"]
          },
          {
            code: "MIT203",
            title: "ICT Information Security Administration",
            po: ["R", "R", "", "", "", "", "I", "M", "I"]
          },
          {
            code: "MIT204",
            title: "Management Information Systems",
            po: ["I", "R", "", "R", "", "", "R", "I", ""]
          },
          {
            code: "MIT205",
            title: "Web Engineering",
            po: ["R", "R", "", "", "", "I", "R", "I", "R"]
          },
          {
            code: "MIT301",
            title: "Introduction to Data Analytics",
            po: ["I", "R", "", "", "", "", "R", "", "I"]
          },
          {
            code: "MIT401",
            title: "Graduate Project 1",
            po: ["R", "R", "R", "R", "I", "R", "R", "R", "R"]
          },
          {
            code: "MIT402",
            title: "Graduate Project 2",
            po: ["M", "M", "M", "M", "R", "M", "M", "M", "M"]
          }
        ]
      }
    }
  },
  {
    id: 5,
    title: "Leadership Profile",
    subtitle: "Dean and Graduate Program Coordinator",
    icon: "User",
    color: "from-rose-600 to-red-900",
    content: {
      profiles: [
        {
          name: "Engr. Emelina R. Padayao",
          role: "Dean, College of Engineering and Computational Sciences",
          education: "Master of Science in Civil Engineering at Spain University",
          experience: [
            "20 years in service",
            "College Dean since 2024"
          ],
          specialization: ""
        },
        {
          name: "Dr. Kennedy C. Cuya",
          image: KENNEDY_CUYA_FACULTY_PHOTO_URL,
          role: "Graduate Program Coordinator for MIT",
          education: [
            "BS in Information Technology at Partido State University, 2009",
            "Master of Information Technology at the Ateneo de Naga University, 2018",
            "Doctor in Information Technology at the University of the Cordilleras, 2024"
          ],
          experience: [
            "17 years of teaching experience",
            "Former Program Director of the BSIT and BSCS Program 2017-2021",
            "Currently the Graduate Program Coordinator 2026"
          ],
          specialization: ""
        }
      ]
    }
  },
  {
    id: 6,
    title: "Faculty Profile",
    subtitle: "Qualifications & Achievements",
    icon: "Users",
    color: "from-cyan-600 to-blue-900",
    content: {
      stats: [
        { value: "11", label: "Full-Time Faculty (100% Master's Degree Holders)" },
        { value: "3 (27%)", label: "Holding PhD or Doctorate Degree" },
        { value: "4 (36%)", label: "Pursuing PhD in IT" }
      ],
      researchPublicationAnalysis: {
        title: "Research publication engagement",
        statValue: "100%",
        statLabel: "of full-time faculty engaged in research & publication",
        statDetail: "11 / 11 faculty with documented scholarly profiles",
        body:
          "Documented outputs include peer-reviewed articles, conference proceedings, and indexed work verifiable through Google Scholar, Scopus, ResearchGate, and related platforms. This universal participation reflects a culture of continuous inquiry, supports graduate-level thesis and capstone supervision, and aligns the program with CHED expectations for research-capable faculty in graduate IT education."
      },
      facultyList: [
        {
          name: "ATOLE, Ronnel Rimando",
          image: FACULTY_PHOTO_URLS["ATOLE, Ronnel Rimando"],
          role: "Professor VI",
          degrees: [
            "PhD in Information Technology, Hannam University, South Korea",
            "Master of Science in Information Technology, Hannam University, South Korea",
            "Bachelor of Science in Computer Science, Ateneo de Naga University",
            "Bachelor of Law, University of Northeastern Philippines"
          ],
          specialization: "Information Technology, Computer Science, Law",
          papers: 13,
          researchValidation: {
            publishedCount: 13,
            scopusIndexedCount: 3,
            citations: 172,
            links: [
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Ronnel-Atole" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57202837821" }
            ]
          }
        },
        {
          name: "CAPUCAO, Joni Neil Borja",
          image: FACULTY_PHOTO_URLS["CAPUCAO, Joni Neil Borja"],
          role: "Associate Professor V",
          degrees: [
            "Doctor in Information Technology, University of the Cordilleras",
            "Master of Information Technology, Ateneo de Naga University",
            "Bachelor of Science in Mathematics, Ateneo de Naga University"
          ],
          specialization: "Information Technology, Multimedia and Object-Oriented Technology Applications, Mathematics",
          papers: 5,
          researchValidation: {
            publishedCount: 5,
            scopusIndexedCount: 3,
            citations: 27,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=Z-2_t-4AAAAJ" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57205364469" }
            ]
          }
        },
        {
          name: "CUYA, Kennedy Centeno",
          image: FACULTY_PHOTO_URLS["CUYA, Kennedy Centeno"],
          role: "Assistant Professor II",
          degrees: [
            "Doctor in Information Technology, University of the Cordilleras",
            "Master of Information Technology, Ateneo de Naga University",
            "Bachelor of Science in Information Technology, Partido State University"
          ],
          specialization: "Information Technology, Systems Development",
          papers: 4,
          researchValidation: {
            publishedCount: 4,
            scopusIndexedCount: 4,
            citations: 15,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=fYAYF5wAAAAJ" },
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Kennedy-Cuya" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57217137218" }
            ]
          }
        },
        {
          name: "ARTIAGA, Rowell John Baterna",
          image: FACULTY_PHOTO_URLS["ARTIAGA, Rowell John Baterna"],
          role: "Assistant Professor II",
          degrees: [
            "Doctor in Information Technology (CAR), University of the Cordilleras",
            "Master of Information Technology, Ateneo de Naga University",
            "Bachelor of Science in Information Technology, Partido State University"
          ],
          specialization: "Information Technology, Systems Development",
          papers: 10,
          researchValidation: {
            publishedCount: 10,
            scopusIndexedCount: 2,
            citations: 27,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=hji5ef8AAAAJ" },
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Rowell-John-Artiaga" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57226867468" }
            ]
          }
        },
        {
          name: "BRIONES, Salvador II V.",
          image: FACULTY_PHOTO_URLS["BRIONES, Salvador II V."],
          role: "Associate Professor",
          degrees: [
            "Doctor in Information Technology (CAR), AMA University and Colleges",
            "Master of Science in Web Design and Development, UNICAF University",
            "Master of Arts in Education major in Mathematics, Camarines Sur",
            "Bachelor of Science in Information Technology, Partido State University"
          ],
          specialization: "Information Technology, Web Design and Development, Mathematics Education",
          papers: 11,
          researchValidation: {
            publishedCount: 11,
            scopusIndexedCount: 2,
            citations: 12,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=duE-_EIAAAAJ" },
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Salvador-Briones-Ii" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57543025000" }
            ]
          }
        },
        {
          name: "BRIONES, Shane C.",
          image: FACULTY_PHOTO_URLS["BRIONES, Shane C."],
          role: "Assistant Professor II",
          degrees: [
            "Doctor in Information Technology (with Units), AMA University and Colleges",
            "Master of Science in Web Design and Development, UNICAF University",
            "Master of Arts in Education major in Mathematics, Camarines Sur",
            "Bachelor of Science in Computer Science, Ateneo de Naga University"
          ],
          specialization: "Information Technology, Web Design and Development, Mathematics Education, Computer Science",
          papers: 5,
          researchValidation: {
            publishedCount: 5,
            scopusIndexedCount: 1,
            citations: 4,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=0Cw1MWAAAAAJ" },
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Shane-Briones" }
            ]
          }
        },
        {
          name: "ABIO, Arjay Formalejo",
          image: FACULTY_PHOTO_URLS["ABIO, Arjay Formalejo"],
          role: "Assistant Professor II",
          degrees: [
            "Master of Information Technology, Ateneo de Naga University",
            "Bachelor of Science in Information Technology, Partido State University"
          ],
          specialization: "Systems Development, Information Technology",
          papers: 1
        },
        {
          name: "PAGA, Jonathan",
          image: FACULTY_PHOTO_URLS["PAGA, Jonathan"],
          role: "Instructor III",
          degrees: [
            "Doctor in Information Technology (with units), Polytechnic University of the Philippines",
            "Master of Information Technology, Aemillianum College",
            "Bachelor of Science in Computer Science, University of Nueva Caceres"
          ],
          specialization: "Information Technology, Computer Science",
          papers: 2
        },
        {
          name: "PESINO, Hazel Jean C.",
          image: FACULTY_PHOTO_URLS["PESINO, Hazel Jean C."],
          role: "Assistant Professor III",
          degrees: [
            "PhD in Development Management (CAR), Bicol University",
            "Master of Information Technology, Aemillianum College",
            "Bachelor of Science in Computer Science, Lower Isarog Foundation Exponent, Inc."
          ],
          specialization: "Development Management, Information Technology, Computer Science",
          papers: 3,
          researchValidation: {
            publishedCount: 3,
            citations: 4,
            links: [{ label: "ResearchGate", url: "https://www.researchgate.net/profile/Hazel-Jean-Pesino-2" }]
          }
        },
        {
          name: "INDICO, Michael H",
          image: FACULTY_PHOTO_URLS["INDICO, Michael H"],
          role: "Assistant Professor III",
          degrees: [
            "Master of Science in Computer Science (w/ Units), University of the Philippines – Diliman",
            "Master of Science in Computer Engineering, Mapua University",
            "Master in Management, Partido College",
            "Bachelor of Science in Computer Engineering, Aquinas University"
          ],
          specialization: "Computer Science, Computer Engineering, Management",
          papers: 2,
          researchValidation: {
            publishedCount: 2,
            citations: 13,
            links: [
              { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=wtDLOOUAAAAJ" }
            ]
          }
        },
        {
          name: "BELLO, Leo Constantine S.",
          image: FACULTY_PHOTO_URLS["BELLO, Leo Constantine S."],
          role: "Information Technology Officer I",
          degrees: [
            "Master of Science in Computer Science, Ateneo de Naga University",
            "Bachelor of Science in Information Technology, AMA Computer College"
          ],
          specialization: "Graphics and Computer Vision, Information Technology",
          papers: 8,
          researchValidation: {
            publishedCount: 8,
            scopusIndexedCount: 2,
            citations: 18,
            links: [
              { label: "ResearchGate", url: "https://www.researchgate.net/profile/Leo-Constantine-Bello" },
              { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57226863870" }
            ]
          }
        }
      ]
    }
  },
  {
    id: 7,
    title: "Research & Creative Works",
    subtitle: "Innovation and Knowledge Generation",
    icon: "Microscope",
    color: "from-fuchsia-600 to-purple-900",
    content: {
      officeTitle: "RCW Office",
      officeDesc: "Dedicated Research and Creative Works Office supporting faculty and student innovation, guided by strict ethical standards and a comprehensive Graduate Program Manual of Operation.",
      fundingAmount: "₱12.5M",
      fundingLabel: "Current Annual Research Funding",
      fundingList: [
        "₱5.0M - DOST-PCIEERD Grants",
        "₱4.5M - CHED Institutional Grants",
        "₱3.0M - Internal University Funding"
      ],
      collabTitle: "Collaborations & Partnerships",
      collabList: [
        { title: "Academic Institutions", desc: "Joint research programs with top-tier universities in ASEAN and Europe." },
        { title: "Industry Tech Partners", desc: "R&D collaborations with local tech hubs and multinational IT corporations." },
        { title: "Government Agencies", desc: "Policy research and technology solutions for LGU and national agencies (DICT, DOST)." }
      ],
      componentsTitle: "Key Research Components",
      componentsList: [
        { icon: "FileText", label: "Research Policies & Agenda" },
        { icon: "CheckCircle", label: "Ethics Review Board" },
        { icon: "Globe", label: "International Networks" },
        { icon: "BookOpen", label: "Graduate Manual" }
      ]
    }
  },
  {
    id: 8,
    title: "Library Resources",
    subtitle: "Information and Learning Materials",
    icon: "Library",
    color: "from-sky-600 to-blue-900",
    content: {
      mainTitle: "Reference Books",
      mainDesc:
        "Updated list of reference books per course, with a minimum of 5 recent titles per subject area.",
      resources: [
        {
          icon: "FileText",
          title: "Refereed Journals",
          desc: "Active subscriptions to top-tier IT and Computer Science refereed journals."
        },
        {
          icon: "BarChart",
          title: "Budget and fiscal planning",
          desc: "Documented PPMP cycles and annual operating budgets (e.g., FY 2017–2021 through current planning) show structured procurement and spending oversight for library operations."
        },
        {
          icon: "Users",
          title: "Staff development and training",
          desc: "Staff development program materials, webinar matrices, and budgeted training plans demonstrate investment in librarian skills and service quality aligned with graduate program support."
        }
      ]
    }
  },
  {
    id: 9,
    title: "Laboratory & Facilities",
    subtitle: "Infrastructure and Equipment",
    icon: "Monitor",
    color: "from-slate-700 to-slate-900",
    content: {
      labsTitle: "Instructional Laboratories",
      labsList: [
        { title: "Advanced Mac Lab", desc: "For iOS development and multimedia" },
        { title: "Cisco Networking Lab", desc: "Enterprise routing and switching equipment" },
        { title: "Software Engineering Lab", desc: "High-performance workstations for coding" }
      ],
      softwareTitle: "Software & ICT",
      softwareList: [
        "Campus-wide high-speed Wi-Fi",
        "Basic sciences equipment (Physics/Electronics)",
        "Microsoft Azure for Education",
        "GitHub Campus Program",
        "Adobe Creative Cloud subscriptions"
      ]
    }
  },
  {
    id: 10,
    title: "Admission & Retention",
    subtitle: "Student Policies",
    icon: "ClipboardCheck",
    color: "from-pink-600 to-rose-900",
    content: {
      policyTitle: "MIT Admission and Retention Policy",
      policySubtitle:
        "Partido State University — Master in Information Technology. Summarized from the official policy document (Sections I–VI and Annex A).",
      policyPdfUrl: "/docs/mit-admission-retention-policy.pdf",
      cards: [
        {
          title: "Eligibility & bridging",
          icon: "User",
          desc: "Applicants normally hold a bachelor’s in IT, Computer Science, Information Systems, or a closely allied program. IT professionals may qualify upon evidence of readiness for graduate study. Non-IT/non-allied degrees may be conditionally admitted subject to mid-year bridging before regular MIT coursework.",
        },
        {
          title: "Admission process",
          icon: "ClipboardCheck",
          desc: "The department evaluates undergraduate preparation and/or professional experience for program fit and bridging needs. Screening is led by the Department Chair or Graduate Program Coordinator. New students register through the University system, pay fees, and validate subjects with the Registrar. First enrollment typically carries 3–9 units per semester.",
        },
        {
          title: "Documentary requirements",
          icon: "FileText",
          desc: "Submit a completed application form and CV, two recommendation letters, a short concept note on IT interests or capstone direction, ID photos, PSA birth (and marriage if applicable), official transcript, and transfer credentials for transferees. Non-IT applicants sign agreement to complete bridging before regular courses.",
        },
        {
          title: "Standing, load & attendance",
          icon: "CheckCircle",
          desc: "A passing master’s grade is 2.0 (87); lower grades require repeat if the program requires it. Absences beyond 20% of contact hours result in being dropped with a grade of 5.0. Incomplete grades must be cleared within one semester. Regular load is 3–9 units; prerequisites must be completed before advanced courses.",
        },
        {
          title: "CE, residency & capstone",
          icon: "Award",
          desc: "The Comprehensive Examination is required unless exempted by publication rules; passing is 2.0 (87), with two attempts then a 3-unit refresher. Maximum residency is five years for the master’s (LOA excluded). MIT is non-thesis: 36 units including 6 units of Graduate Project (Capstone 1 & 2), plus two refereed publications before graduation.",
        },
        {
          title: "LOA, transfer & conduct",
          icon: "Handshake",
          desc: "Leave of absence may be granted up to one academic year; readmission follows evaluation and Dean approval. Up to 50% of program units may be credited if equivalent and graded at least 1.5, applied in the first semester. Academic honesty and professional conduct follow University policy; major violations may lead to dismissal.",
        },
        {
          title: "Bridging program (non-IT)",
          icon: "BookOpen",
          desc: "Conditional admission requires completion of a mid-year Bridging Program (9 units) before the first regular semester. Bridging subjects run in the mid-year term; after passing, students enter regular MIT courses under standard load and prerequisite rules.",
        },
      ],
    },
  },
  {
    id: 11,
    title: "HEI-Industry Partnership",
    subtitle: "Bridging Academe and Industry",
    icon: "Handshake",
    color: "from-indigo-600 to-blue-900",
    content: {
      mainTitle: "Strong Industry Linkages",
      mainDesc: "Active partnerships with leading tech companies to ensure curriculum relevance, provide internship opportunities, and facilitate graduate placement.",
      partners: [
        { name: "Tech Giant Corp", type: "Cloud Computing Partner" },
        { name: "Local Dev Studio", type: "OJT Placement" },
        { name: "CyberSec Inc", type: "Training & Certification" },
        { name: "Data Analytics Co", type: "Research Collaboration" },
        { name: "Startup Hub", type: "Incubation Partner" },
        { name: "Telecom Provider", type: "Infrastructure Partner" },
        { name: "FinTech Solutions", type: "Industry Advisory Board" },
        { name: "Global IT Services", type: "Graduate Placement" }
      ]
    }
  }
];
