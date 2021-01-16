import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({

  providedIn:"root"

})
export class CanteenService
{
  path:String="http://localhost:8585/Food_webAPI/";
  constructor(private http:HttpClient){

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getByUserName(Uname:String) : Observable<any> {
    return this.http.post(this.path +"Uname",Uname);
  }



}
