import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../organisms/sidebar/sidebar.component";
import { HeaderComponent } from "../../../layout/header/header.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
