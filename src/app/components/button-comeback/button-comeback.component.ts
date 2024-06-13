import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-comeback',
  templateUrl: './button-comeback.component.html',
  styleUrls: ['./button-comeback.component.css']
})
export class ButtonComebackComponent implements OnInit {

  @Input() type: string = ''; // Recebe o tipo ('movie' ou 'tv') do componente pai

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    // Verificar o tipo para determinar a rota de retorno
    const previousUrl = this.type === 'movie' ? '/home/movies' : '/home/tv';
    this.router.navigateByUrl(previousUrl);
  }

}
