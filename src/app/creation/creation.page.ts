import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.page.html',
  styleUrls: ['./creation.page.scss'],
})
export class CreationPage implements OnInit {
  authors: Array<{type: string, names: string}> = [
        // {
        //   type: 'Coordenação do Projeto',
        //   names: 'Maria Silva da Silva – Departamento de Enfermagem em Saúde Coletiva da UFFF'
        // },
        {
          type: 'Pesquisadores',
          names:  'Professora Dra. Viviane Degan - Pós Graduação Stricto Sensu em Odontologia Fundação Hermínio Ometto - Araras-SP '
        },
        {
          type: '',
          names:  'Philippi Machado dos Reis - Pós Gradução Stricto Sensu em Odontologia Fundação Hermínio Ometto - Araras-SP'
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
