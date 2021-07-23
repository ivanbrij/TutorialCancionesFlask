import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Cancion } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private backUrl: string = "api"

  constructor(private http: HttpClient) { }

  getAlbumes(usuario: number, token: string): Observable<Album[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.get<Album[]>(`${this.backUrl}/usuario/${usuario}/albumes`, {headers: headers})
  }

  getCancionesAlbum(idAlbum: number, token: string): Observable<Cancion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`       
    })
    return this.http.get<Cancion[]>(`${this.backUrl}/album/${idAlbum}/canciones`, {headers: headers})
  }

}