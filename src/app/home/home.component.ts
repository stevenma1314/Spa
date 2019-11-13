import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie:Movie[];
  constructor(private movieservice:MovieService) {


   }

  ngOnInit() {
    this.movieservice.getTopgrossingMovies().subscribe(
      m=>{
        this.movie=m;
        console.table(this.movie);
      }
    )
  }

  buyMovie(movie:Movie)
  {
    console.log('inside the ome componet event')
    console.log(movie);
    // in the child component, create output decoretor to emit event usin eventemit
    //for example, in child componet, we want to send data to parent componet when we click on a button
    // change  click method. shoot emit data , using emit method  
    
    //step2, sicence output is event, we use normal breackets to subscribe the event and the data will be inside $event. 

  }
}
