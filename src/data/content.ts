// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',               href: '#home' },
  { label: 'About',              href: '#about' },
  { label: 'Areas of Expertise', href: '#service' },
  { label: 'Portfolio',          href: '#portfolio' },
  { label: 'Blog',               href: '#blog' },
  { label: 'Contact',            href: '#contact' },
]

// ─── Hero ──────────────────────────────────────────────────────────────────────
export const hero = {
  headline: 'Gender & Inclusion Expert',
  tagline:  'Intersectional Feminist · MENA Region',
  description:
    'Advancing gender equality, diversity and inclusion for 12+ years across the Middle East and North Africa. Specializing in feminist M&E, GEDI/GESI analysis, and gender mainstreaming.',
  cta1: { label: 'Let us explore endless possibilities', href: '#contact' },
  cta2: { label: 'My Resume', href: '/assets/images/seo/FarahSalhabResume.pdf' },
  image: '/assets/images/seo/farah-salhab-gender-inclusion-expert.png',
  imageAlt: 'Farah Salhab – Gender and Inclusion Expert professional photo',
}

// ─── About ─────────────────────────────────────────────────────────────────────
export const about = {
  bio: "Intersectional Feminist and Inclusion strategist with 15 years of experience navigating the space between theory and lived realities across MENA and beyond. My work focuses on turning feminist thinking into practice through gender-transformative strategies, feminist M&E, capacity building, and GEDI/GESI analysis. Since 2018, I've led gender equality components within multi-million-dollar consortia, shaping evidence-based approaches that challenge norms while staying grounded in context and care.",
  image: '/assets/images/seo/farah-salhab-gender-inclusion-expert.png',
  imageAlt: 'Farah Salhab – Gender and Inclusion Expert',
  expertise: [
    'Gender Equality & Equity',
    'Gender Mainstreaming',
    'Gender Transformation',
    'Research & MEAL',
    'Intersectional Feminism',
    'Diversity & Disability Inclusion',
  ],
  stats: [
    { value: '15+', label: 'Years Experience' },
    { value: '27+', label: 'Partner Organizations' },
    { value: 'MENA', label: 'Primary Region' },
    { value: 'UN', label: 'Agency Partner' },
  ],
}

// ─── Featured Media ────────────────────────────────────────────────────────────
export const media = [
  {
    id: 1,
    title: 'DW Akademie – Safe and Loud Project – Tips to Combat GBVO',
    description: 'Farah shares practical insights on combating gender-based violence online.',
    type: 'youtube' as const,
    embedId: 'DuA9FhqiaSk',
    url: '',
    thumbnail: 'https://img.youtube.com/vi/DuA9FhqiaSk/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'AUB – GHI Reel: How Climate Change Affects Health in MENA',
    description: 'Featuring Farah on the gendered impacts of climate change in the MENA region.',
    type: 'instagram' as const,
    embedId: '',
    url: 'https://www.instagram.com/reel/DMdN1cbMBYb/',
    thumbnail: '/assets/images/services/media-aub-climate.svg',
  },
]

