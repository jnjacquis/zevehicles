import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Brand } from '../../domain/brand';
import * as BrandsActions from '../../stores/brands/brands.actions';
import { brandsSelector, errorBrandsSelector, isLoadingBrandsSelector } from 'src/app/stores/brands/brands.selectors';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-brands-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatTable],
  providers: [MatTableDataSource],
  templateUrl: './brands-table.component.html',
  styleUrls: ['./brands-table.component.scss']
})
export class BrandsTableComponent {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Brand>;

  displayedColumns: string[] = ['logo', 'name'];
  dsBrands: MatTableDataSource<Brand> = new MatTableDataSource();
  dsBrands$: Observable<MatTableDataSource<Brand>>;

  errorMessage = '';
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  brands$: Observable<Brand[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingBrandsSelector));
    this.error$ = this.store.pipe(select(errorBrandsSelector));
    this.brands$ = this.store.pipe(select(brandsSelector));
    this.dsBrands$ = this.brands$.pipe(
      map(brands => {
        console.log('Brands: ', brands);        this.dsBrands.data = brands;
        return this.dsBrands;
      })
    );
  }

  ngOnInit() {
    this.dsBrands.filterPredicate = function (data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    this.store.dispatch(BrandsActions.getAllBrands());
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dsBrands.filter = filterValue;
  }
}
