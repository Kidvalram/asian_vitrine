import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'accueil',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {state: 'accueil'}
    },
    {
        path: 'sommesnous',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
        data: {state: 'sommesnous'}
    },
    {
        path: 'contacteznous',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
        data: {state: 'contacteznous'}
    },
    {
        path: 'cartedefidelite',
        loadChildren: () => import('./pages/card/card.module').then(m => m.CardModule),
        data: {state: 'cartedefidelite'}
    },
    {path: '**', redirectTo: '/accueil'},
    {path: '', redirectTo: '/accueil', pathMatch: 'full'}
];