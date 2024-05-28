import { Component ,Renderer2,ViewChild,ElementRef} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  otpInputs: string[] = ['', '', '', '',];

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (value.length ===1 && index < this.otpInputs.length - 1) {
      this.moveToNextInput(index);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && index > 0) {
      this.moveToPreviousInput(index);
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData?.getData('text') || '';
    if (/^\d+$/.test(clipboardData) && clipboardData.length === this.otpInputs.length) {
      this.otpInputs = clipboardData.split('');
    }
  }

  private moveToNextInput(index: number): void {
    const nextInput = document.querySelectorAll('.otp-letter-input')[index + 1] as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }

  private moveToPreviousInput(index: number): void {
    const prevInput = document.querySelectorAll('.otp-letter-input')[index - 1] as HTMLInputElement;
    if (prevInput) {
      prevInput.focus();
    }
  }


}
