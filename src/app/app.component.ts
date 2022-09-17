import { Component, OnInit } from '@angular/core';

import { ProfileService }	from './services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	profile: any;

	color1 = {
		red: 118,
		green: 224,
		blue: 194
	};
	color2 = {
		red: 37,
		green: 112,
		blue: 126
	};

	showAllPositions: boolean = false;

	constructor(
		private profileService: ProfileService
	) {}

	ngOnInit() {
		this.profile = this.profileService.getProfile();

		// draw all map polygons and markers
		// header image?
		// print stylesheet

		this.setSkillColors();
	}

	toggleAllPositions() {
		this.showAllPositions = !this.showAllPositions;
	}

	setSkillColors() {
		for(let skill of this.profile.skills) {
			skill.barColor = this.calculateColor(skill.rating);
		}

		for(let tool of this.profile.tools) {
			tool.barColor = this.calculateColor(tool.rating);
		}

		for(let lang of this.profile.languages) {
			lang.barColor = this.calculateColor(lang.rating);
		}
	}

	calculateColor(percentage: number) {
		let pct = percentage / 100;

		let rCalc = Math.round((this.color2.red * (1 - pct)) + (this.color1.red * pct));
		let gCalc = Math.round((this.color2.green * (1 - pct)) + (this.color1.green * pct));
		let bCalc = Math.round((this.color2.blue * (1 - pct)) + (this.color1.blue * pct));

		let resultColor = 'rgb(' + rCalc + ', ' + gCalc + ', ' + bCalc + ')';
		return resultColor;
	}
}
