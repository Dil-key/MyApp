import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css']
})
export class FormCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typedName = '';
  typedAddress = '';
  selectedGender = '';
  Gender = ["Masculine", "Feminine"];
  finaltypedName = '';
  finaltypedAddress = '';
  finalselectedGender = '';
  showDetails = false;
  additionAsyncResult = 0;
  final = 0;
  res1 = 0;
  res2 = 0;

  onClick() {
    if (this.typedName == '' || this.typedAddress == '' || this.selectedGender == '') {
      Swal.fire("Please fill all fields")
      Swal.fire({
        icon: 'error',
        title: 'Please fill all fields'
      })
    } else {
      this.finaltypedName = this.typedName;
      this.finaltypedAddress = this.typedAddress;
      this.finalselectedGender = this.selectedGender;
      this.showDetails = true;
      this.typedName = '';
      this.typedAddress = '';
      this.selectedGender = '';
      Swal.fire("The details included are as follows")
      Swal.fire({
        icon: 'success',
        title: 'Successfully submitted',
        text: 'Your entered details display in the below'
      })
    }
  }


  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async test() {
    const result1 = <number>await this.resolveAfter2Seconds(3);
    this.res1 = result1;
    const result2 = <number>await this.resolveAfter2Seconds(2);
    this.res2 = result2;

    this.additionAsyncResult = result1 + result2;
    console.log(`async result: ${this.additionAsyncResult}`);
    this.final = this.additionAsyncResult;
  }

  async test1() {
    await setTimeout(() => {
      console.log("this is first");
    }, 2);
    await setTimeout(() => {
      console.log("this is second");
    }, 1);

  }

}
