import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { someJson } from 'src/some'
export interface UserForm
  extends FormGroup<{
    username: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string|null>;
    age: FormControl<number|null>;
  }> {}

@Component({
  standalone: true,
  providers: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    // BrowserAnimationsModule,
], // add other components to specify all external dependencies: modules, pipes, other components

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form!: UserForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      username: this.fb.nonNullable.control('A'),
      firstName: this.fb.nonNullable.control('B'),
      lastName: this.fb.nonNullable.control<string>('C'),
      email: this.fb.control<string|null>(null),
      age: this.fb.control<number|null>(null),
    });
  }
  // untypedForm = new UntypedFormGroup({
  //   email: new UntypedFormControl(null), // new version but keep curr code. changed automaticall if running "ng update"
  //   age: new UntypedFormControl(null)
  // });

  loadFromHttp() {
    // console.log(this.form.value);

    this.form.patchValue({
      age: 456,
      firstName: 'George',
      lastName: 'John',
      username: 'Mike',
    });
  }

  reset() {
    this.form.reset();
  }

  // onSubmit() {
  //   console.log(this.form.value);
  //   if (this.form.value.email) {
  //     console.log(this.form.value.email.length); // .email is available since v14 Typed Reactive Forms
  //   }
  // }

  ngOnInit(): void {
    // const xmlData = "";
  }

  title = 'my-test';
}
