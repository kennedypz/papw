import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  public imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHL03nqSptOCTMXb8ym6QffVTfjk2C14HS-w&usqp=CAU";
  public exibe = false;
  public descricao = "Estudante";
  public usuario = "Paulo Kennedy";
  public profissao = "Estagiario";

  public lista = [
    {
      id: '1',
      ano: '2007',
      cert: 'SCJP 1.5'
    },

    {
      id: '2',
      ano: '2009',
      cert: 'SCWCD 1.5'
    },
    
    {
      id: '3',
      ano: '2011',
      cert: 'CTFL'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public exibePerfil(){
    this.exibe = !this.exibe;
  }
}
