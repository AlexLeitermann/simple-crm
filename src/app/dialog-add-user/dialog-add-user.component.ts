import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { addDoc, collection, Firestore, FirestoreModule } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dialog-add-user',
    standalone: true,
    imports: [
        FormsModule, ReactiveFormsModule,
        MatDialogModule,
        MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FirestoreModule,
        MatProgressBarModule,
        CommonModule,
    ],
    providers: [],
    templateUrl: './dialog-add-user.component.html',
    styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogAddUserComponent>
    ) {}

    loading = false;
    user = new User();
    birthDate = new Date;

    fs = inject(Firestore);


    async saveUser() {
        this.loading = true;
        this.user.birthDate = this.birthDate.getTime();
        await addDoc(collection(this.fs, 'users'), this.userToJSON())
            .catch(
                (err) => { console.error(err) }
            ).then((docRef) => { 
                this.loading = false;
                console.log('user', this.user); 
                this.dialogRef.close();
            }
        )
    }

    userToJSON() {
        return {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            birthDate: this.user.birthDate,
            address: this.user.address,
            zipCode: this.user.zipCode,
            city: this.user.city,
            email: this.user.email,
        }
    }

}
