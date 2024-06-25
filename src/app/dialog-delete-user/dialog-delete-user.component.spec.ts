import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteUserComponent } from './dialog-delete-user.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('DialogDeleteUserComponent', () => {
  let component: DialogDeleteUserComponent;
  let fixture: ComponentFixture<DialogDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteUserComponent],
      providers: [
        MatDialogRef
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
