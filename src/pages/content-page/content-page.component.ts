import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { SendContentIdServiceService } from '../../services/sendContentIdService/send-content-id-service.service';
import { GetContentService } from '../../services/get-content.service';

@Component({
  selector: 'app-content-page',
  imports: [NavComponent],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent implements OnInit {
  contents:any;
  contentId:string = "";

  constructor(private sendContentIdService: SendContentIdServiceService, private getContentService: GetContentService){}

  ngOnInit(): void {
    //Recebo o ID do filme que o usuário clicou
    this.contentId = this.sendContentIdService.sendContentId();

    //Faço a requisição dos dados do filme e atribuo a variável contents. Como recebo apenas um único filme, não preciso declarar contents como Array.
    this.getContentService.getContentById(this.contentId).subscribe((data)=>{
        this.contents = data; //Os dados são salvos no Array
    })
  }
}
