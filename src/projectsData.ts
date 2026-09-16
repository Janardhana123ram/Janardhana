export interface Project {
	id: string;
	title: string;
	company: string;
	duration: string;
	description: string;
	keyContributions: string[];
	skills: string[];
	heroImage?: string;
}

export const projectsData: Project[] = [
	{
		id: 'data-engineering',
		title: 'Data Engineering',
		company: 'deepcompute',
		duration: 'Aug 2022 – Apr 2023',
		description:
			'Served as part of the data engineering team for automated data crawling pipelines, combining Python development and data engineering roles.',
		keyContributions: [
			'Designed and maintained backup tools for MongoDB collections with restore capabilities',
			'Developed data validation and quality assurance tools with JSON schema validation',
			'Extended Cerberus validator for custom ETL and AWS operations',
		],
		skills: [
			'Python',
			'MongoDB',
			'Extract, Transform, Load (ETL)',
			'Amazon Web Services (AWS)',
			'CLI Development',
		],
	},
	{
		id: 'taskdomo',
		title: 'Taskdomo',
		company: 'deepcompute',
		duration: 'Apr 2021 – Jul 2022',
		description:
			'An application providing enhanced features on top of GitHub, with real-time data synchronization and REST API.',
		keyContributions: [
			'Built Python service fetching data from GitHub GraphQL API and storing in PostgreSQL',
			'Implemented webhook listener for real-time data updates',
			'Exposed REST API and WebSocket endpoints for data access',
			'Optimized PostgreSQL queries using EXPLAIN ANALYZE and proper indexing',
			'Integrated PyTest framework for comprehensive testing',
		],
		skills: [
			'Python',
			'PostgreSQL',
			'GraphQL',
			'REST API',
			'WebSockets',
			'PyTest',
			'GitHub API',
		],
	},
	{
		id: 'data-crawling',
		title: 'Data Crawling Pipelines',
		company: 'deepcompute',
		duration: 'Jan 2020 – Mar 2021',
		description:
			'Managed automated ETL pipelines and internal platforms for dataset statistics and public data source processing.',
		keyContributions: [
			'Automated ETL pipelines using Apache Airflow and Linux cron jobs',
			'Developed Django application for internal dataset statistics',
			'Built ETL pipelines for public data sources',
			'Created data visualization dashboards with Grafana and Kibana',
			'Point of contact for internal/client communication on issues and requirements',
		],
		skills: [
			'Python',
			'MongoDB',
			'Apache Airflow',
			'Django',
			'PostgreSQL',
			'Grafana',
			'Kibana',
		],
	},
	{
		id: 'bus-signage-system',
		title: 'On-Board Passenger Information System',
		company: 'Pixzee Technology',
		duration: 'Sep 2018 – Dec 2020',
		description:
			'LED destination blind system for passenger buses with BCU (Bus Control Unit) software and UI for content management.',
		keyContributions: [
			'Developed Python-based BCU software for controlling LED blinds on bus',
			'Built touch-based UI application for bus driver console',
			'Designed signage content creation software with rich feature set',
			'Implemented support for multiple colors, styles, languages, images, and videos',
		],
		skills: ['Python', 'UI/UX Design', 'Embedded Systems', 'LED Control', 'Digital Signage'],
	},
	{
		id: 'meeting-room-booking',
		title: 'Meeting Room Booking System',
		company: 'Pixzee Technology',
		duration: 'Dec 2017 – Aug 2018',
		description:
			'Multi-site meeting room booking system with flexible scheduling, reporting, and digital signage integration.',
		keyContributions: [
			'Designed multi-site room booking interface with side-by-side building view',
			'Implemented flexible booking options (DAY/WEEK/MONTH views)',
			'Integrated with digital signage for booking visualization',
			'Built reporting features for booking analytics',
		],
		skills: ['Web Development', 'Database Design', 'UI/UX', 'Reporting Systems', 'Digital Signage'],
	},
	{
		id: 'stress-level-analysis',
		title: 'Stress Level Analysis (IoT)',
		company: 'PES University',
		duration: 'Jan 2017 – May 2017',
		description:
			'Wearable ECG-based system for real-time stress analysis and personalized health recommendations.',
		keyContributions: [
			'Analyzed stress levels from wearable ECG devices throughout the day',
			'Provided personalized suggestions based on daily activities',
			'Designed system to help users monitor and reduce stress levels',
		],
		skills: ['IoT', 'ECG Analysis', 'Health Monitoring', 'Machine Learning', 'Python'],
	},
];
