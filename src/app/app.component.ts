import {Component, HostListener, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, MatDrawerContainer, MatDrawer, MatDrawerContent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'accueil';

  @ViewChild('sidenav', {static: false}) sidenav: MatDrawer | undefined

  @HostListener('window:resize')
  onResize() {
    this.handleSidenavAlwayOpen()
  }

  handleSidenavAlwayOpen() {
    if (window.innerWidth >= 1035) {
      this.sidenav?.open()
    } else {
      this.sidenav?.close()
    }
  }

  protected readonly window = window;
}
