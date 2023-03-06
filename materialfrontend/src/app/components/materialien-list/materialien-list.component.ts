import { Component, Input } from '@angular/core';
import { Materialien } from 'src/app/models/materialien.model';
import { MaterialienService } from 'src/app/services/materialien.service';
import {  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-materialien-list',
  templateUrl: './materialien-list.component.html',
  styleUrls: ['./materialien-list.component.css']
})
export class MaterialienListComponent implements OnChanges {
  //materialien?: Materialien[];
  currentMaterial?: Materialien;
  currentIndex = -1;
  name = '';
  Ausgabe: any;
  @Input() materialien?: Materialien[];

  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [5, 10, 15, 20, 50, 100];



  constructor(private materialienService: MaterialienService) { }

  ngOnInit(): void {
   // this.retrieveMaterialien();
  }

  ngOnChanges(changes: SimpleChanges) {

    for (let property in changes) {
      if (property === 'materialien') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);

      }
    }
    this.currentMaterial = undefined;
    this.currentIndex = -1;
    this.page = 1;
    this.count = 0;
    this.materialien = this.materialien;

  }



  retrieveMaterialien(): void {
    this.materialienService.getAll()
      .subscribe(
        (response) => {
          this.materialien = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  onTableDataChange(event: any) {
    this.page = event;
    //this.retrieveMaterialien();
    this.materialien = this.materialien;

  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.materialien = this.materialien;
    //this.retrieveMaterialien();
  }

  refreshList(): void {
    this.retrieveMaterialien();
    this.currentMaterial = undefined;
    this.currentIndex = -1;
  }

  setActiveMaterial(material: Materialien, index: number): void {
    this.currentMaterial = material;
    this.currentIndex = index;
  }

  removeAllMaterialien(): void {
    this.materialienService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.materialienService.findByName(this.name)
      .subscribe(
        data => {
          this.materialien = data;
       
          this.page = 1;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  @Input()
  setMaterial(materialien: Materialien[]): void {
    this.materialien = materialien;
    this.page = 1;
  }




}
