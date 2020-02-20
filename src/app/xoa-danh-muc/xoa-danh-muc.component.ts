import { Component, OnInit } from '@angular/core';
import {DanhMucService} from '../danh-muc.service';

@Component({
  selector: 'app-xoa-danh-muc',
  templateUrl: './xoa-danh-muc.component.html',
  styleUrls: ['./xoa-danh-muc.component.css']
})
export class XoaDanhMucComponent implements OnInit {


  constructor(private categoryService: DanhMucService) { }

  ngOnInit(): void {
  }


}
