import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appAppfocus]"
})
export class AppfocusDirective implements OnInit {
  inputElement: ElementRef;
  constructor(private el: ElementRef) {
    console.log(el);
    this.inputElement = el;
  }

  ngAfterViewInit() {}

  ngOnInit() {
    setTimeout(() => this.inputElement.nativeElement.focus());
  }
}
