import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  employeeForm: FormGroup;
  technologies = [
    { title: 'C' },
    { title: 'C++' },
    { title: 'Java' },
    { title: 'Python' },
    { title: 'Javascript' },
  ];
  errors = {
    technology: true,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/),
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)],
      ],
      category: ['General', [Validators.required]],
      technology: this.fb.array([]),
    });
  }

  onChange(technology: string, target: any) {
    const isChecked = target.checked;
    const technologyFormArray = <FormArray>(
      this.employeeForm.controls.technology
    );
    if (isChecked) {
      technologyFormArray.push(new FormControl(technology));
    } else {
      let index = technologyFormArray.controls.findIndex(
        (x) => x.value == technology
      );
      technologyFormArray.removeAt(index);
    }

    this.errors.technology = technologyFormArray.length > 0 ? false : true;
  }

  getErrors() {
    let noOfErrors = Object.keys(this.errors).filter((t) => this.errors[t]);
    if (noOfErrors.length > 0) {
      return true;
    }
    return false;
  }

  onSave() {
    this._userService.addUser(this.employeeForm.value);
    this.router.navigate(['/users/view']);
  }
}
