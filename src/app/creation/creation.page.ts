import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {
  authors: Array<{type: string, names: string}> = [
        {
          type: 'Coordenação do Projeto',
          names: 'Maria Silva da Silva – Departamento de Enfermagem em Saúde Coletiva da UFFF'
        },
        {
          type: 'Equipe de pesquisadores',
          names:  'Joana Duarte Silva, Joana Duarte Silva, Joana Duarte Silva – Departamento de Fake em Saúde Coletiva da UFFF'
        },
        {
          type: 'Assessoria técnica',
          names: 'Joana Duarte Silva, Joana Duarte Silva, Joana Duarte Silva – Departamento de Fake em Saúde Coletiva da UFFF'
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
