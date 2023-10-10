import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentsecondComponent } from './parentsecond/parentsecond.component';
import { ChildsecondComponent } from './childsecond/childsecond.component';
import { ChildthirdComponent } from './childthird/childthird.component';
import { ComponentlifecyclehookComponent } from './componentlifecyclehook/componentlifecyclehook.component';
import { UxPipe } from './Apppipe/ux.pipe';
import { FilterPipe } from './Apppipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StructuralDirectivesComponent,
    PushSpliceComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    ParentComponent,
    ChildComponent,
    ParentsecondComponent,
    ChildsecondComponent,
    ChildthirdComponent,
    ComponentlifecyclehookComponent,
    UxPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
