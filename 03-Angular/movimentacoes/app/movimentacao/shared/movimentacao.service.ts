import { Injectable }                       from '@angular/core';
import { Headers, Http }          from '@angular/http';

import { Observable }                       from 'rxjs/Observable';

import { Response } from '../../shared/response';

@Injectable()
export class MovimentacaoService {

    constructor(private http :Http) { }

    getCurrentTime() :  Observable<Response> {
        return this.http.get('http://localhost:8083/api/movimentacao')
            .map(res => res.json() as Response);
    }
}