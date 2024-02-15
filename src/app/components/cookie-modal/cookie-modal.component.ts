import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cookie-modal',
  templateUrl: './cookie-modal.component.html',
  styleUrl: './cookie-modal.component.css'
})
export class CookieModalComponent {

  constructor(public dialogRef: MatDialogRef<CookieModalComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  // Methode d'acceptation des cookies :
  acceptAllCookies(): void {

    console.log('Cookies Acceptés - Méthode acceptAllCookies() appelée.');

    const preferences = {
      analytics: true,
      publicite: true,
      personnalisation: true,
      etc: true
    }

    // Stocker les préférences dans le localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

    // Fermer la modale
    this.close();
}

  // Methode de refus des cookies : 
  rejectAllCookies(): void {

    console.log('Cookies Refusés - Méthode rejectAllCookies() appelée.');

    const preferences = {
      analytics: false,
      publicite: false,
      personnalisation: false,
      etc: false
    };

    // Stocker les préférences dans le localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

    // Fermer la modale
    this.close();
  }


}
