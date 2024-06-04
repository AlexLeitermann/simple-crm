import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { doc, docData, Firestore, FirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { Item } from '../interfaces/item';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
        private fs: Firestore,
        private route: ActivatedRoute,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.userId = this.data.id || '';
        const userDoc = doc(this.fs, `users/${this.userId}`);
        this.user$ = docData(userDoc, { idField: 'id' }) as Observable<Item>;
    }
    user = new User();
    loading = false;
    birthDate = new Date;
    userDetail: Item[] = [];
    userId: string;
    user$: Observable<Item | undefined>;

    saveUser() {
        this.dialogRef.close();

    }
}
