import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../interfaces/item';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
    selector: 'app-user-detail',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
    ],
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
    userDetail: Item[] = [];
    userId: string;
    user$: Observable<Item | undefined>;


    constructor( public dialog: MatDialog, private fs: Firestore, private route: ActivatedRoute ){
        this.userId = this.route.snapshot.paramMap.get('id') || '';
        const userDoc = doc(this.fs, `users/${this.userId}`);
        this.user$ = docData(userDoc, { idField: 'id' }) as Observable<Item>;
    }

    editUser()     {
        const dialogRef = this.dialog.open(DialogEditUserComponent, {
            data: {
                id: this.userId,
            }
        });
  
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
        });
    }
    
    deleteUser()     {
        const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
            data: {
                id: this.userId,
            }
        });
    
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
        });
    }
    
    editAddress()     {
        const dialogRef = this.dialog.open(DialogEditAddressComponent, {
            data: {
                id: this.userId,
            }
        });
    
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
        });
    }

}
