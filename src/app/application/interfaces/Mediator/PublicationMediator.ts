// publication-mediator.interface.ts
import { ICreatePublicationDTO } from "../Publication/ICreatePublicationDTO";

export interface PublicationMediator {
  createPublication(publication: ICreatePublicationDTO, component: any): void;
}
