// JSON-LD Structured Data for SEO/GEO/AEO
// Based on seo_geo_aeo_strategy.md

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://farahsalhab.com/#person',
  name: 'Farah Salhab',
  url: 'https://farahsalhab.com',
  image: 'https://farahsalhab.com/assets/images/seo/farah-salhab-gender-inclusion-expert.png',
  jobTitle: 'Gender and Inclusion Expert',
  description:
    'Intersectional feminist and inclusion expert with 12 years of experience advancing gender equality, diversity and inclusion across MENA. Specializing in feminist M&E, GEDI/GESI analysis, gender mainstreaming, and GBV programming.',
  worksFor: {
    '@type': 'Organization',
    name: 'Independent Consultant',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beirut',
    addressCountry: 'Lebanon',
  },
  email: 'farah.salhab@outlook.com',
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'SOAS University of London',
      sameAs: 'https://www.soas.ac.uk/',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Lebanese International University',
    },
  ],
  knowsAbout: [
    'Gender Equality',
    'Social Inclusion',
    'Feminist Monitoring and Evaluation',
    'GEDI/GESI Analysis',
    'Gender Mainstreaming',
    'Intersectional Feminism',
    'Diversity and Inclusion',
    'Gender Based Violence Programming',
    'Accessibility',
    'Social Inclusion',
    'Capacity Building',
    'Humanitarian Programming',
  ],
  sameAs: [
    'https://www.linkedin.com/in/fs1992/',
    'https://farahsalhab.com',
  ],
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://farahsalhab.com/#service',
  name: 'Farah Salhab – Gender & Inclusion Consulting',
  url: 'https://farahsalhab.com',
  logo: 'https://farahsalhab.com/assets/images/seo/Gender&InclusionExpert.png',
  image: 'https://farahsalhab.com/assets/images/seo/farah-salhab-gender-inclusion-expert.png',
  description:
    'Expert gender and inclusion consulting services specializing in feminist M&E, GEDI/GESI analysis, gender mainstreaming, and diversity & inclusion across MENA region.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beirut',
    addressRegion: 'Beyrouth',
    addressCountry: 'LB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '33.8938',
    longitude: '35.5018',
  },
  areaServed: [
    { '@type': 'Place', name: 'Middle East and North Africa (MENA)' },
    { '@type': 'Country', name: 'Lebanon' },
    { '@type': 'Country', name: 'Jordan' },
  ],
  priceRange: '$$$$',
  serviceType: [
    'Gender Equality Consulting',
    'Inclusion Strategy',
    'Feminist Monitoring and Evaluation',
    'GEDI/GESI Analysis',
    'Gender Mainstreaming',
    'Workplace Diversity Equity and Inclusion',
    'Accessibility Assessments',
    'Social Work Plan Design',
    'Gender Strategy Development',
    'Proposal Writing Guidance',
    'Individual Coaching',
    'Custom Toolkits',
    'Training and Courses',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://farahsalhab.com/#website',
  url: 'https://farahsalhab.com',
  name: 'Farah Salhab – Gender and Inclusion Expert',
  description:
    'Portfolio and consulting services of Farah Salhab, gender and inclusion expert specializing in feminist M&E, GEDI/GESI analysis, and gender mainstreaming.',
  publisher: { '@id': 'https://farahsalhab.com/#person' },
  inLanguage: 'en-US',
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://farahsalhab.com/#breadcrumb',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: 'https://farahsalhab.com' },
    { '@type': 'ListItem', position: 2, name: 'About',              item: 'https://farahsalhab.com/about.html' },
    { '@type': 'ListItem', position: 3, name: 'Areas of Expertise', item: 'https://farahsalhab.com/#service' },
    { '@type': 'ListItem', position: 4, name: 'Portfolio',          item: 'https://farahsalhab.com/portfolio.html' },
    { '@type': 'ListItem', position: 5, name: 'Blog',               item: 'https://farahsalhab.com/blog.html' },
    { '@type': 'ListItem', position: 6, name: 'Contact',            item: 'https://farahsalhab.com/contact.html' },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is gender mainstreaming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Gender mainstreaming is the process of assessing the implications for women and men of any planned action, including legislation, policies or programs, in all areas and at all levels. It is a strategy for making women's as well as men's concerns and experiences an integral dimension of the design, implementation, monitoring and evaluation of policies and programs.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is GEDI/GESI analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GEDI (Gender Equality, Diversity and Inclusion) and GESI (Gender Equality and Social Inclusion) are frameworks used to analyze how gender, disability, age, ethnicity and other identity factors affect people's access to opportunities, services and rights. These analyses inform program design to ensure interventions reach and benefit all groups equitably.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is feminist M&E?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feminist Monitoring and Evaluation (M&E) is an approach that applies feminist principles to program evaluation, emphasizing power dynamics, participatory methods, intersectionality, and transformative outcomes. It goes beyond counting women to examining how programs challenge or reinforce gender inequalities and power structures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can organizations improve workplace diversity and inclusion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Organizations can improve DEI through: 1) Conducting accessibility and inclusion assessments, 2) Developing multi-year gender and inclusion strategies, 3) Implementing bias training and awareness programs, 4) Creating inclusive policies and practices, 5) Establishing accountability mechanisms, 6) Using feminist M&E to track progress, and 7) Engaging diverse voices in decision-making.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Farah Salhab work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Farah Salhab is based in Beirut, Lebanon, and works across the MENA region (Middle East and North Africa), with particular expertise in Lebanon and Jordan. She collaborates with international organizations, UN agencies, INGOs, and local civil society organizations globally.',
      },
    },
  ],
}

export const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://farahsalhab.com/#person',
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Emily Jacquard',
        jobTitle: 'IGNITE Project Director',
        worksFor: 'International Rescue Committee',
      },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Farah conducted a Context Analysis in Jordan and Lebanon for IGNITE... Given her strong work ethic and professionalism, we would work with Farah again.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Martha Wilkes',
        jobTitle: 'Global Child Protection Team Leader',
        worksFor: 'Save the Children',
      },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Farah is a pleasure to work with from start to finish. She's a dedicated professional and expert in transitioning programming and organizations to be more equal and inclusive.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Clara El Warrak',
        jobTitle: 'Program Officer',
        worksFor: 'International Organization for Migration',
      },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Under Farah's leadership and guidance, my knowledge and skills flourished. If you're ready to spice up your approach to gender and inclusivity with some fresh, meaningful insights, look no further.",
    },
  ],
}

// Combined schema for homepage <head>
export const allSchemas = [
  personSchema,
  professionalServiceSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  reviewsSchema,
]
