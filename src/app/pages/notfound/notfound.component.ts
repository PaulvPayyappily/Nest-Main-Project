import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/nav-bar/nav-bar.component";
import { FooterComponent } from "../../UI/footer/footer.component";

@Component({
  selector: 'app-notfound',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

}
