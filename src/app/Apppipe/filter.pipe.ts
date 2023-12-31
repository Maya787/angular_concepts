import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm: any): any {
    return value.filter(function (search: any) {
      return search.name.toLowerCase().indexOf(searchterm.toLowerCase()) > -1
    });
  }

}
4