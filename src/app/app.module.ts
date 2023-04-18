import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingComponent } from './components/rating/rating.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectComponent } from './direct/direct.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesPipe } from './pipes.pipe';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HttpclientToExtendserviceComponent } from './httpclient-to-extendservice/httpclient-to-extendservice.component';
import{HttpClientModule}from'@angular/common/http';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { AnimationComponent } from './animation/animation.component';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { RoutpharamComponent } from './routpharam/routpharam.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { GuardsComponent } from './guards/guards.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BindingComponent,
    ProductsComponent,
    RatingComponent,
    HighlightDirective,
    DirectComponent,
    PipesComponent,
    PipesPipe,
    TemplatedrivenComponent,
    ReactiveformComponent,
    HttpclientToExtendserviceComponent,
    PagenotFoundComponent,
    AnimationComponent,
    RoutpharamComponent,
    MobilesComponent,
    LaptopsComponent,
    EarphonesComponent,
    GuardsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
