import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(value: any, searchElement: any){

    if (!value) {
      return null;
    }
    if (!searchElement) {
      return value;
    }

    return value.filter((data: any) => {
      return data.profile.toLocaleLowerCase().includes(searchElement.toLocaleLowerCase());
    });
  }

}
