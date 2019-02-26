import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

	constructor() { }

	getPolygons() {
		return [
			{
				name: 'land plot',
				color: '#cccccc',
				outline: '#162123',
				opacity: 1,
				zIndex: 1,
				geometry: {
					coordinates: [
						[
							[
								9.814172670813377,
								56.967926751314764
							],
							[
								9.814143166514214,
								56.96827765239698
							],
							[
								9.814379200907524,
								56.968285693841366
							],
							[
								9.814410046311195,
								56.968035677212775
							],
							[
								9.814329580040749,
								56.967892392072784
							],
							[
								9.814172670813377,
								56.967926751314764
							]
						]
					]
				}
			},
			{
				name: 'house',
				color: '#2f5056',
				outline: '#162123',
				opacity: 1,
				zIndex: 2,
				geometry: {
					coordinates: [
						[
							[
								9.814184467177938,
								56.967996624745425
							],
							[
								9.814219335895132,
								56.96805583942381
							],
							[
								9.814179438036035,
								56.968063515393766
							],
							[
								9.814173067789625,
								56.968135523225186
							],
							[
								9.814266274552892,
								56.96813771635504
							],
							[
								9.814277003388952,
								56.96805583942381
							],
							[
								9.814356128554891,
								56.96804121852432
							],
							[
								9.814317236524175,
								56.96797323126629
							],
							[
								9.814184467177938,
								56.967996624745425
							]
						]
					]
				}
			}
		]
	}

}
