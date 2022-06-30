import { Component, OnInit } from '@angular/core';
import { ElementInterface } from 'src/app/models/elements.model';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public elementList: ElementInterface[] = [];
  
  constructor(public elementService: ElementService) { }

  ngOnInit(): void {
    this.elementService.getElements().subscribe((data: any) => {
      const elementsAPI: ElementInterface[] = data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        species: character.species,
        gender: character.gender,
        image: character.image
      }));
      this.elementList = elementsAPI;
    })
  }

}