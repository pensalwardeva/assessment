import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private modalService: NgbModal, formBuilder: FormBuilder) {
  
  }

  registrationForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl ('', Validators.required),
    Email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Search: new FormControl ('', Validators.required),    
    Country: new FormControl ('', Validators.required),
    Address: new FormControl ('', Validators.required),
    Age: new FormControl('', Validators.required)
  });

  onSubmit() {

  }

  originalData: any; // the original data before any changes were made
  data: any;
  register: any;
  formBuilder: any;

  ngOnInit() {
    // initialize originalData with the current data
    this.originalData = { /* some data */ };
  }

  cancel() {
    // reset the data to the originalData
    this.data = { ...this.originalData };
  }

  ProfileDP = "";
  age: number = 0;
  interest: string = "";
  firstName: string = "";
  LastName: string = "";
  Email: string = "";
  telno: any = "";
  State: string = "";
  Country: string = "";
  tags: string = "";
  address: string = "";
  value: number = 0;

  onFileSelected(event: any) {

  }

  openUserprofileModal() {
    const modalRef = this.modalService.open(UserprofileComponent);
    modalRef.componentInstance.name = 'Submit'
  }

  updateTextInput(e: any) {
    this.value = e.target.value;
  }
 
}



