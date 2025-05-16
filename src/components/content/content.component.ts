import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../../services/get-content.service';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-content',
  imports: [SearchInputComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  movies:any[] = []; //Dados recebidos da API
  series:any[] = [];
  constructor(private getContentService: GetContentService){}

  ngOnInit():void{
      this.getContentService.getMoviesbyName("Spider-man", "Movie", "").subscribe((data)=>{
        this.movies = data.Search; //Os dados são salvos no Array
        this.movies.length = 6;
      })
      this.getContentService.getSeriesbyName("Batman", "Series", "").subscribe((data)=>{
        this.series = data.Search;
        this.series.length = 6;
      })
  }
}
