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
  protected rickNMortyGitUrl: string = url.rickNMortyGitUrl;
  protected bookishGitUrl: string = url.bookishGitUrl;
  protected rickNMortyProjectUrl: string = url.rickNMortyProjectUrl;
  protected bookishProjectUrl: string = url.bookishProjectUrl;

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

  protected htmlCssLabel = Tecnologies.htmlCss;
  protected typeScriptLabel = Tecnologies.typeScript;
  protected jsonLabel = Tecnologies.json;
  protected tailwindLabel = Tecnologies.tailwind;
  protected angularLabel = Tecnologies.angular;
  protected ionicLabel = Tecnologies.ionic;
  protected capacitorLabel = Tecnologies.capacitor;
  protected primeNgLabel = Tecnologies.primeNg;
  protected gitLabel = Tecnologies.git;
  protected figmaLabel = Tecnologies.figma
  protected restApiLabel = Tecnologies.restApi;
  protected postmanLabel = Tecnologies.postman;
  protected testingLabel = Tecnologies.testing;
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

  ngOnInit(): void{
    this.setLanguages();
    this.translateService.onLangChange.subscribe(() => {
      this.loadCards();
      this.loadPlaceholdersContactForm();
      this.loadLanguages();
    })
  }

  //cards ENUM
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
        name: this.htmlCssLabel,
      },
      {
        name: this.jsonLabel,
        icon: this.jsonImg
      },
      {
        name: this.typeScriptLabel,
        icon: this.typeScriptImg
      },
      {
        name: this.angularLabel,
        icon: this.angularImg
      },
      {
        name: this.ionicLabel,
        icon: this.ionicImg
      },
      {
        name: this.tailwindLabel,
        icon: this.tailwindImg
      },
      {
        name: this.capacitorLabel,
        icon: this.capacitorImg
      },
      {
        name: this.primeNgLabel
      },
    ]
  },
  {
    title: this.translateService.instant('home_component.skills_technologies.cards.second_card.title'),
    technologia: [
      {
        name: this.gitLabel,
        icon: this.gitImg
      },
      {
        name: this.figmaLabel,
        icon: this.figmaImg
      },
      {
        name: this.restApiLabel
      },
      {
        name: this.postmanLabel,
        icon: this.postmanImg
      },
      {
        name: this.testingLabel,
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
        name: this.htmlCssLabel
      },
      {
        name: this.typeScriptLabel
      },
      {
        name: this.angularLabel
      },
      {
        name: this.ionicLabel
      },
      {
        name: this.capacitorLabel
      },
      {
        name: this.tailwindLabel
      },
      {
        name: this.gitLabel
      },
      {
        name: this.figmaLabel
      },
      {
        name: this.testingLabel
      },
    ],
    gitUrl: this.rickNMortyGitUrl,
    projectUrl: this.rickNMortyProjectUrl
  },
  {
    title: this.translateService.instant('home_component.featured_projects.cards.second_card.title'),
    message: this.translateService.instant('home_component.featured_projects.cards.second_card.message'),
    image: this.bookishImg,
    technologia: [
      {
        name: this.htmlCssLabel
      },
      {
        name: this.typeScriptLabel
      },
      {
        name: this.angularLabel
      },
      {
        name: this.ionicLabel
      },
      {
        name: this.capacitorLabel
      },
      {
        name: this.tailwindLabel
      },
      {
        name: this.gitLabel
      },
      {
        name: this.figmaLabel
      },
    ],
    gitUrl: this.bookishGitUrl,
    projectUrl: this.bookishProjectUrl
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
    console.log(`formulario valido?`, this.contactForm.valid);
    
    if(this.contactForm.valid){
      this.hasBeenSubmit = true;
      this.hasTriedSubmited = false;
      this.contactForm.reset();
      console.log(`formulario VALIDO`);
      
    }else{
      this.hasTriedSubmited = true;
      console.log(`formulario NO valido`);
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

  protected changeLanguage(langauge: string){
    this.translateService.use(langauge);
  }

  protected navigateTo(url: string){
    window.open(url);
  }

}

