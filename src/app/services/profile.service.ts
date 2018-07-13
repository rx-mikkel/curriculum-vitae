import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

	constructor() { }

	getProfile() {
		return {
			userName: 'Mikkel Ørum Skovgaard-Petersen',
			title: 'Full-stack designer, front-end developer',
			phone: '+45 2687 8061',
			email: 'mikkeloerum@gmail.com',
			address: 'Zincksvej 7a, Godthåb',
			intro: '<p>Long-ass text</p><p>Another paragraph</p>',
			linkedIn: 'https://www.linkedin.com/in/mikkeloerum/',
			positions: [
				{
					title: '',
					company: '',
					period: '',
					description: ''
				},
				{
					title: '',
					company: '',
					period: '',
					description: ''
				}
			],
			skills: [
				{
					name: 'Responsive webdesign',
					rating: 100,
				},
				{
					name: 'Typography',
					rating: 64
				},
				{
					name: 'Interaction design',
					rating: 88
				}
			],
			tools: [
				{
					name: 'Angular',
					rating: 93,
				},
				{
					name: 'TypeScript',
					rating: 81
				},
				{
					name: 'HTML',
					rating: 98
				},
				{
					name: 'SASS',
					rating: 99
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
			activities: ['Bicycling', 'CrossFit', 'Woodworking', 'Sketching']
		}
	}

}
