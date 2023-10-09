// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';

// import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';
// import { PublicationQuery } from 'src/app/application/features/publication/queries/PublicationQuery';
// import { IListPublicationDTO } from 'src/app/application/DTO/publication/IListPublicationDTO';
// import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
// import { IDeletePublicationDTO } from 'src/app/application/interfaces/Publication/IDeletePublicationDTO';
// import { IUpdatePublicationDTO } from 'src/app/application/interfaces/Publication/IUpdatePublicationDTO';
// import { Pagination } from 'src/app/application/interfaces/IQueryRepository';
// import { IMediatorHandler } from 'src/app/application/interfaces/Mediator/IComponentHandler';

// @Component({
//   selector: 'app-publication',
//   templateUrl: './publication.component.html',
//   styleUrls: ['./publication.component.css'],
//   providers: [PublicationQuery]
// })
// export class PublicationComponent implements OnInit, IMediatorHandler {
//   constructor(
//     private readonly router: Router,
//     private readonly mediator: GenericMediator<
//       ICreatePublicationDTO,
//       IUpdatePublicationDTO,
//       IDeletePublicationDTO,
//       IListPublicationDTO
//     >
//   ) { }

//   ngOnInit(): void {
//     let pagination: Pagination = { limit: 10, offset: 1 }
//     let publications = this.mediator.getAll(this)
//     // console.log(publications);

//     this.publicationList = []; // Initialize the publicationList as an empty array
//   }

//   publicationList!: IListPublicationDTO[];

//   handleSuccess(response: any): void {
//     console.log('Publication created:', response);
//     const newPublication = response?.data;
//     if (newPublication) {
//       // this.publicationList.push(newPublication);
//       this.publicationList = response.data;
//     }
//   }



//   isEducationType(item: any): boolean {
//     // console.log(item);
    
//     return item.TypeAliance === 1;
//   }

//   logElement(itemId: number): void {
//     console.log('Clicked on element with ID:', itemId);
//   }

//   goToNewPublication(): void {
//     this.router.navigate(['home', 'new-publication']);
//   }

//   handleError(error: any): void {
//     console.error('Publication error:', error);
//   }

// }
