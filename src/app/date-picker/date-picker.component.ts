import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  days = Array.from(Array(31).keys()).map(i => i + 1);
  months = Array.from(Array(12).keys()).map(i => i + 1);
    // Array of month names
  monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  years = Array.from(Array(100).keys()).map(i => i + 1940);
  selectedDay = new Date().getDate();
  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();
  // Input property that accepts an initial date value
  @Input() date: Date;

  // Output property that emits an event when the selected date changes
  @Output() dateChange = new EventEmitter<Date>();

  constructor() {}

  ngOnInit() {
    // Set the selectedDay, selectedMonth, and selectedYear based on the initial date value
    if (this.date) {
      this.selectedDay = this.date.getDate();
      this.selectedMonth = this.date.getMonth() + 1;
      this.selectedYear = this.date.getFullYear();
    }
  }

  // Method that is called whenever the selected day, month, or year changes
  onDateChange() {
    // Create a new Date object using the selected values
    const selectedDate = new Date(this.selectedYear, this.selectedMonth - 1, this.selectedDay);
    // Emit the selected date
    this.dateChange.emit(selectedDate);
  }
}
