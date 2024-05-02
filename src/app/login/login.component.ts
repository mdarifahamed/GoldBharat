import { Component ,Renderer2,ViewChild,ElementRef} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  otpInputs: string[] = ['', '', '', ''];


  constructor(private renderer: Renderer2) { }

  verifyOTP() {
    const otpValue = this.otpInputs.join('');
    console.log('Verifying OTP:', otpValue);
    // You can add OTP verification logic here
  }

  focusNext(event: any, index: number) {
    if (event.target.value.length === 1 && index < this.otpInputs.length - 1) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  goBack() {
    for (let i = this.otpInputs.length - 1; i >= 0; i--) {
      if (this.otpInputs[i]) {
        this.otpInputs[i] = '';
        break;
      }
    }
  }

  goPrevious() {
    for (let i = 0; i < this.otpInputs.length; i++) {
      if (!this.otpInputs[i]) {
        const prevInput = i > 0 ? i - 1 : 0;
        document.getElementById(`otpInput${prevInput + 1}`)?.focus();
        break;
      }
    }
  }



  submitOtp(form: NgForm) {
    if (form.valid) {
      const otpValue = form.value.digit1 + form.value.digit2 + form.value.digit3 + form.value.digit4;
      console.log('Entered OTP:', otpValue);
      // You can now send the OTP for validation or further processing
    } else {
      console.log('Invalid OTP');
    }
  }

  focusPrevInput(event: KeyboardEvent, prevInput: any) {
    if (event.key === 'Backspace' && prevInput) {
      prevInput.focus();
    }
  }


 

}
