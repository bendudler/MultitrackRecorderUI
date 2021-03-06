import {Injectable} from '@angular/core';
import {Channel} from '../types/channel';
import {MTRService} from '../../shared/service/mtr-service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChannelService extends MTRService<Channel> {
  constructor(
    http: HttpClient,
  ) {
    super(http, '/channels');
  }

  getChannels(params?: HttpParams) {
    return this.getAll(params);
  }

  createChannel(object, params?: HttpParams) {
    return this.create(object, params);
  }

  updateChannel(object, params?: HttpParams) {
    return this.update(object, params);
  }

  deleteChannel(id, params?: HttpParams) {
    return this.delete(id, params);
  }
}
