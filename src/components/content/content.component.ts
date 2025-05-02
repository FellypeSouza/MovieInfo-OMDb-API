import { Component, OnInit } from '@angular/core';
import { GetContentService } from '../../services/get-content.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit{
  contents:any[] = []; //Dados recebidos da API

  constructor(private getContentService: GetContentService){}

  ngOnInit():void{
      this.getContentService.getMoviesbyName("Matrix", "Movie").subscribe((data)=>{
      this.contents = data.Search; //Os dados são salvos no Array
    })
  }
}
