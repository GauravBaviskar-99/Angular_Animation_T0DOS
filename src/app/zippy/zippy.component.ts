
import { transition } from '@angular/animations';

import { state } from '@angular/animations';
import { animate } from '@angular/animations';
import { style } from '@angular/animations';


import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [trigger('zippyAnimation', [
    state('void', style({
      height: '0',
      overflow: 'hidden',
      paddingTop: '0',
      paddingBottom: '0',
      opacity: 0
    })),
    transition('void=>*', [animate("300ms ease-in", style({
      height: '*',
      overflow: 'auto',
      paddingTop: '*',
      paddingBottom: '*',
    })),
    animate('500ms', style({ opacity: 1 }))
    ]
    ),
    transition('*=>void', animate('300ms ease-out'))

  ])]
})
export class ZippyComponent implements OnInit {

  openZippyBox: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggleZippy() {
    this.openZippyBox = !this.openZippyBox;
  }

}
