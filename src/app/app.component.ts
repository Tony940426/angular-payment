import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  date: string = "";
  amount: string = "";
  miles: number = 0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onAmoungChange(value: string) {
    this.amount = value
  }

  onMilesChange(value: number) {
    this.miles = value;
  }
}
