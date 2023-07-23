import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { GenericMediator } from 'src/app/application/Mediator/GenericMediator';
import { PublicationQuery } from 'src/app/application/features/publication/queries/PublicationQuery';
import { IListPublicationDTO } from 'src/app/application/DTO/publication/IPublicationDTO';
import { ICreatePublicationDTO } from 'src/app/application/interfaces/Publication/ICreatePublicationDTO';
import { IDeletePublicationDTO } from 'src/app/application/interfaces/Publication/IDeletePublicationDTO';
import { IUpdatePublicationDTO } from 'src/app/application/interfaces/Publication/IUpdatePublicationDTO';
import { Pagination } from 'src/app/application/interfaces/IQueryRepository';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],
  providers: [PublicationQuery]
})
export class PublicationComponent implements OnInit {
  constructor(private router: Router,
    private readonly mediator: GenericMediator<ICreatePublicationDTO, IUpdatePublicationDTO, IDeletePublicationDTO, IListPublicationDTO>
  ) { }
  ngOnInit(): void {
    let pagination: Pagination = { limit: 10, offset: 1 }
    let publications = this.mediator.getAll(this)
    console.log(publications);

  }

  publication = {
    id: 0,
    Name: '',
    AlianceDate: '',
    Description: '',
    TypeAliance: '',
    DocumentRoute: '',
  };

  publicationList = [
    {
      id: 1,
      Name: 'Publication 1',
      AlianceDate: '2023-01-01',
      Description: 'Description 1',
      TypeAliance: 'Type 1',
      DocumentRoute: `https://cdn.wallpapersafari.com/80/86/vSwfAx.jpg`,
    },
    {
      id: 2,
      Name: 'Publication 2',
      AlianceDate: '2023-02-02',
      Description: 'Description 2',
      TypeAliance: 'education',
      DocumentRoute: `https://wallup.net/wp-content/uploads/2016/03/10/343202-landscape-nature.jpg`,
    },
    {
      id: 3,
      Name: 'Publication 2',
      AlianceDate: '2023-02-02',
      Description: 'Description 2',
      TypeAliance: 'education',
      DocumentRoute: `http://williamhortonphotography.com/wp-content/uploads/2015/05/Glacier-2.jpg`,
    },
    {
      id: 4,
      Name: 'Publication 2',
      AlianceDate: '2023-02-02',
      Description: 'Description 2',
      TypeAliance: 'education',
      DocumentRoute: `https://wallup.net/wp-content/uploads/2016/01/231074-nature-landscape-rainbows-mountain-fall-clouds-trees-colorful.jpg`,
    },
    {
      id: 5,
      Name: 'Publication 2',
      AlianceDate: '2023-02-02',
      Description: 'Description 2',
      TypeAliance: 'education',
      DocumentRoute: `https://i.pinimg.com/originals/06/dc/05/06dc05bbb7593cd699f3806ca4b482eb.jpg`,
    },
    // Agrega más objetos aquí...
  ];


  isEducationType(item: any): boolean {
    return item.TypeAliance === 'education';
  }

  logElement(itemId: number): void {
    console.log('Clicked on element with ID:', itemId);
  }

  goToNewPublication(): void {
    this.router.navigate(['home', 'new-publication']);
  }
  
  handleCreated(response: IListPublicationDTO): void {
    console.log('Publication created:', response);
    
  }

  handleError(error: any): void {
    console.error('Publication error:', error);
  }
  
}
