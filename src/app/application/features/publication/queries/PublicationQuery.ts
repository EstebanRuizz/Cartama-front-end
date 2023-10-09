import { Observable } from "rxjs/internal/Observable";
import { IListPublicationDTO } from "src/app/application/DTO/publication/IListPublicationDTO";
import { Pagination } from "src/app/application/interfaces/IQueryRepository";
import { BaseQueryRepository } from "src/app/persistence/repositories/BaseQueryRepository";
import { END_POINTS } from "src/environments/environment.dev";

export class PublicationQuery extends BaseQueryRepository<IListPublicationDTO> {
    constructor() {
        const API_URL = END_POINTS.PUBLICATION_END_POINT;
        super(API_URL);
    }
    override getAllPaginated(pagination: Pagination): Observable<IListPublicationDTO[]> {
        return super.getAllPaginated(pagination);
    }

    override getById(id: number): Observable<IListPublicationDTO> {
        return super.getById(id)
    }
    
    override getAll(): Observable<IListPublicationDTO[]> {
        return super.getAll()
    }
}
