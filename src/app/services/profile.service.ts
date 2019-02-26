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
			intro: [
				'Focus on solving problems not implementing features.',
				'I am a designer using code as my primary tool. I focus on building software for the end-user, using the technologies that enable me to do so most efficiently. I always think about the big picture before I start coding - it is not enough to be precise, accuracy is needed too in order to build the right solution well.',
				'I focus on delivering great software that not only works well for the users, but ties in well with the overall business goals. I prefer to work closely with users to understand the challenges they face and come up with the best solutions in collaboration with them.',
			],
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
