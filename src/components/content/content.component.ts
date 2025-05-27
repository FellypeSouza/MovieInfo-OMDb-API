import { Component, OnInit } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { AboutProjectComponent } from '../about-project/about-project.component';
import { GetContentService } from '../../services/get-content.service';
import { Router } from '@angular/router';
import { SendContentIdServiceService } from '../../services/sendContentIdService/send-content-id-service.service';

@Component({
  selector: 'app-content',
  imports: [SearchInputComponent, AboutProjectComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  movies:any[] = []; 
  series:any[] = [];
  constructor(private router: Router,private getContentService: GetContentService, private sendContentIdService: SendContentIdServiceService){}

  openContentPage(contentId:string):void{
    this.sendContentIdService.receiveContentId(contentId);
    this.router.navigateByUrl("contentpage");
  }

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
