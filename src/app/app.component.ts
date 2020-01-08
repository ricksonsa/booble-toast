import { ToastService } from './../../projects/booble-toast/src/lib/booble-toast.service';
import { Component } from '@angular/core';
import { ToastOptions, ToastEnum } from 'projects/booble-toast/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booble-toast';

  /**
   *
   */
  constructor(private boobleService: ToastService) {


  }

  showToast() {
    this.boobleService.showToast(new ToastOptions('Teste', ToastEnum.SUCCESS, true, 3000));
  }

}
