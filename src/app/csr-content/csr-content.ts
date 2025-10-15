import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-csr-content',
  imports:  [CommonModule], 
  templateUrl: './csr-content.html',
  styleUrl: './csr-content.scss',
  host: { 
    '[attr.ngSkipHydration]': 'true' 
  }, 
})
export class CsrContent {
  clientMessage: string = 'Waiting for client initialization...';

  // Inject PLATFORM_ID to safely detect the environment
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit() {
    // This check ensures browser-specific code only runs on the client.
    if (isPlatformBrowser(this.platformId)) {
      // ✅ This code ONLY runs in the browser.
      const width = window.innerWidth;
      this.clientMessage = `CSR Logic: Window width detected as ${width}px.`;
    }
  }
}
