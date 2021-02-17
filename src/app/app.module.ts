import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { ChronoComponent } from './chrono/chrono.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';

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

    UpdateComponent,

    ChronoComponent,

    ProfileEditorComponent,

    PipesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule // you add httpClient module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
