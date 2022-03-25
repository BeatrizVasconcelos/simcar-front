import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(val:String): String {
    let newVal = val.replace("[", "");
    newVal = newVal.replace("]", "");
    // newVal = newVal.replaceAll("_", " ");
    // newVal = newVal.replaceAll("CAR", " ");
    
    return newVal
  }

}
