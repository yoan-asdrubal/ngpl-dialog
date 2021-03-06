import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplConfirmComponent} from './ngpl-confirm/ngpl-confirm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgplInfoDialogComponent} from './ngpl-info-dialog/ngpl-info-dialog.component';
import {LottieCacheModule, LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {NgplLottieComponent} from './ngpl-lottie/ngpl-lottie.component';
import {NgplDialogService} from './ngpl-dialog.service';


export function playerFactoryDialog(): any {
  return player;
}

@NgModule({
  declarations: [NgplConfirmComponent, NgplInfoDialogComponent, NgplLottieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    LottieModule.forRoot({player: playerFactoryDialog}),
    LottieCacheModule.forRoot()
  ]
})
export class NgplDialogModule {
  static injector: Injector = null;

  constructor(private ngplDialog: NgplDialogService, injector: Injector) {
    NgplDialogModule.injector = injector;
    console.log('NgplDialogModule', ngplDialog);
  }
}
