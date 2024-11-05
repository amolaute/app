import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  //baseurl https://rudra-scv.vercel.app/send-email
  // https://rudra-konnect-app.onrender.com/send-email


  BASE_URL= 'https://rudra-scv.vercel.app/send-email'

  constructor(private http: HttpClient) { }
  loading = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    message: new FormControl('')

  })


  onSubmit() {
    this.loading = true;
    if (this.form.valid)
      this.http.post(this.BASE_URL, this.form.value)
        .subscribe(response => {
          this.loading = false;
          this.showSuccessToast('Email sent successfully')
          this.form.reset();
        }, error => {
          this.loading = false;
          this.showErrorToast('Error sending email')
          this.form.reset();
        });
  }

  showSuccessToast(message: any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'colored-toast'
      }
    });
  }

  // Error Toast
  showErrorToast(message: any) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'colored-toast'
      }
    });
  }
}

