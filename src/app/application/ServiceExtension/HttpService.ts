import { Injectable } from '@angular/core';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private static instance: HttpClient;

  constructor() {
    if (!HttpService.instance) {
      const httpHandler = new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      });
      HttpService.instance = new HttpClient(httpHandler);
    }
  }

  static getInstance(): HttpClient {
    return HttpService.instance;
  }
}
