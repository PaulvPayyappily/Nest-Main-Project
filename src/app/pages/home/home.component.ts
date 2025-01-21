import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardsComponent } from "../../UI/cards/cards.component";
import { FooterComponent } from "../../UI/footer/footer.component";
import { NavBarComponent } from "../../UI/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent, FooterComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private api:ApiService){}

  data:any;

  ngOnInit(){

 this.api.getRecipes().subscribe((res:any) => {

  this.data=res.recipes;
  console.log(this.data);

 });

  }

}
