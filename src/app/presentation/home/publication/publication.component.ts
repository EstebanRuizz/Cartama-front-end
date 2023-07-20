import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css'],
})
export class PublicationComponent {
  constructor(private router: Router) {}

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
}
