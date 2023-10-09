import { Publication } from "src/app/domain/models/publication.model";

export interface IListPublicationDTO
    extends Pick<
        Publication,
        'id' |
        'title' |
        'hasForm' |
        'idTypeOfPublication' |
        'description' |
        'imageRoute' |
        'createdDate'> { }  