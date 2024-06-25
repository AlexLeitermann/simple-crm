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
    selector: 'app-dialog-edit-address',
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
    templateUrl: './dialog-edit-address.component.html',
    styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogEditAddressComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        // this.user = this.data || '';
    }
    user!: Item;
    loading = false;
    birthDate = new Date;
    userDetail!: Item;

    saveUser() {
        this.dialogRef.close(this.user);

    }
}
