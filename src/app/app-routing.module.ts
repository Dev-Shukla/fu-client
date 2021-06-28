import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadWrapperComponent } from './upload-wrapper/upload-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: UploadWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
