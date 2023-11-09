import { Component, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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


  constructor(private service: BrandService) { }

}
