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

	calculateColor(percentage) {
		let pct = percentage / 100;

		let rCalc = Math.round((this.color2.red * (1 - pct)) + (this.color1.red * pct));
		let gCalc = Math.round((this.color2.green * (1 - pct)) + (this.color1.green * pct));
		let bCalc = Math.round((this.color2.blue * (1 - pct)) + (this.color1.blue * pct));

		let resultColor = 'rgb(' + rCalc + ', ' + gCalc + ', ' + bCalc + ')';
		return resultColor;
	}
	/*
	drawPolygon(shape) {
		var self = this;

		let polygon = this.newPolygon(shape.geometry);

		polygon.setOptions(
			{
				fillColor: shape.color,
				strokeColor: shape.outline,
				zIndex: shape.zIndex,
				clickable: false,
				fillOpacity: shape.opacity
			});

		polygon.setMap(this.googleMap);

		polygon.addListener('click', function () {

		});
	}

	newPolygon(geometry) {
		let coords = [];
		for(let polygon of geometry.coordinates) {
			let poly = [];
			for (let coordinatesArray of polygon) {
				poly.push(new google.maps.LatLng(coordinatesArray[1], coordinatesArray[0]));
			};
			coords.push(poly);
		}

		let polygon = new google.maps.Polygon({
			paths: coords,
			strokeWeight: 2,
			fillOpacity: 1
		});

		return polygon;
	}
	*/
}
