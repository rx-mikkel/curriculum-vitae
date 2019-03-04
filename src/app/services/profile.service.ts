import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

	constructor() { }

	// ideally this comes from a http-request, for now mock-data
	getProfile() {
		return {
			userName: 'Mikkel Ørum Skovgaard-Petersen',
			title: 'Full-stack designer, front-end developer',
			phone: '+45 2687 8061',
			email: 'mikkeloerum@gmail.com',
			address: 'Zincksvej 7a, Godthåb',
			intro: [
				'I focus on solving problems not implementing features.',
				'I am a designer using code as my primary tool. I build software, using the technologies that enable me to do so most efficiently. I always think about the big picture before I start coding - it is not enough to be precise, accuracy is needed too in order to build the right solution well.',
				'I focus on delivering great software that not only works well for the users, but ties in well with the overall business goals. I prefer to work closely with users to understand the challenges they face and come up with the best solutions in collaboration with them.',
			],
			linkedIn: 'https://www.linkedin.com/in/mikkeloerum/',
			positions: [
				{
					title: 'Full-stack designer',
					company: 'MapsPeople',
					period: 'Aug 2016 - Apr 2019',
					description: [
						'At MapsPeople my main responsibility was developing, designing and architecting the management solution (CMS) for the MapsIndoors platform.',
						'I rewrote the existing solution in Angular while making improvements to the user interface. Using this as the foundation to gain insights and gather feedback in order to identify areas for improvement and future development.',
						'The tools used internally have been updated and consolidated in the process and the time spent has been reduced by more than 50% while satisfaction has gone up considerably! This was only possible by working closely with the colleagues who use the tools on a daily basis.'
					],
					links: [
						'https://www.mapspeople.com/cms/'
					]
				},
				{
					title: 'Front-end developer',
					company: 'Klean',
					period: 'Apr 2015 - Jul 2016',
					description: [
						'At Klean I worked closely with our customers to build the websites they need to run their business. Applying my knowledge about user experience, communication and customer behavior to design the right solutions, then develop the websites using the best tools available to optimize speed, maintainability and stability.'
					],
					links: [
						'https://simplygo.dk/'
					]
				},
				{
					title: 'UI developer',
					company: 'Elsevier',
					period: 'Sep 2013 - Oct 2014',
					description: [
						'At Elsevier I worked on web-based products used in academia including Pure and Pure Portal.',
						'I designed a data-import wizard which greatly reduced error margins, implementation time, man-hours needed, and improved predictability of the outcome.'
					]
				},
				{
					title: 'Web-designer / UI-developer',
					company: 'RX UI/UX',
					period: 'Oct 2012 - Aug 2013',
					description: [
						'I worked in close collaboration with my clients and preferably some of their users, ensuring that the people using the software get the value and satisfaction that comes with well designed software.'
					]
				},
				{
					title: 'Front-end developer, designer',
					company: 'Doneco',
					period: 'Feb 2011 - Oct 2012',
					description: [
						'Designing and developing a web-based accounting system both functionally and UI-wise.'
					]
				}
			],
			skills: [
				{
					name: 'Problem solving',
					rating: 100
				},
				{
					name: 'Usability',
					rating: 96
				},
				{
					name: 'Web development',
					rating: 89,
				},
				{
					name: 'Interaction design',
					rating: 82
				},
				{
					name: 'Graphic design',
					rating: 70
				},
				{
					name: 'Performance optimizations',
					rating: 68
				},
				{
					name: 'Responsive webdesign',
					rating: 94,
				}
			],
			tools: [
				{
					name: 'Angular',
					rating: 93,
				},
				{
					name: 'HTML',
					rating: 98
				},
				{
					name: 'SASS',
					rating: 100
				},
				{
					name: 'Google Maps',
					rating: 96
				},
				{
					name: 'JavaScript',
					rating: 92
				},
				{
					name: 'TypeScript',
					rating: 81
				},
				{
					name: 'Git',
					rating: 72
				}
			],
			zones: [
				{
					startName: 'Website',
					endName: 'Web-software',
					start: 20,
					end: 0,
					description: 'Between websites and advanced web-based systems, typically behind a login, I have specialised more in the latter.'
				},
				{
					startName: '(UX) Designer',
					endName: 'Developer',
					start: 14,
					end: 22,
					description: 'Designing functionality and interaction then implementing it as production-ready code is what I do best.'
				},
				{
					startName: 'Detail',
					endName: 'Big picture',
					start: 25,
					end: 0,
					description: 'I tend to be more concerned with what I am building than how.'
				}
			],
			languages: [
				{
					name: 'Danish',
					rating: 100,
				},
				{
					name: 'English',
					rating: 94
				},
				{
					name: 'German',
					rating: 54
				}
			],
			activities: ['My kids and wife', 'Family','Bicycling', 'Woodworking', 'Sketching']
		}
	}

}
