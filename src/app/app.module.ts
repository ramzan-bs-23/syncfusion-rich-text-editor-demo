import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileManagerService, HtmlEditorService, ImageService, LinkService, QuickToolbarService, RichTextEditorModule, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, FileManagerService, QuickToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
