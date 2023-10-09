// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';

// import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './home.component';
// import { PublicationComponent } from './publication/publication.component';
// import { HeaderComponent } from '../shared/header/header.component';
// import { NewPublicationComponent } from './new-publication/new-publication.component';
// import { PublicationCommand } from 'src/app/application/features/publication/commands/PublicationCommand';
// import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';
// import { genericMediatorFactory } from 'src/app/application/ServiceExtension/genericMediatorFactory';
// import { PublicationQuery } from 'src/app/application/features/publication/queries/PublicationQuery';


// @NgModule({
//   declarations: [HomeComponent, PublicationComponent, HeaderComponent, NewPublicationComponent],
//   imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
//   providers: [
//     PublicationCommand, // Provide the concrete implementation of PublicationCommand
//     PublicationQuery,
//     {
//       provide: GenericMediator,
//       useFactory: genericMediatorFactory,
//       deps: [PublicationCommand, PublicationQuery], // Define the dependencies required for the factory function
//     },
//   ],
// })
// export class HomeModule {}
