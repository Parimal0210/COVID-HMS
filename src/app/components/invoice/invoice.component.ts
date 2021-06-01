import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';
import { Bill } from 'src/app/bill';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  bill = new Bill();
  text : string;
  minDate:Date;
  constructor(private _service: RegistrationService,public nav: NavbarService ) { }

  ngOnInit(): void {
    
    this.bill.patientId = +sessionStorage.getItem('id');
   
   this.nav.showAdmin();
   
  }
  
  printInfo(){
    console.log("In printinfo");
    window.print();
  }

  saveBill(){
    this._service.saveBillFromRemote(this.bill).subscribe(
      data=>{
        this.text = "Invoice Response Saved Successfully !"
      },
      error=>{
        this.text = "Invoice Response Failed to Save !"
        
      }
    )
  }

}
