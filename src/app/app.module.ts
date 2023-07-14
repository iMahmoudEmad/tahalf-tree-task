import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { HttpClientModule } from '@angular/common/http';
import { ChildDetailsComponent } from './components/child-details/child-details.component';

@NgModule({
  declarations: [AppComponent, ChildDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TreeSelectModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
