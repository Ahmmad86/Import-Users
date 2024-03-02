import { Component,OnInit, ViewChild,ElementRef, input,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input'
import { MatSortModule,MatSort } from '@angular/material/sort';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list'

export interface PeriodicElement {
  Selected:boolean;
  Username: string;
  Firstname: string;
  Lastname: string;
  Resuorce: string;
  Department:string;
  Status:boolean;
}
export interface file{
  name :string,
  size:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Selected: true, Username: 'Jane Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'LDAP',Department:'HR',Status:true},
  {Selected: true, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'File',Department:'Managers',Status:false},
  {Selected: true, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'Azure',Department:'HR',Status:false},
  {Selected: true, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'Azure',Department:'CEO',Status:false},
  {Selected: true, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'File',Department:'marketing',Status:false},
  {Selected: false, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'LDAP',Department:'HR',Status:false},
  {Selected: false, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'File',Department:'HR',Status:false},
  {Selected: false, Username: 'John Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'LDAP',Department:'HR',Status:false},
  {Selected: false, Username: 'Jane Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'LDAP',Department:'HR',Status:false},
  {Selected: false, Username: 'Jane Doe', Firstname: 'John', Lastname: 'Doe',Resuorce:'LDAP',Department:'HR',Status:false},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatListModule,MatRadioModule,MatGridListModule,MatCardModule,MatIconModule,MatFormFieldModule,CommonModule,RouterOutlet,MatButtonModule, MatTableModule,MatTabsModule,MatDividerModule,MatCheckboxModule,FormsModule,MatFormField,MatInputModule,MatSortModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  files:file[]=[
    {name:'UserFiles.csv',size:'1MB'},
    {name:'UserFiles.xlsx',size:'20MB'},
    {name:'UserFiles.xlsx',size:'20MB'},
    {name:'UserFiles.csv',size:'1MB'},
    {name:'UserFiles.xlsx',size:'20MB'},
    {name:'UserFiles.csv',size:'20MB'},
  ]
  @ViewChild('inputfilter',{static:true}) nameInputRef:ElementRef;
  @ViewChild(MatSort) sort:MatSort= new MatSort;
  constructor(){
    this.nameInputRef= new ElementRef(input);
  }
  ngAfterViewInit(): void {
  console.log(this.nameInputRef.nativeElement.value)
}  

  title = 'demo';
  displayedColumns: string[] = ['Selected', 'Username', 'Firstname', 'Lastname','Resuorce','Department','Status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;
clearFilter(){
  this.nameInputRef.nativeElement.value=''
  
}
  applyfilter()
  {
    console.log(1)
   // this.dataSource.filter= this.nameInputRef.nativeElement.value.trim().toLocaleLowerCase();
  }
}
