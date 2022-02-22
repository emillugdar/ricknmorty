import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-schema-errors',
  templateUrl: './schema-errors.component.html',
  styleUrls: ['./schema-errors.component.css']
})

export class SchemaErrorsComponent implements OnChanges {

  @Input() errors: any;
  typeErrorsArray: string[] = [];
  errorsObject: { keyword: string, errorsString: string }[] = [];
  constructor() {}

  ngOnChanges() {
    this.showErrors();
  }

  showErrors() {
    this.typeErrorsArray = [];
    this.errorsObject = [];
    if (this.errors) {
      let result = this.errors.map((data: any) => data.keyword);
      this.typeErrorsArray = result.filter((value: string, index: number) => result.indexOf(value) === index);
      this.typeErrorsArray.forEach(item => {
        let filteredErrors = this.errors.filter(function (f: any) {
          return f.keyword == item
        });
        let errorsString = '';
        filteredErrors.forEach((error: any) => {
          errorsString = errorsString ? errorsString + `, ${error.dataPath} ${error.message}` : `${error.dataPath} ${error.message}`;
        });
        this.errorsObject.push({ keyword: item, errorsString: errorsString })
      })
    }
  }
}
