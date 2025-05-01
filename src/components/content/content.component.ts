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
    this.getContentService.getContent().subscribe((data)=>{
      this.contents = data; //Os dados são salvos no Array
      console.log(this.contents );
    })
  }
}
