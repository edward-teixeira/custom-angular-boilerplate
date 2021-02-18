import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppContaComponent implements OnInit {
  hideFooter = true;
  constructor() { }

  ngOnInit(): void { }
}
