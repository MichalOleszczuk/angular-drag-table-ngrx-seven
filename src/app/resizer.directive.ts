import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[resizer]",
})
export class ResizerDirective {
  width: number;
  oldX = 0;
  grabber = false;

  constructor(private el: ElementRef) {}

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }

    this.resizer(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener("document:mouseup", ["$event"])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  resizer(offsetX: number) {
    this.width -= offsetX;
    this.el.nativeElement.parentNode.style.width = this.width + "px";
  }

  @HostListener("mousedown", ["$event"]) onResize(
    event: MouseEvent,
    resizer?: Function
  ) {
    this.grabber = true;
    this.oldX = event.clientX;
    event.preventDefault();
  }

  ngOnInit() {
    this.width = parseInt(this.el.nativeElement.parentNode.offsetWidth);
  }
}
