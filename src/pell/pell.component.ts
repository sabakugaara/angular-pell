import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import pell from './pell';

@Component({
  selector: 'pell-editor',
  template: `<div #pell></div>`,
  styleUrls: ['./pell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PellComponent implements OnInit {
  @ViewChild("pell")
  el: ElementRef;

  constructor() { }

  ngOnInit() {
    pell.init({
      onChange: _ => {},
      element: this.el.nativeElement,
    });
  }
}
