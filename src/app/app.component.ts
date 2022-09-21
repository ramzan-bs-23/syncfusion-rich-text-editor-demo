import { Component, ViewChild } from '@angular/core';
import { BeforeUploadEventArgs, SelectedEventArgs, UploadingEventArgs } from '@syncfusion/ej2-angular-inputs';
import { ImageSettingsModel, RichTextEditorComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';

type Config = {
  autoSave: boolean,
  saveIntervalInMillisecond: number,
  tools: ToolbarSettingsModel,
  image: ImageSettingsModel,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: Config = {
    autoSave: true,
    saveIntervalInMillisecond: 3000,
    tools: {
      items: ['Bold', 'Italic', 'Underline', 'OrderedList', 'UnorderedList', 'Image', 'Print']
    },
    image: {
      allowedTypes: ['.jpeg', '.jpg', '.png'],
      display: 'block',
      // saveFormat: 'Blob',
      path: 'http://localhost:4200/',
      saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/save',
      removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/remove'
    },
  }

  @ViewChild('editor') public editor: RichTextEditorComponent | undefined;

  constructor() { }

  public onChanges() {
    console.log(this.editor?.value);

    const saving = document.getElementById('saving');
    const saved = document.getElementById('saved');

    if (saving) saving.style.display = 'block';
    if (saved) saved.style.display = 'none';

    setTimeout(() => {
      if (saving) saving.style.display = 'none';
      if (saved) saved.style.display = 'block';
    }, 3000);
  }

  onImageSelected($event: SelectedEventArgs) {
    console.log('onImageSelected:', $event);
  }

  onBeforeImageUpload($event: BeforeUploadEventArgs) {
    console.log('onBeforeImageUpload:', $event);
  }

  public onImageUploading = ($event: UploadingEventArgs) => {
    console.log('onImageUploading:', $event.fileData);
  }

  onImageUploadSuccess($event: Object) {
    console.log('onImageUploadSuccess:', $event);
  }
}
