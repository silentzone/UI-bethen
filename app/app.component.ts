import { Component } from '@angular/core';

export class Hero {
  id: number;
   name: string;
}

//herotest: Hero = {
//		  public id: 2,
//		  public name: 'test will make erro'
// }; 
// console.log(herotest); // not defined
  
@Component({
  selector: 'my-app',
  template: '<h1> {{ title }}</h1> <p> hero: {{ hero.name}}  </p>'
})
export class AppComponent { 
	  title = 'Tour of Heroes';
      hero: Hero = {
		  public id: 1,
		  public name: 'Windstorm'
	  };
}



