import { Injectable } from '@angular/core';
import { Istd } from '../models/std';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  constructor() { }


  stdArr: Array<Istd> = [
    {
      fname: "Irshad",
      lname: "shaikh",
      email: "irshad@123.gmail.com",
      contact: 8766737322,
      id: "123",
      profile: "Angular Developer"
    },
    {
      fname: "Rohan",
      lname: "Kulkarni",
      email: "rohan@124.gmail.com",
      contact: 9322670690,
      id: "193",
      profile: "FullStack Developer"
    },
    {
      fname: "Sunny",
      lname: "Yenpure",
      email: "sunny@420.gmail.com",
      contact: 9579478069,
      id: "193",
      profile: "SoftWare Developer"
    },
    {
      fname: "Balaji",
      lname: "Barde",
      email: "balaji@134.gmail.com",
      contact: 7666816697,
      id: "153",
      profile: "SoftWare Developer"
    }
  ]

   fetchStdData():Observable<Array<Istd>>{
    return of(this.stdArr)
   }
   RemoveStd(id:string):Observable<string>{
    let getindex = this.stdArr.findIndex(std=>std.id===id)
    this.stdArr.splice(getindex,1)
    return of(id)
   }
}
