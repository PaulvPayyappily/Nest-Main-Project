import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeInstructionsComponent } from './pages/recipe-instructions/recipe-instructions.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {
        path:"",component:HomeComponent
      },
      {
        path:"contact",component:ContactComponent
      },
      {
        path:":id/contact",component:ContactComponent
      },
      {
        path:":id",component:RecipeInstructionsComponent
      },
      {
        path:"**",component:NotfoundComponent
      }
  
];
