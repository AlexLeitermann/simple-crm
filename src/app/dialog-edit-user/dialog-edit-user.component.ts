import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Item } from '../interfaces/item';

@Component({
    selector: 'app-dialog-edit-user',
    standalone: true,
    imports: [
        CommonModule,
        FirestoreModule,
        FormsModule, ReactiveFormsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
    ],
    templateUrl: './dialog-edit-user.component.html',
    styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogEditUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        // this.userDetail = this.data || '';
    }
    user!:Item;
    loading = false;
    birthDate!: Date;
    // userDetail!: Item;

    saveUser() {
        console.log('birthDate:', this.birthDate.valueOf() / 1000);
        
        this.user.birthDate = (this.birthDate.valueOf() / 1);
        this.dialogRef.close(this.user);

    }
}
