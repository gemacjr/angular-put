import  { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts } from '../classes/posts';

@Injectable()
export class FreeApiService {
    apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private httpClient: HttpClient){

    }
    getComments(): Observable<any> {
        return this.httpClient.get(this.apiUrl + `/posts/1/comments`);
    }

    getCommentsByParameters(userId: number): Observable<any> {
        let param1 = new HttpParams().set('userId', JSON.stringify(userId));
        return this.httpClient.get(this.apiUrl + `/posts`, {params: param1});

    }

    createPost(myPost: Posts): Observable<any> {
        return this.httpClient.post(this.apiUrl + `/posts`, myPost);
    }

    updatePost(id: number, updatePost: Posts): Observable<any> {
        return this.httpClient.put(this.apiUrl + `/posts/${id}`, updatePost);
    }





}