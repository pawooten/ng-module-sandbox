import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  logGreeting(greeting: string) : void {
    console.log(`Greetings from some ngModule: ${greeting}`);
  }
}
