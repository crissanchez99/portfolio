import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ImagesRutes } from '../../../../core/enums/images-rutes';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, ImageModule, ButtonModule, CardModule, ChipModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected iconGitHub: string = ImagesRutes.iconGitHub;
  protected iconLinkedin: string  = ImagesRutes.iconLinkedin;
  protected iconEmail: string  = ImagesRutes.iconEmail;
  protected aboutMe: string = ImagesRutes.aboutMe;

  test(){
    console.log(`kdskdkkdsnvnsdkj`);
  }

  scrollToAboutMe(element: any){
    console.log(`que carajo es esto??`, element);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
    
  }
}
