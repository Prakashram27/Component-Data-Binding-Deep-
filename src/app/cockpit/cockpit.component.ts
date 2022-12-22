import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit() {}

  onAddServerName() {
    this.serverElements.push({
      type: 'server',
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
  onAddServerContent() {
    this.serverElements.push({
      type: 'blueprint',
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
