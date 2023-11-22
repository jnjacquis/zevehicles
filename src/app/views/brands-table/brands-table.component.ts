import { Component, computed, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';

import { Brand } from '../../domain/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands-table',
  templateUrl: './brands-table.component.html',
  styleUrls: ['./brands-table.component.css']
})
export class BrandsTableComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Brand>;

  displayedColumns: string[] = ['logo', 'name'];
  dsBrands: MatTableDataSource<Brand> = new MatTableDataSource();
  dsBrands$: Observable<MatTableDataSource<Brand>> = this.service.brands$.pipe(
    map(brands => {
      this.dsBrands.data = brands;
      return this.dsBrands;
    })
  );
  errorMessage = '';

  constructor(private service: BrandService) { }

  /*ngAfterViewInit() {
    if (this.service.brands$ != undefined) {
      this.service.brands$.subscribe(data => {
        this.dsBrands.data = data;
      });
    }
  }*/

  filterByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dsBrands.filter = filterValue.trim().toLowerCase();
  }
}
