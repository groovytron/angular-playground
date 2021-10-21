import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiPaginationInterface } from './interfaces/api-pagination.interface';
import { ApiPagination } from '../../models/api-pagination.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractSerializer } from './serializers/abstract-serializer';

@Injectable({
  providedIn: 'root',
})
export class ApiService<Deserialized, Serialized> {
  constructor(protected http: HttpClient, protected serializer: AbstractSerializer<Deserialized, Serialized>) { }

  list(params: any): Observable<ApiPagination<Serialized>> {
    return (this.http.get('url') as Observable<ApiPaginationInterface<Deserialized>>).pipe(
      map((pagination: ApiPaginationInterface<Deserialized>) => {
        return new ApiPagination<Serialized>({
          previous: pagination.previous,
          current: pagination.current,
          next: pagination.next,
          last: pagination.last,
          items: this.serializer.serializeMany(pagination.items)
        });
      })
    );
  }
}
