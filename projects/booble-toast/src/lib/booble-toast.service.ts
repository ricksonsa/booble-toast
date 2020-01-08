import {
  Injectable
}

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

  constructor() { }

  public showToast(toastOptions: ToastOptions) {
    try {
      this.removeToast();
    }

    catch (error) {

    }

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

  }

  private present(toastOptions: ToastOptions) {
    this.toast = document.createElement('div');
    this.toast.classList.add(`booble-toast`);
    this.toast.classList.add('booble-fade-in');
    this.toast.classList.add(toastOptions.type);

    let gridDiv = document.createElement('div');
    gridDiv.classList.add('booble-grid');

    gridDiv.style.gridTemplateColumns = `${toastOptions.hasCloseButton ? 'auto 5%' : 'auto'}`;

    let span = document.createElement('span');
    span.innerHTML = toastOptions.message;

    let firstColumn = document.createElement('div');
    firstColumn.setAttribute('style', `display: flex;
      align-items: center;
      justify-content: center; `);
    firstColumn.appendChild(span);
    gridDiv.appendChild(firstColumn);

    if (toastOptions.hasCloseButton) {
      let lastColumn = document.createElement('div');
      lastColumn.classList.add('booble-close-button');
      let x = document.createElement('span');
      x.innerHTML = '&times';
      x.addEventListener('click', () => this.removeToast());
      lastColumn.appendChild(x);
      gridDiv.appendChild(lastColumn);
    }

    this.toast.appendChild(gridDiv);
    document.body.appendChild(this.toast);

  }

  removeToast() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.toast.classList.add('booble-fade-out');
    document.body.removeChild(this.toast);

  }
}