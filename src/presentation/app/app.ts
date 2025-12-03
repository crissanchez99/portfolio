import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cristina_sanchez_portfolio');
  private translate = inject(TranslateService);
  constructor(){
    this.translate.addLangs(['es', 'en']);
    this.translate.use('en');
  }
}
