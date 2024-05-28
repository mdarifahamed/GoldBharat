import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  
  
})
export class RegisterComponent implements OnInit {
  form!:FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.pattern('[a-z A-Z]+$')]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(5)]),
      phone:new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]')]),
      
      confirmpassword:new FormControl('', Validators.required),
    },

    {
      validators: this.passwordMatchValidator
    });
   
  }

  ngOnInit(): void {
   
    
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmpassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmpassword')?.setErrors({ passwordMismatch: true });
    } else {
      form.get('confirmpassword')?.setErrors(null);
    }
  }

  


 

  onclick(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

 

 

}
