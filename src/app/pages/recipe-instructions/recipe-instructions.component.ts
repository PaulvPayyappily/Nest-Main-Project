import { Component } from '@angular/core';
import { FooterComponent } from "../../UI/footer/footer.component";
import { NavBarComponent } from "../../UI/nav-bar/nav-bar.component";
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';



@Component({
  selector: 'app-recipe-instructions',
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './recipe-instructions.component.html',
  styleUrl: './recipe-instructions.component.scss'
})
export class RecipeInstructionsComponent {

  constructor(private activated:ActivatedRoute,private api:ApiService){

  }

  recipe:any;

  ngOnInit():void{

    let id = this.activated.snapshot.paramMap.get("id");
    this.api.getRecipesById(id).subscribe((res: any) => {
      this.recipe = res;
      console.log(this.recipe);
      

    });
  }

}
