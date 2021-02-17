import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.maxLength(3)],
    lastName: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.profileForm.value);
  }

  firstName(): any {
    const firstName = this.profileForm.controls.firstName;


    return firstName.touched && firstName.hasError('maxLength');
  }
}
