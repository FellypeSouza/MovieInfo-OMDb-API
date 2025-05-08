import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetContentService } from '../../services/get-content.service';

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

  constructor(private getContentService: GetContentService){}


  searchContent():void{
    try{
      if (this.selectType == "Filmes") {
        this.getContentService.getMoviesbyName(this.inputSearch, "Movie", "").subscribe((data)=>{
          this.movies = data.Search; //Os dados são salvos no Array
          this.movies.length = 6;
          console.log(this.movies);
        })
      }
      else if(this.selectType == "Series"){
        this.getContentService.getSeriesbyName(this.inputSearch, "Series", "").subscribe((data)=>{
          this.series = data.Search;
          this.series.length = 6;
          console.log(this.series);
        })
      }
      else{
        console.log("Erro");
      }
    }
    catch(err){
      console.log(`Erro: ${err}`);
    }
    finally{

    }
  }
}
