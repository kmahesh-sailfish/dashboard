import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./reducer/counter.reducer";
import { MyCounterComponent } from "./my-counter/my-counter.component";
@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ Count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
