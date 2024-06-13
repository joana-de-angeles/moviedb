import { Component, Input } from '@angular/core';
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
export class MenuBarComponent {
  @Input() screen: string = '';
  listMenuBar: PagesMenuBar[] = listPagesMenuBar;
  sourceImageRightImg: string = 'assets/imgs/logo.svg';
  optionSelected: string = '';

  getFinalSegment(path: string): string {
    const segments = path.split('/');
    return segments[segments.length - 1];
  }

}
