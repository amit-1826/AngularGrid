import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appAppblack]"
})
export class AppblackDirective {
  constructor(private e: ElementRef) {
    e.nativeElement.style.color = "green";
  }
}
