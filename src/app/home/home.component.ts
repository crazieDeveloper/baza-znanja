import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public dialog: MatDialog) {
    this.dialog.open(LoginComponent, { 
        disableClose: true, 
        width: '320px',
        height: '520px', 
        backdropClass: 'backdropBackground'
      });
  }

  ngOnInit(): void {
  }

}
