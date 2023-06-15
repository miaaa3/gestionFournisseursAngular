import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  projectCount1: number = 0;
  projectCountStop1: any;

  counter1(): void {
    if (this.projectCount1 < 10) {
      this.projectCount1 = 0;
      this.projectCountStop1 = null;

      this.projectCountStop1 = setInterval(() => {
        this.projectCount1++;
        if (this.projectCount1 >= 10) {
          this.projectCount1 = 10;
          clearInterval(this.projectCountStop1);
        }
      }, 200);
    }
  }

  projectCount2: number = 0;
  projectCountStop2: any;

  counter2(): void {
    if (this.projectCount2 < 30) {
      this.projectCount2 = 0;
      this.projectCountStop2 = null;

      this.projectCountStop2 = setInterval(() => {
        this.projectCount2++;
        if (this.projectCount2 >= 30) {
          this.projectCount2 = 30;
          clearInterval(this.projectCountStop2);
        }
      }, 100);
    }
  }

  projectCount3: number = 0;
  projectCountStop3: any;

  counter3(): void {
    if (this.projectCount3 < 20) {
      this.projectCount3 = 0;
      this.projectCountStop3 = null;

      this.projectCountStop3 = setInterval(() => {
        this.projectCount3++;
        if (this.projectCount3 >= 20) {
          this.projectCount3 = 20;
          clearInterval(this.projectCountStop3);
        }
      }, 200);
    }
  }
}
