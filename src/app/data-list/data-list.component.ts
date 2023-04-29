import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @ViewChild('check') check!: ElementRef;
  arr:any=[];
  post:any;
  // i=this.service.i;

  constructor(private service:AppService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
    // console.log(this.post)
    // console.log(this.i)
    // console.log(document.querySelectorAll('check'))
  }

  getUsers(){
    this.service.getUsers().subscribe(res=>{
      this.post=res;
      this.post=this.post.map((ele: any) => {
        ele.checked=false;
        return ele;
      })
      console.log(this.post)

    })
  }

  // getUsers(){
  //   this.service.getUsers();
  //   // this.post=this.service.datas;
  //   // this.post=this.post.map((ele: any) => {
  //   //   ele.checked=false;
  //   //   return ele;
  //   // })
  //   console.log(this.service.datas)
  // }

  onChange(event:any, po:any){
    if(event.target.checked){
      this.arr.push(po._id);
    }else{
      for(var i=0 ; i < this.post.length; i++) {
        if(this.arr[i] == po._id) {
          this.arr.splice(i,1);
       }
     }
    }
    console.log(this.arr)
  }

  bEdit(){
    this.service.arr=this.arr;
    this.router.navigate(['bulk-update']);
  }

  selectAll(event:any){
    if(event.target.checked){
      this.post = this.post.map((item: { checked: boolean; _id: any; }) => {
        item.checked = true;
        if (!this.arr.includes(item._id)) {
          this.arr.push(item._id);
        }
        return item;
      });      
    }else{
      this.post.map((ele: { checked: any; }) => ele.checked=false);
      this.arr=[];
    }
    console.log(this.arr)
  }

  deleteAll(){
    this.service.del(this.arr).subscribe(res=>{
      this.arr=[];
      this.getUsers();
    })
  }

  delete(_id:any){
    _id=[_id];
    this.service.del(_id).subscribe(res=>{
      this.getUsers();
    })
  }

  view(po:any, mode:any){
    if(mode='edit'){
      this.router.navigate(['view',po._id]);
    }else{
      console.log(this.router.parseUrl('/view'))
      this.router.navigate(['view',po._id]);
    }
  }

}
