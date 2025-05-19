import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-main-page',
  imports: [NavComponent, ContentComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
