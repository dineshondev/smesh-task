import {Component} from '@angular/core';


@Component({
  selector: 'fdp-portlet-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news: Array<NewsItem>;

  constructor() {
  }

  ngOnInit() {
    this.news = [
      {
        text: '<b>10/22/2020</b> - Added assets section, where you can collect all of your resources',
        link: ''
      },
      {
        text: '<b>11/13/2020</b> - You can now upload your tasks from excell',
        link: ''
      }
    ];
  }

}


export interface NewsItem {
  text: string;
  link: string;
}
