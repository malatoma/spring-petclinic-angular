import { Pipe, PipeTransform } from '@angular/core';
import { Owner } from './owners/owner';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if(sName===""){
      return value;
    }
  
    const ownersArray:any[]=[];
    for(let i=0; i<=value.length;i++){
      let testOwner:string=value[i].firstName;
      if(testOwner.startsWith(sName)){
        ownersArray.push(value[i]);
      }
  
    }
    return ownersArray;
  }

  }
