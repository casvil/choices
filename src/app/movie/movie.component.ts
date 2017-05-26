import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter
 } from '@angular/core';
 import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie;

  @Input()
  textButton;

  @Output()
  selectMovie = new EventEmitter();

  @ViewChild('chooseButton')
  button

  constructor() { }

  ngOnInit() {
    // Set the click event and subscribe to it
    Observable.fromEvent(this.button.nativeElement, 'click')
    .subscribe(event => {
      this.selectMovie.emit(this.movie);
    })
  }
}
