// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() { }

  // Method to update the login status
  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }

  logout() {
    this.setLoggedIn(false); // Set login status to false when logging out
  }
}
