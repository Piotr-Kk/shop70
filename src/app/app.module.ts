import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CounterComponent } from './counter/counter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AssetComponent } from './shopping-list/asset/asset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    ShoppingListComponent,
    AssetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
