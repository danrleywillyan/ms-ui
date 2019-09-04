import { Component } from '@angular/core';
import {ConfigServerService} from './services/config-server/config-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';

  constructor(configServer: ConfigServerService) {
    // configServer.getRoutes();
    // configServer.getUIConfig();
  }

}
