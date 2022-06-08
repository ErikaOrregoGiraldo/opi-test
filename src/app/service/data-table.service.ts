import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) {

   }
   getTableData():Observable<any>{
    return new Observable((obs)=>{
      obs.next([
        {
           id:"1",
           name:"Michael Michael",
           age:35,
           price:5.00,
           destiny:"Dubai",
           date:"2019-06-17 15:56:23",
           flight: "201 avianca"
        },
        {
          id:"2",
          name:"Michael Michael",
          age:35,
          price:10.00,
          destiny:"Cap cana",
          date:"2016-06-17 15:56:23",
          flight: "202 avianca"
        },
        {
           id:"3",
           name:"Tobias Funke",
           age:20,
           price:15.00,
           destiny:"Arabia",
           date:"2018-08-11 16:25:36",
           flight: "100 vivaair"

        },
        {
           id:"4",
           name:"George Edwards",
           age:50,
           price:8.00,
           destiny:"Arabia",
           date:"2018-08-11 16:25:39",
           flight: "100 vivaair"

        },
        {
           id:"5",
           name:"George Edwards",
           age:50,
           price:30.00,
           destiny:"Brazil",
           date:"2019-06-17 15:58:43",
           flight: "300 vivaair"

        },
        {
           id:"6",
           name:"Rachel Howell",
           age:46,
           price:3.00,
           destiny:"New York",
           date:"2018-08-11 16:25:45",
           flight: "601 vivaair"

        }
      ]);
      obs.complete();
    });
  };
}
