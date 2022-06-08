import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opi-test';

  nameCheck: boolean = true;
  ageCheck: boolean = true;
  priceCheck: boolean = true;
  destinyCheck: boolean = true;
  dateCheck: boolean = true;
  idCheck: boolean = true;
  flightCheck: boolean = true;


  dataSource = [
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
  ]

  displayedColumns: string[] = ['name', 'age', 'price', 'destiny', 'date', 'id', 'flight']

  filterValue: string = ""
  filterChange() {
    this.dataSource = this.dataSource.filter((item) => {
      if(this.filterValue === "2"){
        return item.age >= 30
      };

      if(this.filterValue === "3"){
        return item.age < 30
      }

      if(this.filterValue === "4"){
        return item.price <= 10
      }
      if(this.filterValue === "5"){
        return item.price > 10
      }

      if(this.filterValue === "6"){
        return item.destiny === 'Arabia'
      }

      return this.dataSource
    })
  }

  click: boolean = false;

   onClickFilter() {
     this.click = !this.click
     console.log(this.click);
   }


   showOrHideName() {
     if (this.nameCheck) {
      // borrar
      const indice = this.displayedColumns.findIndex((column) => column === 'name');
      this.displayedColumns.splice(indice, 1);
     } else {
       this.displayedColumns.unshift('name');
     }
   }

   showOrHideAge() {
    if (this.ageCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'age');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('age');
    }
  }

  showOrHidePrice() {
    if (this.priceCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'price');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('price');
    }
  }

  showOrHideDestiny() {
    if (this.destinyCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'destiny');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('destiny');
    }
  }

  showOrHideFlight() {
    if (this.flightCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'flight');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('flight');
    }
  }

  showOrHideId() {
    if (this.idCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'id');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('id');
    }
  }

  showOrHideDate() {
    if (this.dateCheck) {
     // borrar
     const indice = this.displayedColumns.findIndex((column) => column === 'date');
     this.displayedColumns.splice(indice, 1);
    } else {
      this.displayedColumns.push('date');
    }
  }
}
