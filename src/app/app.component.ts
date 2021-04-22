import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graduation';

  routerChange() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
