import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ClientesService]
})
export class AppComponent {
  title = 'services';
  lista = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    servicio: ClientesService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.lista = servicio.getClientes();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
