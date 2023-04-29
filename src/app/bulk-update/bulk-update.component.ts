import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bulk-update',
  templateUrl: './bulk-update.component.html',
  styleUrls: ['./bulk-update.component.scss']
})
export class BulkUpdateComponent implements OnInit {
  arr;
  age=100;
  upForm:FormGroup;
  result:any;

  constructor(private service:AppService, private fb:FormBuilder,
    private location:Location) { 
    this.arr=this.service.arr;
    this.upForm=this.fb.group({
      name:[null],
      age:[null,[Validators.min(1), Validators.max(150)]],
      email:[null, [Validators.email]],
      gender:[null]
    })
  }

  ngOnInit(): void {
    console.log(this.arr)
  }

  bUpdate(){
    const user=this.upForm.value
    const nonNullElements:any={};
    Object.keys(user).forEach(key => {
      if(user[key] !== null) {
        nonNullElements[key] = user[key];
      }
    });
    console.log(nonNullElements)
    this.service.update(nonNullElements,'bUpdate').subscribe(res=>{
      this.result=res
      if(this.result?.modifiedCount>0){
        this.location.back();
      }else{
        console.log(res)
      }
    })
  }
}
