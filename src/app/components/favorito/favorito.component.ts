import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.scss']
})
export class FavoritoComponent implements OnInit {

  @Input() isFavourite = false;
  @ViewChild('heart') heart: ElementRef;
  isLoading = false;

  @Output() changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavourite() {
    if (!this.isFavourite) {
      this.heart.nativeElement.classList.remove("far");
      this.heart.nativeElement.classList.add("fas");
      this.isFavourite = true;
      this.changed.emit(true);
    } else {
      this.heart.nativeElement.classList.remove("fas");
      this.heart.nativeElement.classList.add("far");
      this.isFavourite = false;
      this.changed.emit(false);
    }
  }

}
