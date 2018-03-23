import { Component } from '@angular/core';
import{NgFor} from '@angular/cli';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Partie Front-end avec angular (mvc coté client )!!!';
  contact={
    name:"walid",
    email:"walid@gmail.com"
  }
}
