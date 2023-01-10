import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  initialDate = new Date();

  // Method that is called when the dateChange event is emitted
  onDateChange(date: Date) {
    // Do something with the selected date
    console.log(date);
  }
}
