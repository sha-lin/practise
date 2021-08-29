import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29)
      return 'Just now';
      const intervals = [{name:'year',time:31536000},{name:'month',time:2592000},{name:'week',time:604800},{name:'day',time:86400},{name:'hour',time:3600},{name:'minute',time:60},{name:'second',time:1}]
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i].time);
        if (counter > 0)
        if (counter === 1) {
          return counter + ' ' + intervals[i].name + ' ago';
        } else {
          return counter + ' ' + intervals[i].name + 's ago';
        }
      }
    }
    return value;
  }

}