// ─── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    title: 'Workplace Diversity, Equity & Inclusion',
    description:
      'Comprehensive diversity, equity, and inclusion strategies for international organizations, local NGOs, and corporations.',
    icon: '🏢',
    image: '/assets/images/services/service-dei.svg',
    imageAlt: 'Diversity solutions by Gender and Inclusion Expert for global organizations.',
    keywords: ['DEI Strategy', 'Policy Development', 'Bias Training'],
  },
  {
    id: 2,
    title: 'Accessibility Assessments',
    description:
      'Thorough accessibility assessments for institutions and organizations to ensure inclusive access for all.',
    icon: '♿',
    image: '/assets/images/services/service-accessibility.svg',
    imageAlt: 'Accessibility audits by Gender and Inclusion Expert for institutions.',
    keywords: ['Disability Inclusion', 'Institutional Audit', 'Universal Design'],
  },
  {
    id: 3,
    title: 'Social Work Plans',
    description:
      'Design of gender-responsive social work plans addressing intersecting vulnerabilities and community needs.',
    icon: '📋',
    image: '/assets/images/services/service-social-work.svg',
    imageAlt: 'Social work plan design by Gender and Inclusion Expert.',
    keywords: ['Program Design', 'Community Engagement', 'Intersectionality'],
  },
  {
    id: 4,
    title: 'Gender Strategy Development',
    description:
      'Multi-year strategies crafting with focus on gender, accessibility, and inclusion advancement for lasting impact.',
    icon: '🎯',
    image: '/assets/images/services/service-strategy.svg',
    imageAlt: 'Strategy development by Gender and Inclusion Expert for inclusion and equity.',
    keywords: ['Multi-year Planning', 'Gender Mainstreaming', 'Accountability'],
  },
  {
    id: 5,
    title: 'Proposal Writing Guidance',
    description:
      'Specialized guidance for proposal writing, log frames, feminist M&E, and Theory of Change using MSC and Outcome Harvesting.',
    icon: '✍️',
    image: '/assets/images/services/service-proposal.svg',
    imageAlt: 'Proposal and feminist M&E guidance by Gender and Inclusion Expert.',
    keywords: ['Logframe', 'Theory of Change', 'Outcome Harvesting', 'MSC'],
  },
  {
    id: 6,
    title: 'Individual Coaching',
    description:
      'Tailored individual coaching plans for professionals seeking to deepen their gender and inclusion practice.',
    icon: '🌱',
    image: '/assets/images/services/service-coaching.svg',
    imageAlt: 'Individual coaching plans by Gender and Inclusion Expert.',
    keywords: ['Professional Development', 'Mentoring', 'Capacity Building'],
  },
  {
    id: 7,
    title: 'Social Inclusion Analysis',
    description:
      'Gender, youth, and social inclusion thematic analyses (GEDI/GESI) with actionable recommendations for equitable programs.',
    icon: '🔍',
    image: '/assets/images/services/service-analysis.svg',
    imageAlt: 'Social inclusion analysis by Gender and Inclusion Expert.',
    keywords: ['GEDI Analysis', 'GESI Framework', 'Thematic Research'],
  },
  {
    id: 8,
    title: 'Custom Toolkits',
    description:
      'Custom toolkits for I/NGOs promoting gender, diversity, accessibility, and inclusion – tailored to organizational context.',
    icon: '🛠️',
    image: '/assets/images/services/service-toolkits.svg',
    imageAlt: 'Custom toolkits by Gender and Inclusion Expert for NGOs.',
    keywords: ['Resource Development', 'Knowledge Products', 'Training Materials'],
  },
  {
    id: 9,
    title: 'Training & Courses',
    description:
      "Training and online course materials aligned with teams' needs, building lasting internal gender and inclusion capacity.",
    icon: '📚',
    image: '/assets/images/services/service-training.svg',
    imageAlt: 'Training and courses tailored by Gender and Inclusion Expert.',
    keywords: ['Capacity Building', 'Facilitation', 'E-learning'],
  },
]

