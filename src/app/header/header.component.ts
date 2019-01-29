import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() switchTab = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSwitchTab(tab: string) {
    this.switchTab.emit(tab);
  }
}
