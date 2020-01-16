import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

	@Input() percentage: number;
	displayPercentage: number;
	circumference: number = 31.41592;

	strokeDash: number = 0;

	dashArray: string = '0 31.4';

	constructor(
	) {	}

	ngOnInit() {
		this.calculateDash();
		this.setDisplayPercentage();
	}

	calculateDash() {
		this.strokeDash = (Math.round((this.percentage * this.circumference) / 10) / 10);
		this.dashArray = this.strokeDash.toString() + ' ' + this.circumference.toString();
	}

	setDisplayPercentage() {
		this.displayPercentage = Math.round(this.percentage);
	}

}
