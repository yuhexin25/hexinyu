export const projects = [
  {
    title: 'U.S. Airline Hub Atlas',
    year: '2026',
    description: 'Interactive map of U.S. airline hub structures, connectivity, and regional access.',
    researchQuestion: 'How do hub-and-spoke structures shape airline connectivity?',
    methods: 'Network analysis, MapLibre, D3',
    data: 'FAA, BTS, airline route data',
    status: 'Published',
    tags: ['MapLibre', 'D3', 'Networks'],
    // Placeholder live-page screenshot. Replace with a custom cropped project-output screenshot when available.
    image: 'project-previews/hub-atlas-real.png',
    imageAlt: 'Screenshot of the U.S. Airline Hub Atlas showing routes, hub airports, and network metrics.',
    href: 'https://yuhexin25.github.io/us-airline-hub-atlas/',
    linkLabel: 'View project',
    external: true,
  },
  {
    title: 'U.S. Flight Delay Analysis',
    year: '2026',
    description: 'Historical analysis of U.S. flight delays, cancellations, and disruption patterns.',
    researchQuestion: 'Where do delays and cancellations concentrate across the U.S. aviation system?',
    methods: 'Exploratory analysis, delay metrics, data visualization',
    data: 'BTS On-Time Performance data',
    status: 'Published',
    tags: ['Flight Delay', 'BTS Data', 'Analysis'],
    // Placeholder operational screenshot. Replace with a custom analysis-output screenshot when available.
    image: 'research/houston-iah-delay.jpg',
    imageAlt: 'Screenshot showing observed airport delay conditions at Houston George Bush Intercontinental Airport.',
    href: 'https://yuhexin25.github.io/usflightdelay/',
    linkLabel: 'View analysis',
    external: true,
  },
  {
    title: 'Live Flight Delay Analysis',
    year: '2026',
    description: 'Real-time aviation dashboard for route risk, airport congestion, and delay propagation.',
    researchQuestion: 'How do real-time disruptions affect airport and route reliability?',
    methods: 'API integration, dashboard design, delay risk scoring',
    data: 'FAA, FlightAware and public aviation sources',
    status: 'Active',
    tags: ['Dashboard', 'API', 'Operations'],
    // Placeholder live-page screenshot. Replace with a custom cropped dashboard screenshot when available.
    image: 'project-previews/live-delay-page.png',
    imageAlt: 'Screenshot of the Live Flight Delay Analysis project page showing the Hub Resilience Monitor.',
    href: 'https://yuhexin25.github.io/livedelayanalysis/',
    linkLabel: 'Open dashboard',
    external: true,
  },
];

export const projectsByYear = projects.reduce<Record<string, typeof projects>>((groups, project) => {
  groups[project.year] = groups[project.year] || [];
  groups[project.year].push(project);
  return groups;
}, {});
