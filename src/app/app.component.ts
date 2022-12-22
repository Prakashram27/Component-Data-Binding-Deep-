import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'one-com';

  serverElements = [];
  newServerName = '';
  newServerContent = '';

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
