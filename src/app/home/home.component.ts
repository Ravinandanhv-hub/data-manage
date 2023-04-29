import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'test';
  sel=4;
  post:any;
  arr:any=[];
  form:FormGroup;
  ProofType=['PAN','Driving License','Aadhar'];
  view:boolean=false;
  showLoader:boolean=false;
  // form1: FormGroup
  // typeForm=this.fb.group({
  //   selectedType:[null]
  // })
  constructor(private service:AppService, public router:Router,
    private fb:FormBuilder, private route:ActivatedRoute, private ts:ToastrService){
      this.form=this.fb.group({
        name:[null,[Validators.required]],
        age:[null,[Validators.required, Validators.min(1), Validators.max(150)]],
        email:[null, [Validators.required,
          Validators.email
        ]],
        gender:[null, [Validators.required]],
        proofType:[this.ProofType[0], [Validators.required]],
        proofId:[null]
      })
    }

    ngOnInit() {
      console.log(this.route.snapshot);
    }
  // getUsers(){
  //   this.service.getUsers().subscribe(res=>{
  //     this.post=res;
  //     this.post=this.post.map((ele: any) => {
  //       ele.checked=false;
  //       return ele;
  //     })
  //     console.log(this.post)
  //   })
  // }

  createUser(){
    this.showLoader=true
    console.log("Submitted",this.form);
    this.service.post(this.form.value).subscribe(res=>{
      this.showLoader=false;
      this.ts.success("Added Data Successfully")
      this.form.reset();
      // console.log(res)
    },err=>{
      this.ts.error(`${err}, try again`)
      this.showLoader=false;
    })
  }

  // update(){
    // this.service.update(this.editForm.value).subscribe(res=>{
    //   console.log(res);
    //   this.getUsers();
    //   this.showEditPanel=!this.showEditPanel
    // })
  // }

  // onChange(event:any, po:any){
  //   if(event.target.checked){
  //     this.arr.push(po._id);
  //   }else{
  //     for(var i=0 ; i < this.post.length; i++) {
  //       if(this.arr[i] == po._id) {
  //         this.arr.splice(i,1);
  //      }
  //    }
  //   // this.arr = this.arr.filter((item: any) => item !== po.name);
  //   }
  //   console.log(this.arr)
  // }

  // bEdit(){
  //   this.service.arr=this.arr;
  //   this.router.navigate(['bulk-update']);
  // }
  // // edit(po:any){
  // //   this.editForm.reset({
  // //     name: po.name,
  // //     age: po.age,
  // //     email: po.email,
  // //     gender:po.gender,
  // //     _id:po._id
  // //   })
  // //   // this.editForm.patchValue({ radio: po.gender });
  // //   this.showEditPanel=!this.showEditPanel
  // // }

  // selectAll(event:any){
  //   if(event.target.checked){
  //     this.post = this.post.map((item: { checked: boolean; _id: any; }) => {
  //       item.checked = true;
  //       if (!this.arr.includes(item._id)) {
  //         this.arr.push(item._id);
  //       }
  //       return item;
  //     });      
  //   }else{
  //     this.post.map((ele: { checked: any; }) => ele.checked=false);
  //     this.arr=[];
  //   }
  //   console.log(this.arr)
  // }

  // deleteAll(){
  //   this.service.del(this.arr).subscribe(res=>{
  //     console.log(res)
  //     this.arr=[];
  //     this.getUsers();
  //   })
  // }

  // delete(_id:any){
  //   _id=[_id];
  //   this.service.del(_id).subscribe(res=>{
  //     console.log(res)
  //     this.getUsers();
  //   })
  // }

  // view(po:any, mode:any){
  //   if(mode='edit'){
  //     this.router.navigate(['view',po._id]);
  //   }else{
  //     console.log(this.router.parseUrl('/view'))
  //     this.router.navigate(['view',po._id]);
  //   }
  // }
}
