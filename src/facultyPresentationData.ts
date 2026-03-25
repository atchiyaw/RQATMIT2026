export interface FacultyAttainment {
  degree: string;
  institution: string;
  logoKey?: string;
}

export interface FacultyPresentationProfile {
  name: string;
  rank: string;
  photoUrl: string;
  profile: string;
  attainments: FacultyAttainment[];
  currentDesignation?: string;
}

export const institutionLogoByKey: Record<string, string> = {
  hannam: '/faculty-presentation/logos/hannam.jpg',
  unep: '/faculty-presentation/logos/unep.jpeg',
  ateneo: '/faculty-presentation/logos/ateneo.png',
  uc: '/faculty-presentation/logos/uc.png',
  psu: '/faculty-presentation/logos/psu.png',
  ama_uc: '/faculty-presentation/logos/ama-uc.png',
  unicaf: '/faculty-presentation/logos/unicaf.png',
  ue: '/faculty-presentation/logos/ue.png',
  aemilianum: '/faculty-presentation/logos/aemilianum.webp',
  unc: '/faculty-presentation/logos/unc.png',
  upd: '/faculty-presentation/logos/upd.png',
  mapua: '/faculty-presentation/logos/mapua.webp',
  partido_college: '/faculty-presentation/logos/partido-college.jpg',
  aquinas: '/faculty-presentation/logos/aquinas.jpeg',
  ama_cc: '/faculty-presentation/logos/ama-cc.png',
  life: '/faculty-presentation/logos/life.jpeg',
};

