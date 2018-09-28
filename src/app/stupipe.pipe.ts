import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stupipe'
})
export class StupipePipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any {
    if(!data||!searchTerm){
    return data;
    }
    else
    {
    return data.filter(x=>x.FirstName.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
    }

}
