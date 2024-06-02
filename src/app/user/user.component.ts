import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { collection, collectionData, Firestore, FirestoreModule, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';

interface Item {
    firstName: string,
    lastName: string,
    birthDate: number,
    address: string,
    zipCode: number,
    city: string,
    email: string
}

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
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
    user = new User();
    fs: Firestore = inject(Firestore);
    items$: Observable<any[]>;
    allUsers = [];

    constructor(
        public dialog: MatDialog
    ) {
        const aCollection = collection(this.fs, 'users');
        this.items$ = collectionData(aCollection);
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddUserComponent);
  
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
