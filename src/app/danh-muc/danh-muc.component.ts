import { Component, OnInit } from '@angular/core';
import {DanhMucService} from '../danh-muc.service';
import {publish} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {

  categories: any[];
  formGroup = new FormGroup({
    categoryId: new FormControl()
  });

  constructor(private categoryService: DanhMucService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(result => {
      this.categories = result;
    });
  }

  public delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(result => { // status: 200
      alert('Đã xoa thành công!');
      this.categoryService.getCategory().subscribe(result1 => {
        this.categories = result1;
      });
    }, error => {
      alert('Không xoa được!');
    });
  }

  public update(id: number) {
    this.categoryService.updateCategory(id).subscribe(result => {
      this.categories = result;
      console.log(id);
    });
  }
  public search() {
    const id = this.formGroup.get('categoryId').value;
    this.categoryService.updateCategory(id).subscribe(result => { // status: 200
      alert('Đã tim thành công!');
      this.categoryService.getCategory().subscribe(result1 => {
        this.categories = [];
        this.categories.push(result);
        console.log(id);
      });
    }, error => {
      alert('Không tim được!');
    });
  }
}
