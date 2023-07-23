import { Publication } from "src/app/domain/models/publication.model";

export interface IDeletePublicationDTO  extends Pick<Publication, 'Id'> { }