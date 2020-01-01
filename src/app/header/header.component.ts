import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Toggle Menu

  toggleMenu(bar) {

    (bar.style.display == "block") ?
      bar.style.display = "none" :
      bar.style.display = "block"
  }


}
