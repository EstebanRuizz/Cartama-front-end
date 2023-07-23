import { Publication } from "src/app/domain/models/publication.model";

export interface IUpdatePublicationDTO extends Pick<Publication, 'Id' | 'title' | 'hasForm' | 'idTypeOfPublication' | 'description' | 'imageRoute'> { }