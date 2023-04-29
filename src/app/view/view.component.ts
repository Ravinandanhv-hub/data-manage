import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  userId=this.activatedRoute.snapshot.params['id']
  userDetails:any={};
  edit=false;
  editForm:FormGroup;
  ProofType=['PAN','Driving License','Aadhar'];
  constructor(private activatedRoute:ActivatedRoute, private service:AppService,
    private fb:FormBuilder, public location:Location) {
      this.editForm=this.fb.group({
        name:['',[Validators.required]],
        age:[0,[Validators.required, Validators.min(1), Validators.max(150)]],
        email:['', [Validators.required,Validators.email]],
        gender:['', [Validators.required]],
        proofType:[''],
        proofId:[''],
        _id:[this.userId]
      })
  }

  ngOnInit(): void {
    this.service.getUser(this.userId).subscribe(res=>{
      if(res){
        console.log(res)
        this.userDetails=res;
        this.editForm=this.fb.group({
          name:[this.userDetails.name,[Validators.required]],
          age:[this.userDetails.age,[Validators.required, Validators.min(1), Validators.max(150)]],
          email:[this.userDetails.email, [Validators.required,Validators.email]],
          gender:[this.userDetails.gender, [Validators.required]],
          proofType:[this.userDetails.proofType],
          proofId:[this.userDetails.proofId],
          _id:[this.userId]
        })
      }
    })
  }


  update(){
    console.log(this.editForm.value)
    this.service.update(this.editForm.value,'update').subscribe(res=>{
      console.log(res);
    })
  }

}
