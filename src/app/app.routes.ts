import { Routes } from '@angular/router';
import { SsrContent } from './ssr-content/ssr-content';
import { CsrContent } from './csr-content/csr-content';

export const routes: Routes = [
    { path: 'ssr-page', component: SsrContent },
    { path: 'csr-page', component: CsrContent },
    { path: '', redirectTo: '/ssr-page', pathMatch: 'full' },
];
