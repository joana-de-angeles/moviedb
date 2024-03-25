import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listPagesMenuBar } from './menu-bar.data';
import { PagesMenuBar } from './menu-bar.types';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  listMenuBar: PagesMenuBar[] = listPagesMenuBar;
  sourceImageRightImg: string = 'assets/imgs/logo.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
