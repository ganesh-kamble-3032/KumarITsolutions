import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DomiansComponent } from './components/domians/domians.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebdesignComponent } from './components/webdesign/webdesign.component';
import { DesignComponent } from './components/design/design.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { EcommercesolutionsComponent } from './components/ecommercesolutions/ecommercesolutions.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { WebhostingComponent } from './components/webhosting/webhosting.component';
import { OtherservicesComponent } from './components/otherservices/otherservices.component';
import { CompoComponent } from './compo/compo.component';
import { CustomComponent } from './components/custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DomiansComponent,
    ContactComponent,
    WebdesignComponent,
    DesignComponent,
    ElectronicsComponent,
    EcommercesolutionsComponent,
    EnterpriseComponent,
    WebhostingComponent,
    OtherservicesComponent,
    CompoComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