// ─── Testimonials ──────────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Emily Jacquard',
    role: 'IGNITE Project Director',
    org:  'International Rescue Committee',
    image: '/assets/images/seo/emily-testimonial-gender-inclusion-expert.jpg',
    imageAlt: 'Testimonial by Emily for Gender and Inclusion Expert services.',
    quote:
      'Farah conducted a Context Analysis in Jordan and Lebanon for IGNITE, a project for which the International Rescue Committee acts as consortium lead. Farah worked diligently to collect extensive data and provide actionable analysis so that the consortium not only better understand the challenges adolescent girls and local feminist organizations face, but also opportunities IGNITE can support to shift social norms that hinder girls\' access to quality education. Given her strong work ethic and professionalism, we would work with Farah again.',
  },
  {
    id: 2,
    name: 'Leila Younes',
    role: 'Global Gender Equality, Diversity and Inclusion Expert',
    org:  '',
    image: '/assets/images/seo/laila-testimonial-gender-inclusion-expert.jpeg',
    imageAlt: 'Testimonial by Leila for Gender and Inclusion Expert services.',
    quote:
      'Farah pays attention to detail and ensures quality is never compromised in an efficient and timely manner.',
  },
  {
    id: 3,
    name: 'Martha Wilkes',
    role: 'Global Child Protection Team Leader',
    org:  'Save the Children',
    image: '/assets/images/seo/martha-testimonial-gender-inclusion-expert.jpeg',
    imageAlt: 'Testimonial by Martha for Gender and Inclusion Expert services.',
    quote:
      'Farah is a pleasure to work with from start to finish. She\'s a dedicated professional and expert in transitioning programming and organizations to be more equal and inclusive. Her skills in facilitating quality trainings are noteworthy. Highly recommended.',
  },
  {
    id: 4,
    name: 'Lewaa Azzam',
    role: 'Project Manager',
    org:  'Lebanese League for Women in Business',
    image: '/assets/images/seo/azzam-testimonial-gender-inclusion-expert.jpg',
    imageAlt: 'Testimonial by Azzam for Gender and Inclusion Expert services.',
    quote:
      'I believe that Farah possesses great and rich experience in gender issues and inclusion! Such a very professional and dedicated humanitarian practitioner!',
  },
  {
    id: 5,
    name: 'Mirna Yaacoub',
    role: 'Adolescent Girls\' Programming Officer',
    org:  'International Rescue Committee',
    image: '/assets/images/seo/mirna-testimonial-gender-inclusion-expert.jpg',
    imageAlt: 'Testimonial by Mirna for Gender and Inclusion Expert services.',
    quote:
      'Farah\'s responsiveness and open communication fostered a collaborative environment. Her organization simplified tasks, boosting productivity. Her coaching promoted innovation, encouraging the team\'s growth. This broadened my perspective and enhanced my development.',
  },
  {
    id: 6,
    name: 'Clara El Warrak',
    role: 'Program Officer',
    org:  'International Organization for Migration (UN Migration)',
    image: '/assets/images/seo/clara-testimonial-gender-inclusion-expert.jpg',
    imageAlt: 'Testimonial by Clara for Gender and Inclusion Expert services.',
    quote:
      'Under Farah\'s leadership and guidance, my knowledge and skills flourished. Working alongside her was an absolute blast! If you\'re ready to spice up your approach to gender and inclusivity with some fresh, meaningful insights, look no further—you\'ve hit the jackpot!',
  },
]

