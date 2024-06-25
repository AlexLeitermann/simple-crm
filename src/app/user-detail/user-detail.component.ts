import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { doc, Firestore, FirestoreModule, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../interfaces/item';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { User } from '../../models/user.class';

@Component({
    selector: 'app-user-detail',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        FirestoreModule,
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
    ],
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
    userDetail!: Item;
    userSubDetail!: Item;
    userId: string;
    fs: Firestore = inject(Firestore);
    unsubDoc;

    constructor( public dialog: MatDialog, private route: ActivatedRoute ){
        this.userId = this.route.snapshot.paramMap.get('id') || '';
        this.unsubDoc = onSnapshot(doc(this.fs, `users/${this.userId}`),(doc) =>{
            if (doc.data()) {
                this.userSubDetail = this.setUserObject(doc.data(), this.userId);
            }
            console.log('CurData:', this.userSubDetail);
        })
    }

    ngOnDestroy() {
        this.unsubDoc();
    }

    editUser()     {
        const dialogRef = this.dialog.open(DialogEditUserComponent);

        dialogRef.componentInstance.user = new User(this.userSubDetail);
        dialogRef.componentInstance.birthDate = new Date(this.userSubDetail.birthDate);
        console.log('editUser - Birthdate: ', new Date(this.userSubDetail.birthDate));
        
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
            if (result) {
                console.info('result: true');
                this.userSubDetail.birthDate = result.birthDate;
                this.userSubDetail.firstName = result.firstName;
                this.userSubDetail.lastName = result.lastName;
                this.userSubDetail.email = result.email;
                updateDoc(doc(this.fs, `users/${this.userId}`), {
                    firstName: this.userSubDetail.firstName,
                    lastName: this.userSubDetail.lastName,
                    birthDate: this.userSubDetail.birthDate,
                    email: this.userSubDetail.email,
                }).then (() => {
                    console.log('FB ist updated.');
                });
            } else {
                console.info('result: false');
            }
        });
    }
    
    deleteUser()     {
        const dialogRef = this.dialog.open(DialogDeleteUserComponent);
    
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
        });
    }
    
    editAddress()     {
        const dialogRef = this.dialog.open(DialogEditAddressComponent);

        dialogRef.componentInstance.user = new User(this.userSubDetail);
    
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log('The dialog was closed', result);
            if (result) {
                console.info('result: true');
                this.userSubDetail.address = result.address;
                this.userSubDetail.zipCode = result.zipCode;
                this.userSubDetail.city = result.city;
                updateDoc(doc(this.fs, `users/${this.userId}`), {
                    address: this.userSubDetail.address,
                    zipCode: this.userSubDetail.zipCode,
                    city: this.userSubDetail.city,
                }).then (() => {
                    console.log('FB ist updated.');
                });
            } else {
                console.info('result: false');
            }
        });
    }

    setUserObject(obj: any, id:string):Item {
        return { 
            id:id, 
            address: obj.address || 'note', 
            birthDate: obj.birthDate || 0, 
            city: obj.city || '', 
            email: obj.email || '',
            firstName: obj.firstName || '',
            lastName: obj.lastName || '',
            zipCode: obj.zipCode || 0,
        };
    }

}
