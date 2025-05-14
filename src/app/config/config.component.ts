import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SznService } from '../szn.service';

@Component({
  selector: 'app-config',
  imports: [FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  config: any = {};

  saveConfig(){
    this.sznService.sznSetConfig('czas', this.config.czas);
  }
  constructor(private sznService: SznService) {
        this.sznService.sznbs.subscribe((config) => {
            this.config = config;
        }); 

    }
}
