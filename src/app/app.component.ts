import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'System zarządzania nawykami';
}
