import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";

import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";

import {CollectionComponent} from './collection/collection.component';
import {ListComponent, ItemComponent} from './list';
import {DetailComponent} from './detail';
import {EditComponent} from './edit/edit.component';

import {ContactService} from "./shared/contact.service";
import {FooterComponent} from './shared/footer.component';
import {PhonePipe} from './shared/phone.pipe';
import {BtnClickDirective} from './shared/btn-click.directive';
import {UtilService} from './shared/util.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CollectionComponent,
    EditComponent,
    FooterComponent,
    ItemComponent,
    PhonePipe,
    BtnClickDirective
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [ContactService, UtilService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
