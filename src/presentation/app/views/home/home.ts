import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ImagesRutes } from '../../../../core/enums/images-rutes';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { MessageModule } from 'primeng/message';
import { Tecnologies } from '../../../../core/enums/technolgies';
import { CardAboutMeEntity, CardFeatureProjectsEntity, CardSkillsTechnology } from '../../../../domain/entities/card';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageEntity } from '../../../../domain/entities/language';
import { url } from '../../../../core/enums/url';
import { HttpClient } from '@angular/common/http';
import { cardsAboutMe, cardsFeaturedProjects, cardsSkillsTechnolgies } from '../../../../core/const/cards';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, ImageModule, ButtonModule, CardModule, ChipModule, TagModule, FormsModule, ReactiveFormsModule,MessageModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage implements OnInit{
  private translateService: TranslateService = inject(TranslateService);
  protected languageIsChanged: boolean = false;
  protected languages: LanguageEntity[] = [];
  protected englishLanguage!: string;
  protected spanishLanguage!: string;

  protected gitHubAccountUrl: string = url.gitHubAccountUrl;
  protected linkedinUrl: string = url.linkedinUrl;
  protected mailUrl: string = url.mailUrl;

  protected iconGitHub: string = ImagesRutes.iconGitHub;
  protected iconLinkedin: string  = ImagesRutes.iconLinkedin;
  protected iconEmail: string  = ImagesRutes.iconEmail;
  protected aboutMeImg: string = ImagesRutes.aboutMe;  
  protected spainFlagImg: string = ImagesRutes.spainFlag;
  protected ukFlagImg: string = ImagesRutes.ukFlag;

  protected gitLabel = Tecnologies.git;
  protected liveDemoLabel = Tecnologies.liveDemo;

  protected cardsAboutMe: CardAboutMeEntity[] = [];
  protected cardsSkillsTechnolgies: CardSkillsTechnology[] = [];
  protected cardsFeaturedProjects: CardFeatureProjectsEntity[] = [];

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected namePlaceholderForm!: string;
  protected emailPlaceholderForm!: string;
  protected messagePlaceholderForm!: string;
  protected hasBeenSubmit: boolean = false;
  protected hasTriedSubmited: boolean = false;

  contactForm: FormGroup = this.formBuilder.group({
    name: [``, Validators.required],
    email: [``, [Validators.required, Validators.email]],
    message: [``, Validators.required]
  });

  get name(): string {return this.contactForm.get('name')?.value;}
  get email(): string {return this.contactForm.get('email')?.value;}
  get message(): string {return this.contactForm.get('message')?.value;}

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.setLanguages();
    this.translateService.onLangChange.subscribe(() => {
      this.loadCards();
      this.loadPlaceholdersContactForm();
      this.loadLanguages();
    })
  }

 private loadCards(){
  this.cardsAboutMe = cardsAboutMe;
  this.cardsSkillsTechnolgies = cardsSkillsTechnolgies;
  this.cardsFeaturedProjects = cardsFeaturedProjects
 }

 private loadPlaceholdersContactForm(){
  this.namePlaceholderForm = this.translateService.instant('home_component.get_in_touch.form.input_name.placeholder');
  this.emailPlaceholderForm = this.translateService.instant('home_component.get_in_touch.form.input_email.placeholder');
  this.messagePlaceholderForm = this.translateService.instant('home_component.get_in_touch.form.input_message.placeholder');
 }

 private loadLanguages(){
  this.englishLanguage = this.translateService.instant('home_component.languages.english');
  this.spanishLanguage = this.translateService.instant('home_component.languages.spanish');
 }

  protected scrollToAboutMe(element: any){
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })    
  }

  protected onSubmit(): void{
    if(this.contactForm.valid){
      this.http.post('https://formspree.io/f/xpwvjewg', {
        paramas: {
          name: this.name,
          email: this.email,
          message: this.message
        }
      }, {
        headers: {'Accept': 'application/json'}
      }).subscribe({
        next: (a) => {
          this.hasBeenSubmit = true;
          this.hasTriedSubmited = false;
          this.contactForm.reset();
          console.log(`??`, a);
          
        }
      })
    }else{
      this.hasBeenSubmit = false;
      this.hasTriedSubmited = true;
    }
  }

  protected setLanguages(){
    this.languages = [
      {
        language: 'es',
        img: this.spainFlagImg,
        translation: 'languages.es'
      },
      {
        language: 'en',
        img: this.ukFlagImg,
        translation: 'languages.en'
      }
    ]
  }

  protected changeLanguage(langauge: string){
    this.translateService.use(langauge);
  }

  protected navigateTo(url: string){
    window.open(url);
  }

}

