import { EcommercesolutionsComponent } from './components/ecommercesolutions/ecommercesolutions.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { DomiansComponent } from './components/domians/domians.component';
import { ContactComponent } from './components/contact/contact.component';
import { WebdesignComponent } from './components/webdesign/webdesign.component';
import { DesignComponent } from './components/design/design.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { OtherservicesComponent } from './components/otherservices/otherservices.component';
import { CustomComponent } from './components/custom/custom.component';
import { WebhostingComponent } from './components/webhosting/webhosting.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
  path:'services',component:ServicesComponent
  },
  {
    path:'domians',component:DomiansComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'webdesign',component:WebdesignComponent
  },
  {
    path:'design',component:DesignComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  },
  {
    path:'ecommercesolutions',component:EcommercesolutionsComponent
  },
  {
    path:'enterprise',component:EnterpriseComponent
  },
  {
    path:'otherservices',component:OtherservicesComponent
  },
  {
    path:'custom',component:CustomComponent
  },
  {
    path:'webhosting',component:WebhostingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
