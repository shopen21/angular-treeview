import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeViewComponent } from "app/treeview-component/treeview.component";
import { TreeItemComponent } from "app/treeview-component/tree-item.component";

@NgModule({
  declarations: [
    AppComponent, TreeViewComponent, TreeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
