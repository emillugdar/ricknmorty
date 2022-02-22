import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { empleadosSchema, developer, devops } from './schemas/developers.schema';
import { developerTemplate, devOpsTemplate } from './person.template';

@Component({
  selector: 'app-jsoneditor',
  templateUrl: './jsoneditor.component.html',
  styleUrls: ['./jsoneditor.component.css']
})

export class JsoneditorComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public initialData: any;
  public visibleData: any;
  public errors: any;
  public typesErrors: string = '';
  public requirementsErrors: string = '';
  public newJson!: string;
  @ViewChild("editor") editor!: JsonEditorComponent;
  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.schema = empleadosSchema;
    (<any>this.editorOptions).schemaRefs = { developer, devops };
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'tree';
    // this.editorOptions.onError = this.onError;
    // this.editorOptions.onModeChange = this.onModeChange;
    this.editorOptions.onValidationError = this.onValidationError;
    this.editorOptions.enableSort = false;
    this.editorOptions.enableTransform = false;
    (<any>this.editorOptions).templates = [developerTemplate, devOpsTemplate];
    this.initialData = {
      'empleados': [
        {
          "id": 1,
          "nombre": "Alexis",
          "tipo": "developer",
          "framework": "Lumen"
        },
        {
          "id": 2,
          "nombre": "CristianQ",
          "tipo": "developer",
          "framework": "Laravel"
        }
      ]
    }
    this.visibleData = this.initialData;
  }

  ngOnInit(): void {
    // this.makeValidation();
  }

  onChange(d: Event) {
    this.makeValidation();
    this.visibleData = d;
  }

  makeValidation() {
    const editorJson = this.editor.getEditor();
    editorJson.validate();
    this.errors = editorJson.validateSchema.errors;
  }

  save() {
    this.newJson = this.visibleData;
  }

  onValidationError(errors: any) {
    //Triggered after .validate() function founds an error
    errors.forEach((error: any) => {
      // console.log(error);
      switch (error.type) {
        case 'validation': // schema validation error
          break;
        case 'customValidation': // custom validation error
          break;
        case 'error':  // json parse error
          console.log(error.message);
          break;
      }
    });
  }

  //FUNCIONES SIN USAR

  onError(error: any) {
    //Triggered when user changes mode and has an error in the json format (Tree,Code,Text,View)
    console.log(error)
  }

  onModeChange(newMode: any, Oldmode: any) {
    //Triggered when user changes mode
    console.log(Oldmode, newMode);
  }

  setLang(lang: string) {
    this.editorOptions.language = lang; // force a specific language, ie. pt-BR
    this.editor.setOptions(this.editorOptions);
  }
}
