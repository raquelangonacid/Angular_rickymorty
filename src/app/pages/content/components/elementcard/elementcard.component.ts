import { ElementInterface } from './../../../../models/elements.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elementcard',
  templateUrl: './elementcard.component.html',
  styleUrls: ['./elementcard.component.scss']
})
export class ElementcardComponent implements OnInit {
@Input() public element!: ElementInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
