import { ToastOptions, ToastEnum } from './booble-toast.options';
import { Component, ComponentRef, ApplicationRef } from '@angular/core';

@Component({
  selector: 'booble-toast',
  templateUrl: './booble-toast.component.html',
  styleUrls: ['./booble-toast.component.css']
})
export class BoobleToastComponent {

  public toastRef: any;
  public applicationRef: ApplicationRef;
  public toastOptions: ToastOptions = { message: '', type: ToastEnum.SUCCESS, hasCloseButton: false, time: 5000 };

  constructor() { }


  dismiss() {
    document.getElementById('booble-toast').classList.add('booble-fade-out');
    this.applicationRef.detachView(this.toastRef.hostView);
    this.toastRef.destroy();
  }

}
