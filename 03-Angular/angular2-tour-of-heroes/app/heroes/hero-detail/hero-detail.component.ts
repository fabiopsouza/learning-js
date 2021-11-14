import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/heroes/hero-detail/hero-detail.component.html',
	styleUrls: ['app/heroes/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
	    let id = +params['id']; // "+" convert number id to string!
	    this.heroService.getHero(id)
	    .then(hero => this.hero = hero);
	});
	}

	save(): void {
		this.heroService.update(this.hero)
		.then(this.goBack);
	}


	goBack(): void {
		window.history.back();
	}
}

