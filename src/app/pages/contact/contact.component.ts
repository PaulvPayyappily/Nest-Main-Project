import { Component } from '@angular/core';
import { NavBarComponent } from "../../UI/nav-bar/nav-bar.component";
import { FooterComponent } from "../../UI/footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
