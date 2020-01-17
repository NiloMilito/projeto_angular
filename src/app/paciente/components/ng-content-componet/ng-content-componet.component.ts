import { Component, OnInit, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-ng-content-componet',
  templateUrl: './ng-content-componet.component.html',
  styleUrls: ['./ng-content-componet.component.scss']
})
export class NgContentComponet implements OnInit {

  @ViewChildren(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor() { }

  ngOnInit() {
  }

}
