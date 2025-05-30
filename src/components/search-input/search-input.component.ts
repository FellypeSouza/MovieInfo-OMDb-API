import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetContentService } from '../../services/get-content.service';
import { SendContentIdServiceService } from '../../services/sendContentIdService/send-content-id-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  movies:any[] = []; //Dados recebidos da API
  series:any[] = [];
  inputSearch:string = '';
  selectType:string = 'Filmes';
  teste:any;

  constructor(private getContentService: GetContentService, private sendContentIdServiceService: SendContentIdServiceService, private router: Router){}
  
  openContentPage(contentId:string):void{
    this.sendContentIdServiceService.receiveContentId(contentId);
    this.router.navigateByUrl("contentpage");
  }

  searchContent():void{
    if(this.inputSearch == ""){
      alert("Insira um nome");
    }
    else{
      try{
        if (this.selectType == "Filmes") {
          this.getContentService.getMoviesbyName(this.inputSearch, "Movie", "").subscribe((data)=>{
            this.movies = data.Search; //Os dados são salvos no Array
            this.movies.length = 6;
          })
        }
        else if(this.selectType == "Series"){
          this.getContentService.getSeriesbyName(this.inputSearch, "Series", "").subscribe((data)=>{
            this.series = data.Search;
            this.series.length = 6;
          })
        }
        else{
          console.log("Erro");
        }
      }
      catch(err){
        console.log(`Erro: ${err}`);
      }
    }
  }
}
