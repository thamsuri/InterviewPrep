import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductService } from './customer/productservice';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CustomerComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer', component: CustomerComponent },
      { path: 'cocktail', component: CocktailComponent },
    ]),
    ButtonModule,
    TableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
