## Installing

```bash
$ npm install --save booble-toast
```

### Github
https://github.com/ricksonsa/booble-toast

### Usage

```typescript
    import { ToastService, ToastOptions, ToastEnum } from 'booble-toast';


     constructor(private toastService: ToastService) {
    }

    showToast(message: string) {
        this.toastService.showToast(new ToastOptions(message, ToastEnum.SUCCESS, true, 3000));  
    }
```

MessageBox.Create(title, message) - Creates an instance of MessageBox class.

ToastOptions receives 4 parameters: mesage, ToastEnum(css class), hasCloseButton (optional default false), time (optional default 5000)
