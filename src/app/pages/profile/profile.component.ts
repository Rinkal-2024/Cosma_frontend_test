import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LayoutModule , TranslateModule , TitleCasePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user  = { firstName: '', lastName: '', accountType: '' , username :'' };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        this.user = JSON.parse(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }

}
