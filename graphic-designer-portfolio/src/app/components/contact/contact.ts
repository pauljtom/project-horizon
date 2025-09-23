import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html'
})
export class Contact {
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = form.value;
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message! I\'ll get back to you within 24 hours. 💕');
      
      // Reset the form
      form.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
