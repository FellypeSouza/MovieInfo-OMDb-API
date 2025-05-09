import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-output',
  imports: [],
  templateUrl: './search-output.component.html',
  styleUrl: './search-output.component.scss'
})
export class SearchOutputComponent {
  @Input("content") contentInput:any;
}
