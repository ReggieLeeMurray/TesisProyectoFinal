import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
urlImage = 'https://images.vexels.com/media/users/3/135553/isolated/preview/fe1680d9e81708fd79fc27b791401673-icono-de-calculadora-plana-by-vexels.png'
  constructor() { }

  ngOnInit(): void {
  }

}
