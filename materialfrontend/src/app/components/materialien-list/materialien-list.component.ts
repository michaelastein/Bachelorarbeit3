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
  @Input() materialien?: Materialien[]

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
  }



  retrieveMaterialien(): void {
    this.materialienService.getAll()
      .subscribe(
        data => {
          this.materialien = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  @Input()
  setMaterial(materialien: Materialien[]): void {
    this.materialien = materialien;
  }

}
