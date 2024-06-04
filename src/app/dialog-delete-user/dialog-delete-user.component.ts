import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';

@Component({
    selector: 'app-dialog-delete-user',
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
    templateUrl: './dialog-delete-user.component.html',
    styleUrl: './dialog-delete-user.component.scss'
})
export class DialogDeleteUserComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogDeleteUserComponent>
    ) {}
    user = new User();
    loading = false;
    birthDate = new Date;

    deleteUser() {
        this.dialogRef.close();

    }
}
