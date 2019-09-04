import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionsFilter'
})
export class TransactionsFilterPipe implements PipeTransform {

  transform(items: any[], v: string): any {
    if (!items) return [];
    if (!v || v.length === 0) return items;
    return items.filter(it => it.length > 5 && (it[0].indexOf(v) >= 0 || it[2].indexOf(v) >= 0 || it[5].toLocaleLowerCase().indexOf(v) >= 0));
  }

}
