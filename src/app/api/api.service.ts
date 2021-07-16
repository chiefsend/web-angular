import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Attachment, Share } from "./models";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  getAllShares(): Observable<Share[]> {
    return this.http.get<Share[]>(`${this.apiUrl}/shares`);
  }

  createShare(share: Share): Observable<Share> {
    return this.http.post<Share>(`${this.apiUrl}/shares`, share);
  }

  getShare(id: string): Observable<Share> {
    return this.http.get<Share>(`${this.apiUrl}/share/${id}`);
  }

  closeShare(id: string): Observable<Share> {
    return this.http.post<Share>(`${this.apiUrl}/share/${id}`, null);
  }

  zipShare(id: string): Observable<any> {
    // FIXME return type
    return this.http.get(`${this.apiUrl}/share/${id}/zip`);
  }

  uploadAttachment(id: string, file: any): Observable<Attachment> {
    // FIXME type of param file
    return this.http.post<Attachment>(
      `${this.apiUrl}/share/${id}/attachments`,
      file
    );
  }

  downloadAttachment(id: string, att: string): Observable<any> {
    // FIXME return type
    return this.http.get(`${this.apiUrl}/share/${id}/attachment${att}`);
  }
}
