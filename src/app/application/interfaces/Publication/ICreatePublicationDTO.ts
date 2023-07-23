import { Publication } from "src/app/domain/models/publication.model";

export interface ICreatePublicationDTO extends Pick<Publication, 'title' | 'hasForm' | 'idTypeOfPublication' | 'description' | 'imageRoute'> { }

















