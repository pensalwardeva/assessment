import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  data: any;

  registrationForm: FormGroup | any;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private api: ApiService) {

  }




  onSubmit() {

  }

  originalData: any; // the original data before any changes were madess
  register: any;

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      State: new FormControl('', Validators.required),
      Country: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Age: new FormControl('', Validators.required),
      ProfileDP: new FormControl ('',Validators.required),
    });
  }

  cancel() {
    // reset the data to the originalData
    this.data = { ...this.originalData };
  }

  ProfileDP = "";
  Age: number = 0;
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

  onFileSelected(photo:any) {
    this.ProfileDP = photo.target.files[0].name;
  }

  openUserprofileModal(data: datamodel) {
    const modalRef = this.modalService.open(UserprofileComponent);
    modalRef.componentInstance.name = 'Submit';
    this.api.RegisterUser(data).subscribe(() => {

    })
  }

  close(){
   this.modalService.dismissAll(UserprofileComponent);
  }

  valueChanged(e :any) {
    this.Age = e.target.value;
  }

}



