import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TreeViewComponent} from "./treeview-component/treeview.component";
import {NodeItemTemplateComponent} from "./treeview-component/node-item-template.component";
import {LeafItemTemplateComponent} from "./treeview-component/leaf-item-template.component";

@NgModule({
  declarations: [
    AppComponent, TreeViewComponent, NodeItemTemplateComponent, LeafItemTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
