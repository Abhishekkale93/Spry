
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  submittedData: any[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'position', 'dateOfJoining'];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required],
      position: ['', Validators.required],
      dateOfJoining: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.submittedData.push(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }

  onReset(): void {
    this.employeeForm.reset();
  }
}
