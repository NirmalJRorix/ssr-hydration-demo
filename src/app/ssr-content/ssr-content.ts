import { Component } from '@angular/core';

@Component({
  selector: 'app-ssr-content',
  imports: [],
  templateUrl: './ssr-content.html',
  styleUrl: './ssr-content.scss'
})
export class SsrContent {
serverMessage: string = 'Loading...';

  ngOnInit() {
    // In a real app, this is where you'd fetch data. 
    // This runs immediately on the server and on the client.
    this.serverMessage = 'SSR Data Loaded: ' + new Date().toISOString();
  }
}
