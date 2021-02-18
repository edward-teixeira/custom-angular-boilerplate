import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';
  currentRoute!: string;

  constructor(private router: Router) {
    this.router.events.subscribe(( ) => this.currentRoute = this.router.url);
    console.log(this.currentRoute);
   }

  ngOnInit(): void { }

  shouldHide(): boolean {
    const show: boolean  = this.currentRoute !== '/conta/cadastro' && this.currentRoute !== '/conta/login';
    return show;

  }

}
