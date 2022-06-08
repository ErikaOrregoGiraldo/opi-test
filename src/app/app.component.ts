import { Component, OnInit } from '@angular/core';
import { DataTableService } from './service/data-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'opi-test';

  nameCheck: boolean = true;
  ageCheck: boolean = true;
  priceCheck: boolean = true;
  destinyCheck: boolean = true;
  dateCheck: boolean = true;
  idCheck: boolean = true;
  flightCheck: boolean = true;

  dataSource: any[] = [];

  displayedColumns: string[] = ['name', 'age', 'price', 'destiny', 'date', 'id', 'flight'];

  filterValue: string = "";

  constructor(private dataTableService: DataTableService){

  }

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable(){
    this.dataTableService.getTableData().subscribe((data) => {
      this.dataSource = data;
    });
  }
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
