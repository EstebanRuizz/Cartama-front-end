import { Observable } from 'rxjs';

export interface IRepository<TypeIn, TypeOut> {
  getById(id: number): Observable<TypeIn>;
  getAll(): Observable<TypeIn[]>;
  create(entity: TypeOut): Observable<TypeOut>;
  update(entity: TypeIn): Observable<TypeIn>;
  delete(id: number): Observable<void>;
}
