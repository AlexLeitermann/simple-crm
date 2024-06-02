import { ApplicationConfig, Component, importProvidersFrom } from '@angular/core';
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
    
        // importProvidersFrom(provideFirebaseApp(() => initializeApp({
        //     "projectId":"ringoffire-799bf",
        //     "appId":"1:609686268861:web:380f921b38fed7c4b240d4",
        //     "storageBucket":"ringoffire-799bf.appspot.com",
        //     "apiKey":"AIzaSyDNNYP7E_s8EG-AebmCOnGlFxqgz_CkTIA",
        //     "authDomain":"ringoffire-799bf.firebaseapp.com",
        //     "messagingSenderId":"609686268861"
        // }))), 
        // importProvidersFrom(provideFirestore(() => getFirestore()))
        ]
};


