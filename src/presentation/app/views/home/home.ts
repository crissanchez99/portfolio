import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ImagesRutes } from '../../../../core/enums/images-rutes';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { Tecnologies } from '../../../../core/enums/technolgies';
import { CardEntity } from '../../../../domain/entities/card';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageEntity } from '../../../../domain/entities/language';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, ImageModule, ButtonModule, CardModule, ChipModule, TagModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage implements OnInit{
  private translateService: TranslateService = inject(TranslateService);
  protected languageIsChanged: boolean = false;
  protected languages: LanguageEntity[] = [];
  protected englishLanguage!: string;
  protected spanishLanguage!: string; 

  protected iconGitHub: string = ImagesRutes.iconGitHub;
  protected iconLinkedin: string  = ImagesRutes.iconLinkedin;
  protected iconEmail: string  = ImagesRutes.iconEmail;
  protected aboutMeImg: string = ImagesRutes.aboutMe;
  protected typeScriptImg: string = ImagesRutes.typeScript;
  protected jsonImg: string = ImagesRutes.json;
  protected tailwindImg: string = ImagesRutes.tailwind;
  protected angularImg: string = ImagesRutes.angular;
  protected ionicImg: string = ImagesRutes.ionic;
  protected capacitorImg: string = ImagesRutes.capacitor;
  protected gitImg: string = ImagesRutes.git;
  protected figmaImg: string = ImagesRutes.figma;
  protected postmanImg: string = ImagesRutes.postman;
  protected testingImg: string = ImagesRutes.testing;
  protected rickNMortyImg: string = ImagesRutes.rickNMorty;
  protected bookishImg: string = ImagesRutes.bookish;

  protected htmlCss = Tecnologies.htmlCss;
  protected typeScript = Tecnologies.typeScript;
  protected json = Tecnologies.json;
  protected tailwind = Tecnologies.tailwind;
  protected angular = Tecnologies.angular;
  protected ionic = Tecnologies.ionic;
  protected capacitor = Tecnologies.capacitor;
  protected primeNg = Tecnologies.primeNg;
  protected git = Tecnologies.git;
  protected figma = Tecnologies.figma
  protected restApi = Tecnologies.restApi;
  protected postman = Tecnologies.postman;
  protected testing = Tecnologies.testing;

  protected cardsAboutMe: CardEntity[] = [];
  protected cardsSkillsTechnolgies: CardEntity[] = [];
  protected cardsFeaturedProjects: CardEntity[] = [];

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected namePlaceholderForm!: string;
  protected emailPlaceholderForm!: string;
  protected messagePlaceholderForm!: string;
  //protected messageOnSubmit!: string;

  contactForm: FormGroup = this.formBuilder.group({
    name: [``, Validators.required],
    email: [``, [Validators.required, Validators.email]],
    message: [``, Validators.required]
  });

  get name(): string {return this.contactForm.get('name')?.value;}
  get email(): string {return this.contactForm.get('email')?.value;}
  get message(): string {return this.contactForm.get('message')?.value;}

  ngOnInit(): void{
    this.setLanguages();
    this.translateService.onLangChange.subscribe(() => {
      this.loadCards();
      this.loadPlaceholdersContactForm();
      this.loadLanguages();
    })
  }

 private loadCards(){
  this.cardsAboutMe = [
  {
    title: this.translateService.instant('home_component.about_me.cards.first_card.title'),
    message: this.translateService.instant('home_component.about_me.cards.first_card.message'),
    icon: 'pi-code'
  },
  {
    title: this.translateService.instant('home_component.about_me.cards.second_card.title'),
    message: this.translateService.instant('home_component.about_me.cards.second_card.message'),
    icon: 'pi-palette'
  },
  {
    title: this.translateService.instant('home_component.about_me.cards.third_card.title'),
    message: this.translateService.instant('home_component.about_me.cards.third_card.message'),
    icon: 'pi-bolt'
  }
 ];

 this.cardsSkillsTechnolgies = [
  {
    title: this.translateService.instant('home_component.skills_technologies.cards.first_card.title'),
    technologia: [
      {
        name: this.htmlCss,
      },
      {
        name: this.json,
        icon: this.jsonImg
      },
      {
        name: this.typeScript,
        icon: this.typeScriptImg
      },
      {
        name: this.angular,
        icon: this.angularImg
      },
      {
        name: this.ionic,
        icon: this.ionicImg
      },
      {
        name: this.tailwind,
        icon: this.tailwindImg
      },
      {
        name: this.capacitor,
        icon: this.capacitorImg
      },
      {
        name: this.primeNg
      },
    ]
  },
  {
    title: this.translateService.instant('home_component.skills_technologies.cards.second_card.title'),
    technologia: [
      {
        name: this.git,
        icon: this.gitImg
      },
      {
        name: this.figma,
        icon: this.figmaImg
      },
      {
        name: this.restApi
      },
      {
        name: this.postman,
        icon: this.postmanImg
      },
      {
        name: this.testing,
        icon: this.testingImg
      },
    ]
  }
 ]

  this.cardsFeaturedProjects = [
  {
    title: this.translateService.instant('home_component.featured_projects.cards.first_card.title'),
    message: this.translateService.instant('home_component.featured_projects.cards.first_card.message'),
    image: this.rickNMortyImg,
    technologia: [
      {
        name: this.htmlCss
      },
      {
        name: this.typeScript
      },
      {
        name: this.angular
      },
      {
        name: this.ionic
      },
      {
        name: this.capacitor
      },
      {
        name: this.tailwind
      },
      {
        name: this.git
      },
      {
        name: this.figma
      },
      {
        name: this.testing
      },
    ]
  },
  {
    title: this.translateService.instant('home_component.featured_projects.cards.second_card.title'),
    message: this.translateService.instant('home_component.featured_projects.cards.second_card.message'),
    image: this.bookishImg,
    technologia: [
      {
        name: this.htmlCss
      },
      {
        name: this.typeScript
      },
      {
        name: this.angular
      },
      {
        name: this.ionic
      },
      {
        name: this.capacitor
      },
      {
        name: this.tailwind
      },
      {
        name: this.git
      },
      {
        name: this.figma
      },
    ]
  }
 ]
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
      //this.messageOnSubmit = 
    }
  }

  protected setLanguages(){
    this.languages = [
      {
        language: 'es',
        img: 'assets/images/languages/spain-flag.svg',
        translation: 'languages.es'
      },
      {
        language: 'en',
        img: 'assets/images/languages/uk-flag.svg',
        translation: 'languages.en'
      }
    ]
  }

  public changeLanguage(langauge: string){
    this.translateService.use(langauge);
  }
}
