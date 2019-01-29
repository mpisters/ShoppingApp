import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';
  currentTab: string = 'recipes';

  constructor() {
  }

  switchedToTab(tab) {
    this.currentTab = tab;
  }
}
