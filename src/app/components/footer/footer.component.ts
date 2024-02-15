import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieModalComponent } from '../cookie-modal/cookie-modal.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public dialog: MatDialog) { }

  openCookieModal(): void {
    const dialogRef = this.dialog.open(CookieModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The cookie management dialog was closed');
    });
  }

}

