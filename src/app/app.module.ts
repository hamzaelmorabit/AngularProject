import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { ParentComponent } from './parent/parent.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    ListComponent,
    FormComponent,
    DetailsComponent,
    ParentComponent,

    DetailsComponentComponent,

    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
