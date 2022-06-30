import { ElementService } from 'src/app/services/element.service';
import { Component, OnInit } from '@angular/core';
import { ElementInterface } from 'src/app/models/elements.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentdetail',
  templateUrl: './contentdetail.component.html',
  styleUrls: ['./contentdetail.component.scss']
})
export class ContentdetailComponent implements OnInit {
public element!: ElementInterface;
  constructor(private elementService: ElementService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const elementID = params.get('characterID')
      
      this.elementService.getElement(elementID).subscribe((data: any) => {
        this.element = data;
        console.log(this.element)
      })
    })
  }

}