// ─── Partners / Collaborations ─────────────────────────────────────────────────
export const partners = [
  { name: 'UK Aid',                    logo: '/assets/images/brands/UK Aid png Logo.png',                   alt: 'UK Aid collaboration on inclusive gender development efforts' },
  { name: 'Women Now Lebanon',         logo: '/assets/images/brands/WND png Logo.png',                      alt: 'Partnered with Women Now Lebanon for feminist capacity-building' },
  { name: 'Trócaire',                  logo: '/assets/images/brands/trocaire.jpg',                         alt: 'Trócaire partnership for gender and development programs' },
  { name: 'Misereor',                  logo: '/assets/images/brands/miseror.jpg',                          alt: 'Evaluation for Women Now development psychosocial project' },
  { name: 'UK FCDO',                   logo: '/assets/images/brands/FCDO png Logo.png',                    alt: 'Partnership with UK FCDO on intersectional gender inclusion programs' },
  { name: 'DW Akademie',               logo: '/assets/images/brands/DW png Logo.png',                      alt: 'Featured or consulted with DW on feminist and inclusion topics' },
  { name: 'Doria Feminist Fund',       logo: '/assets/images/brands/Doria Feminist Fund png Logo.png',     alt: 'Empowerment project funded by Doria Feminist Fund for gender inclusion' },
  { name: 'AFD',                       logo: '/assets/images/brands/AFD Logo.png',                         alt: 'Partnered with AFD on gender and inclusion consulting projects' },
  { name: 'BMZ',                       logo: '/assets/images/brands/BMZ Logo.png',                         alt: 'Collaboration with BMZ for gender-focused development programs' },
  { name: 'Danida',                    logo: '/assets/images/brands/Danida Logo.jpeg',                     alt: 'Gender inclusion strategy supported by the Danish Ministry of Foreign Affairs' },
  { name: 'Dutch Ministry',            logo: '/assets/images/brands/Dutch Logo.png',                       alt: 'Gender and inclusion work with the Ministry of Foreign Affairs of the Netherlands' },
  { name: 'ECHO',                      logo: '/assets/images/brands/ECHO Logo.png',                        alt: 'Gender-responsive work supported by EU Civil Protection and Humanitarian Aid' },
  { name: 'EnCompass LLC',             logo: '/assets/images/brands/EnCompass Logo.png',                   alt: 'Gender and inclusion capacity building with EnCompass LLC' },
  { name: 'Global Affairs Canada',     logo: '/assets/images/brands/GAC Logo.jpg',                        alt: 'Partnered with Global Affairs Canada on gender equity consulting' },
  { name: 'GAC Lebanon',               logo: '/assets/images/brands/Global Affairs Canada - Lebanon.png',  alt: 'Gender adviser support for Canada–Lebanon international programs' },
  { name: 'IRC',                       logo: '/assets/images/brands/IRC Logo.png',                         alt: 'Gender expert at IRC supporting adolescent girls\' programming' },
  { name: 'NRC',                       logo: '/assets/images/brands/NRC Logo.jpg',                        alt: 'Gender strategy consultant for NRC humanitarian programs' },
  { name: 'OCHA',                      logo: '/assets/images/brands/Ocha Logo.jpeg',                      alt: 'Gender and inclusion contributions to UN OCHA programs' },
  { name: 'Save the Children',         logo: '/assets/images/brands/Save the Children Logo.png',           alt: 'Gender equality adviser for Save the Children global initiatives' },
  { name: 'Sida',                      logo: '/assets/images/brands/Sida Logo.png',                        alt: 'Supported Sida-funded gender inclusion strategies' },
  { name: 'UN Women',                  logo: '/assets/images/brands/UN Women Logo.png',                    alt: 'Training and consulting for gender advocacy with UN Women' },
  { name: 'UNHCR',                     logo: '/assets/images/brands/UNHCR Logo.png',                       alt: 'Advised UNHCR on gender-inclusive refugee response programs' },
  { name: 'UNICEF',                    logo: '/assets/images/brands/UNICEF Logo.png',                      alt: 'Gender equality consulting for UNICEF child-centered programs' },
  { name: 'USAID',                     logo: '/assets/images/brands/USAID Logo.png',                       alt: 'Led gender strategy projects under USAID-funded initiatives' },
  { name: 'WFP',                       logo: '/assets/images/brands/WFP Logo.png',                         alt: 'Supported WFP inclusion efforts in humanitarian food programs' },
  { name: 'Rutgers',                   logo: "/assets/images/brands/Rutger's Gender.jpeg",                 alt: 'Gender inclusion collaboration with Rutgers on SRHR and education' },
  { name: 'Education Cannot Wait',     logo: '/assets/images/brands/GlobalFundForEducation.jpeg',          alt: 'Gender-inclusive education projects with Education Cannot Wait' },
  { name: 'Fairtrade',                 logo: '/assets/images/brands/FairTrade.jpeg',                        alt: 'Gender and inclusion collaboration with Fairtrade' },
  { name: 'Action',                    logo: '/assets/images/brands/action.jpeg',                            alt: 'Gender and inclusion partnership' },
  { name: 'PREM',                      logo: '/assets/images/brands/PREM.jpeg',                              alt: 'PREM gender and inclusion collaboration' },
  { name: 'Diamond',                   logo: '/assets/images/brands/diamond.png',                            alt: 'Gender and inclusion partnership' },
]

