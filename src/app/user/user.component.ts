import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { FirestoreModule } from '@angular/fire/firestore';

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
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
    user = new User();
  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogAddUserComponent);
  
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }}
