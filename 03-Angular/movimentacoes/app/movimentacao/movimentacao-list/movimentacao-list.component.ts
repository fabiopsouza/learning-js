import { Component, OnInit } from '@angular/core';

import { MovimentacaoService } from '../shared/movimentacao.service';
import { Response } from '../../shared/response';
import { Movimentacao } from '../shared/movimentacao';

@Component({
    moduleId: module.id,
    selector: 'movimentacao-list',
    templateUrl: 'movimentacao-list.component.html',
    providers: [MovimentacaoService]
})
export class MovimentacaoListComponent implements OnInit {

    response : Response;
    errorMessage : string;
    movimentacoes : Movimentacao[];

    constructor(private movimentacaoService : MovimentacaoService) { }

    ngOnInit() { 
        this.movimentacaoService.getCurrentTime()
            .subscribe(response => this.response = response,
                        errorMessage => this.errorMessage = errorMessage,
                        () => this.fillTable()
            );
    }

    fillTable(){
        if(this.response.IsSuccess){
            this.movimentacoes = this.response.Data as Movimentacao[];
        } else{
            this.errorMessage = this.response.Error;
        }
    }
}