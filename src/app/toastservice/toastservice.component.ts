import { Component } from '@angular/core';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-toastservice',
  templateUrl: './toastservice.component.html',
  styleUrl: './toastservice.component.scss'
})
export class ToastserviceComponent {
  constructor(private toastrService: NbToastrService) {}

  showToast() {
    this.toastrService.show(
      'This is a toast message',
      'Toast Title',
      { status: 'success', duration: 3000 }
    );
  }
}
