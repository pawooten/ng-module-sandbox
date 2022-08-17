import { Component } from '@angular/core';
import { GreetingService } from './greeting-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-module-sandbox';

  constructor(private greetingService: GreetingService) {
    greetingService.logGreeting('Hi, how goes it?');
  }

}
