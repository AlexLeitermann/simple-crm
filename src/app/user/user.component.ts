import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { collection, collectionData, DocumentData, Firestore, FirestoreModule, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Item } from '../interfaces/item';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDialogModule,
        FirestoreModule,
        MatCardModule,
        RouterLink,
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
    user = new User();
    fs: Firestore = inject(Firestore);
    allUsers: Item[] = [];

    constructor( public dialog: MatDialog ) {
        const aCollection = collection(this.fs, 'users');

        onSnapshot(aCollection, (snapshot) => {
            this.allUsers = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    firstName: doc.data()['firstName'],
                    lastName: doc.data()['lastName'],
                    birthDate: doc.data()['birthDate'],
                    email: doc.data()['email'],
                    address: doc.data()['address'],
                    zipCode: doc.data()['zipCode'],
                    city: doc.data()['city']
                } as Item;
            });
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddUserComponent);
  
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

}