export const facultyPresentationProfiles: FacultyPresentationProfile[] = [
  {
    name: 'Prof. Ronnel Rimando Atole',
    rank: 'Professor VI',
    photoUrl: '/faculty-presentation/photos/atole.png',
    profile:
      'Atty. Dr. Ronnel Rimando Atole brings a rare and powerful blend of Law, Information Technology, and Computer Science to the program.',
    attainments: [
      { degree: 'PhD in Information Technology', institution: 'Hannam University', logoKey: 'hannam' },
      { degree: 'MS in Information Technology', institution: 'Hannam University', logoKey: 'hannam' },
      { degree: 'Bachelor of Law', institution: 'University of Northeastern Philippines', logoKey: 'unep' },
      { degree: 'BS in Computer Science', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
    ],
    currentDesignation: 'Director, Information and Communication Technology Unit',
  },
  {
    name: 'Assoc. Prof. Joni Neil Borja Capucao',
    rank: 'Associate Professor V',
    photoUrl: '/faculty-presentation/photos/capucao.png',
    profile:
      'His specialization includes Multimedia and Object-Oriented Technology Applications, grounded on a strong foundation in mathematics.',
    attainments: [
      { degree: 'Doctor in Information Technology', institution: 'University of the Cordilleras', logoKey: 'uc' },
      { degree: 'Master of Information Technology', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
      { degree: 'BS in Mathematics', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
    ],
    currentDesignation: 'Department Chair, Computational Sciences Department',
  },
  {
    name: 'Asst. Prof. Kennedy Centeno Cuya',
    rank: 'Assistant Professor II',
    photoUrl: '/faculty-presentation/photos/cuya.png',
    profile:
      'His specialization is in Systems Development, supporting evidence-based, student-centered innovation in the program.',
    attainments: [
      { degree: 'Doctor in Information Technology', institution: 'University of the Cordilleras', logoKey: 'uc' },
      { degree: 'Master of Information Technology', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
      { degree: 'BS in Information Technology', institution: 'Partido State University', logoKey: 'psu' },
    ],
    currentDesignation:
      'Graduate Program Coordinator (MIT), CHED SIKAP University Scholarship Administrator',
  },
  {
    name: 'Asst. Prof. Rowell John Baterna Artiaga',
    rank: 'Assistant Professor II',
    photoUrl: '/faculty-presentation/photos/artiaga.png',
    profile:
      'He is a candidate for Doctor in Information Technology (CAR) and focuses on Systems Development.',
    attainments: [
      {
        degree: 'Doctor in Information Technology (Completed Academic Requirements)',
        institution: 'University of the Cordilleras',
        logoKey: 'uc',
      },
      { degree: 'Master of Information Technology', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
      { degree: 'BS in Information Technology', institution: 'Partido State University', logoKey: 'psu' },
    ],
    currentDesignation: 'Associate Dean, College of Engineering and Computational Sciences',
  },
  {
    name: 'Assoc. Prof. Salvador II V. Briones',
    rank: 'Associate Professor',
    photoUrl: '/faculty-presentation/photos/briones-salvador.png',
    profile:
      'He specializes in Web Design and Development and Mathematics Education, with a doctoral candidacy in Information Technology.',
    attainments: [
      {
        degree: 'Doctor in Information Technology (Completed Academic Requirements)',
        institution: 'AMA University and Colleges',
        logoKey: 'ama_uc',
      },
      { degree: 'MS in Web Design and Development', institution: 'UNICAF University', logoKey: 'unicaf' },
      { degree: 'MA in Education major in Mathematics', institution: 'Partido State University', logoKey: 'psu' },
      { degree: 'BS in Information Technology', institution: 'Partido State University', logoKey: 'psu' },
    ],
    currentDesignation: 'Former University Linkage Officer',
  },
  {
    name: 'Asst. Prof. Shane C. Briones',
    rank: 'Assistant Professor II',
    photoUrl: '/faculty-presentation/photos/briones-shane.png',
    profile:
      'Her work spans Web Design and Development, Computer Science, and Mathematics Education.',
    attainments: [
      { degree: 'Doctor in Information Technology (with units)', institution: 'AMA University and Colleges', logoKey: 'ama_uc' },
      { degree: 'MS in Web Design and Development', institution: 'UNICAF University', logoKey: 'unicaf' },
      { degree: 'MA in Education major in Mathematics', institution: 'Partido State University', logoKey: 'psu' },
      { degree: 'BS in Computer Science', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
    ],
  },
  {
    name: 'Asst. Prof. Arjay Formalejo Abio',
    rank: 'Assistant Professor II',
    photoUrl: '/faculty-presentation/photos/abio.png',
    profile:
      'He is focused on Systems Development and contributes to the university technology transfer agenda.',
    attainments: [
      { degree: 'Master of Information Technology', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
      { degree: 'BS in Information Technology', institution: 'Partido State University', logoKey: 'psu' },
    ],
    currentDesignation: 'Acting Head, Technology Transfer and Patent',
  },
  {
    name: 'Instr. Jonathan Paga',
    rank: 'Instructor III',
    photoUrl: '/faculty-presentation/photos/paga.png',
    profile:
      'He is pursuing Doctor in Information Technology (with units) with specialization in Information Technology and Computer Science.',
    attainments: [
      { degree: 'Doctor in Information Technology (with units)', institution: 'University of the East - Manila', logoKey: 'ue' },
      { degree: 'Master of Information Technology', institution: 'Aemilianum College', logoKey: 'aemilianum' },
      { degree: 'BS in Computer Science', institution: 'University of Nueva Caceres', logoKey: 'unc' },
    ],
    currentDesignation: 'Program Chair, BS Computer Science',
  },
  {
    name: 'Asst. Prof. Hazel Jean C. Pesino',
    rank: 'Assistant Professor III',
    photoUrl: '/faculty-presentation/photos/pesino.png',
    profile:
      'She brings a distinctive blend of Development Management and Information Technology in academic and institutional service.',
    attainments: [
      { degree: 'Master of Information Technology', institution: 'Aemilianum College, Sorsogon City', logoKey: 'aemilianum' },
      { degree: 'BS in Computer Science', institution: 'Lower Isarog Foundation Exponent, Inc.', logoKey: 'life' },
    ],
    currentDesignation: 'University Gender and Development Focal Person',
  },
  {
    name: 'Asst. Prof. Michael H. Indico',
    rank: 'Assistant Professor III',
    photoUrl: '/faculty-presentation/photos/indico.png',
    profile:
      'His areas of expertise include Computer Engineering, Computer Science, and Management.',
    attainments: [
      { degree: 'Master of Science in Computer Science (candidate)', institution: 'UP Diliman', logoKey: 'upd' },
      { degree: 'MS in Computer Engineering', institution: 'Mapua University', logoKey: 'mapua' },
      { degree: 'Master in Management', institution: 'Partido College', logoKey: 'partido_college' },
      { degree: 'BS in Computer Engineering', institution: 'Aquinas University', logoKey: 'aquinas' },
    ],
  },
  {
    name: 'Leo Constantine S. Bello',
    rank: 'Information Technology Officer I',
    photoUrl: '/faculty-presentation/photos/bello.png',
    profile:
      'He specializes in Graphics and Computer Vision and Information Technology.',
    attainments: [
      { degree: 'MS in Computer Science', institution: 'Ateneo de Naga University', logoKey: 'ateneo' },
      { degree: 'BS in Information Technology', institution: 'AMA Computer College', logoKey: 'ama_cc' },
    ],
    currentDesignation: 'Information Technology Officer I',
  },
];
