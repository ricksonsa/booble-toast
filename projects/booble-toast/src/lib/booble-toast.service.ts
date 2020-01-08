import { BoobleToastComponent } from './booble-toast.component';
import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef }

  from '@angular/core';

import {
  ToastOptions
}

  from './booble-toast.options';

@Injectable({
  providedIn: 'root'
}

) export class ToastService {
  timer: any;
  toast: any;
  componentRef: ComponentRef<BoobleToastComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  public showToast(toastOptions: ToastOptions) {
    if (this.componentRef)
      this.dismiss();

    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (toastOptions.time != 0) {
      this.present(toastOptions);

      this.timer = setTimeout(() => {
        this.removeToast();
        this.timer = null;
      }

        , toastOptions.time);
    }

    else {
      toastOptions.hasCloseButton = true;
      this.present(toastOptions);
    }



    return this.componentRef;
  }

  dismiss() {
    let toast = document.getElementById('booble-toast')
    if (toast)
      toast.classList.add('booble-fade-out');
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  private present(toastOptions: ToastOptions) {

    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(BoobleToastComponent)
      .create(this.injector);

    this.applicationRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.prepend(domElem);
    this.componentRef.instance.toastRef = this.componentRef;
    this.componentRef.instance.applicationRef = this.applicationRef;

    this.componentRef.instance.toastOptions = toastOptions;

    document.getElementById('booble-grid').setAttribute('style', `grid-template-columns: ${toastOptions.hasCloseButton ? 'auto 5%;' : 'auto;'}`);

    if (toastOptions.hasCloseButton) {
      let lastColumn = document.createElement('div');
      lastColumn.classList.add('booble-close-button');
      let x = document.createElement('span');
      x.innerHTML = '&times';
      x.addEventListener('click', () => this.removeToast());
      lastColumn.appendChild(x);
    }

  }

  removeToast() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.dismiss();

  }
}