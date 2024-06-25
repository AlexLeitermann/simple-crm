import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

Component({
    imports:[
    ]
})

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        provideAnimationsAsync(),
        provideFirebaseApp(() => initializeApp({ 
            apiKey: "AIzaSyB8AjGC75TxqQBE8impQ0pe0sPRBspyZaU",
            authDomain: "simple-crm-cb4a3.firebaseapp.com",
            projectId: "simple-crm-cb4a3",
            storageBucket: "simple-crm-cb4a3.appspot.com",
            messagingSenderId: "155988972910",
            appId: "1:155988972910:web:c9acf9564bd627ecea9d7f"
        })),
        provideFirestore(() => getFirestore()),
    
        ]
};


