import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { QuerySelector } from 'ag-grid-community';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ag-grid-view',
  templateUrl: './ag-grid-view.component.html',
  styleUrls: ['./ag-grid-view.component.scss']
})
export class AgGridViewComponent implements OnInit {
  @ViewChild('agGrid', { static: false })
  agGrid!: AgGridAngular;
  post: any;

  constructor(private service:AppService, private router:Router) { }
  columnDefs = [
    {headerName: 'Name', checkboxSelection:true, headerCheckboxSelection: true, field: 'name', sortable: true, filter:true},
    {headerName: 'Email', field: 'email', sortable: true, filter:true},
    {headerName: 'Gender', field: 'gender', sortable: true, filter:true},
    {headerName: 'Age', field: 'age', sortable: true, filter:true},
    {headerName: 'ProofId', field: 'proofId', sortable: true, filter:true},
    {headerName: 'ProofType', field: 'proofType', sortable: true, filter:true}
  ];

  ngOnInit(): void {
    this.getUsers()
    // var btn= document.createElement('button')
    // btn.setAttribute('id','btn')
    // btn.innerHTML='click this'
    // btn.addEventListener('click',this.create)
    // document.body.appendChild(btn)
    // var check=document.createElement('input')
    // check.setAttribute('type','checkbox')
    // check.setAttribute('id','ch')
    // document.body.appendChild(check)
  }

  getUsers(){
    this.service.getUsers().subscribe(res=>{
      this.post=res
    })
  }

  filterChange(){
    // if(this.agGrid.api.getFilterModel()){
    //   this.agGrid.api.showLoadingOverlay()
    //   console.log(this.agGrid.api.getFilterModel())
    // }
    // // setTimeout({this.agGrid.api.hideOveraly()},500)
  }

  // onGridReady(){
  //   getRows:dataSource{

  //   }
  // }

  open(event:any){
    console.log(event)
    this.router.navigate(['view',event.data._id]);
  }

  create(){
    var element = document.createElement('p');
    element.innerHTML='clicked';
    console.log(element)
    document.body.appendChild(element)
    console.log(document.getElementById('ch'));
    var status=(document.getElementById('ch') as HTMLInputElement).checked;
    (document.getElementById('ch') as HTMLInputElement).checked=!status;
  }
}

