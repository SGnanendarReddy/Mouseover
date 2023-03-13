import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('box', { static: false })
  box!: ElementRef;
  
  hovered: boolean = false;
  
  onMouseOver(e: any) {
    console.log(e);
    this.hovered = true; 
    (<HTMLDivElement>this.box.nativeElement).style.pointerEvents = 'auto';
    (<HTMLDivElement>this.box.nativeElement).style.cursor = 'pointer';
  }

  onMouseOut(e: any) {
    this.hovered = false;
  }

  onClick() {
    console.log('Box Clicked');
    alert("Box Clicked")
  }
}
