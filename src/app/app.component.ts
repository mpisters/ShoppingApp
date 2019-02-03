import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTab = 'recipes';

  constructor() {
  }

  switchedToTab(tab) {
    this.currentTab = tab;
  }
}
