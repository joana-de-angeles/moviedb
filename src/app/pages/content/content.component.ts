import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from 'src/app/data/movies';
import { Movies } from 'src/app/types/movies.types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  moviesData:Movies[] = movies
  id:string | any = '';

  movieChosen!:Movies;

  constructor(private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.id = this.route.snapshot.paramMap.get('id')
      this.movieChosen = this.moviesData.filter((movie:Movies) => movie.id === this.id)[0]
      console.log(this.movieChosen)
    }
  }
  
  // comebackHome(){
  //   this.router.navigate('home')
  // }

}
