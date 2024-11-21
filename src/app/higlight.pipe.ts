import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'higlight'
})
export class HiglightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
