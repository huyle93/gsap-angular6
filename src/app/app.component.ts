import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Power1, Bounce} from 'gsap/all';

declare var TweenMax: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('mushroom') box: ElementRef;

  ngOnInit(): void {
    this.doIt();
  }

  doIt(): void {
    TweenMax.fromTo(this.box.nativeElement, 2, {x: 20}, {x: 440, ease: Power1.easeOut});
    TweenMax.fromTo(this.box.nativeElement, 2, {y: 20}, {y: 440, ease: Bounce.easeOut});
  }
}
