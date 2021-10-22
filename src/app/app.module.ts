import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
