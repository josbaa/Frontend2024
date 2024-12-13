import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class FinnkinoService {
  private url: string = 'https://www.finnkino.fi/xml/News/';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any[]> {
    return this.httpClient.get(this.url, { responseType: 'text' }).pipe(
      map((response: string) => {
        let newsData: any[] = [];
        parseString(
          response,
          { trim: true, explicitArray: false },
          (err: any, result: any) => {
            if (!err) {
              newsData = result.News.NewsArticle;
            }
          }
        );
        return newsData;
      })
    );
  }}