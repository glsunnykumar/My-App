import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import  {HeaderComponent} from './Header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeListComponent } from './Receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './Receipes/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './Receipes/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingeditComponent } from './shopping-list/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingeditComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
