import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-nav',
  imports: [SearchInputComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
