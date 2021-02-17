import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message = "Carregando";
  color = "#007bff";
  loaderSize = 60;
  // ms
  animationDuration = 5000;
  constructor() { }

  ngOnInit(): void { }
}