// ─── Blog Posts ────────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: 'Maternity Leave',
    slug:  'maternity-leave',
    date:  'Feb 2024',
    author: 'Farah Salhab',
    image: '/assets/images/seo/MaternityLeave.jpg',
    imageAlt: 'Gender and Inclusion Expert raising awareness about maternity leave mental health needs',
    excerpt:
      'Exploring the often-overlooked mental health dimensions of maternity leave and what organizations can do to better support new mothers.',
    href: 'maternity-leave.html',
    category: 'Personal Reflections',
  },
  {
    id: 2,
    title: 'Mother to Mother',
    slug:  'mother-to-mother',
    date:  'Jan 2024',
    author: 'Farah Salhab',
    image: '/assets/images/seo/MotherToMother.jpg',
    imageAlt: 'Emotional mother-to-mother support captured by Gender and Inclusion Expert insights.',
    excerpt:
      'A reflection on solidarity, shared experience, and the power of peer support among women navigating motherhood in challenging contexts.',
    href: 'mother-to-mother.html',
    category: 'Personal Reflections',
  },
  {
    id: 3,
    title: 'Women & Consumerism',
    slug:  'women-consumerism-body-image',
    date:  'Feb 2024',
    author: 'Farah Salhab',
    image: '/assets/images/seo/Women&Consumerism.jpg',
    imageAlt: 'Gender and Inclusion Expert discussing women, consumerism, and body image awareness.',
    excerpt:
      'How consumer culture perpetuates harmful body image standards for women – and feminist strategies for reclaiming autonomy.',
    href: 'women-consumerism-body-image.html',
    category: 'Feminist Theory',
  },
  {
    id: 4,
    title: 'Personal Reflection',
    slug:  'life-lessons-motherhood',
    date:  'Dec 2023',
    author: 'Farah Salhab',
    image: '/assets/images/seo/PersonalReflection.jpeg',
    imageAlt: 'Motherhood reflection by Gender and Inclusion Expert celebrating growth and life changes.',
    excerpt:
      'Life lessons drawn from motherhood – on resilience, transformation, and the deeply political nature of care work.',
    href: 'life-lessons-motherhood.html',
    category: 'Personal Reflections',
  },
]

// ─── FAQ (AEO) ─────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: 'What is gender mainstreaming?',
    answer:
      'Gender mainstreaming is the process of assessing the implications for women and men of any planned action, including legislation, policies, or programs, in all areas and at all levels. It is a strategy for making women\'s as well as men\'s concerns and experiences an integral dimension of the design, implementation, monitoring and evaluation of policies and programs. Farah Salhab has led gender mainstreaming components for major international consortia since 2018.',
  },
  {
    question: 'What is GEDI/GESI analysis?',
    answer:
      'GEDI (Gender Equality, Diversity and Inclusion) and GESI (Gender Equality and Social Inclusion) are frameworks used to analyze how gender, disability, age, ethnicity, and other identity factors affect people\'s access to opportunities, services, and rights. These analyses inform program design to ensure interventions reach and benefit all groups equitably.',
  },
  {
    question: 'What is feminist M&E?',
    answer:
      'Feminist Monitoring and Evaluation (M&E) is an approach that applies feminist principles to program evaluation, emphasizing power dynamics, participatory methods, intersectionality, and transformative outcomes. It goes beyond counting women to examining how programs challenge or reinforce gender inequalities and power structures.',
  },
  {
    question: 'How can organizations improve workplace diversity and inclusion?',
    answer:
      'Organizations can improve DEI through: (1) conducting accessibility and inclusion assessments, (2) developing multi-year gender and inclusion strategies, (3) implementing bias training and awareness programs, (4) creating inclusive policies and practices, (5) establishing accountability mechanisms, (6) using feminist M&E to track progress, and (7) engaging diverse voices in decision-making.',
  },
  {
    question: 'Where does Farah Salhab work?',
    answer:
      'Farah Salhab is based in Beirut, Lebanon, and works across the MENA region (Middle East and North Africa), with particular expertise in Lebanon and Jordan. She collaborates with international organizations, UN agencies, INGOs, and local civil society organizations globally.',
  },
]
