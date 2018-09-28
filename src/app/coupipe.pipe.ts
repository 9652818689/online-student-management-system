import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coupipe'
})
export class CoupipePipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any {
    if(!data||!searchTerm){
    return data;
    }
    else
    {
    return data.filter(x=>x.Branch.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
    }

}
