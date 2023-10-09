import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'Listado', icon:'label', url: './list'},
    {label:'Añadir', icon:'add', url: './new-hero'},
    {label:'Buscar', icon:'search', url: './search'},
  ]

  public isActive: boolean = true;

  toggleBtn(sidenav: MatSidenav): void {
    sidenav.toggle();
    this.isActive = !this.isActive;
  }

}
