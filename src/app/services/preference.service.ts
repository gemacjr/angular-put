import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AccountPrefrenceDataList } from '../classes/AccountPreferenceDataList';

@Injectable()
export class PreferenceService {

  constructor(private httpClient: HttpClient) { }

  getPreferencesByParameters(userId: string, shipTos: string, transactionId: string): Observable<any> {
    let param1 = new HttpParams().set('userId', JSON.stringify(userId));
    let headers = new HttpHeaders();
    headers.append('Accept', '*/*');
    headers.append('transactionid', JSON.stringify(transactionId));
    return this.httpClient.get(`http://localhost:8080/v1/accountpreferences/${shipTos}`, { params: param1, headers: headers});
  }

  updatePreferences(myPrefernceList: AccountPrefrenceDataList){
    let headers = new HttpHeaders();
    headers.append('Accept', '*/*');
    headers.append('Content-Type', 'application/json');
    return this.httpClient.put(`http://localhost:8080/v1/accountpreferences`, myPrefernceList, {headers: headers});
  }
}
