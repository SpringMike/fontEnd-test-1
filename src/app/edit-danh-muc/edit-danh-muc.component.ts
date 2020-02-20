import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DanhMucService} from '../danh-muc.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-danh-muc',
  templateUrl: './edit-danh-muc.component.html',
  styleUrls: ['./edit-danh-muc.component.css']
})
export class EditDanhMucComponent implements OnInit {
  category: any;
  id: number;

  formGroup = new FormGroup({
    categoryfirstName: new FormControl(),
    categorylastName: new FormControl(),
    categoryId: new FormControl()
  });

  constructor(private categoryService: DanhMucService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  edit() {
    const firstName = this.formGroup.get('categoryfirstName').value;
    const lastName = this.formGroup.get('categorylastName').value;
    this.categoryService.editCategory(firstName, lastName, this.id ).subscribe( result => { // status: 200
      alert('Đã sua thành công!');
    }, error => {
      alert('Không sua được!');
    });
  }



}
