import { CardAboutMeEntity, CardSkillsTechnology } from "../../domain/entities/card";
import { Tecnologies } from "../enums/technolgies";
import { ImagesRutes } from '../enums/images-rutes';
import { url } from "../enums/url";

export const cardsAboutMe: CardAboutMeEntity[] = [
  {
    title: 'home_component.about_me.cards.first_card.title',
    message: 'home_component.about_me.cards.first_card.message',
    icon: 'pi-code'
  },
  {
    title: 'home_component.about_me.cards.second_card.title',
    message: 'home_component.about_me.cards.second_card.message',
    icon: 'pi-palette'
  },
  {
    title: 'home_component.about_me.cards.third_card.title',
    message: 'home_component.about_me.cards.third_card.message',
    icon: 'pi-bolt'
  }
]

export const cardsSkillsTechnolgies: CardSkillsTechnology[] = [
  {
    title: 'home_component.skills_technologies.cards.first_card.title',
    technologia: [
      {
        name: Tecnologies.htmlCss,
      },
      {
        name: Tecnologies.json,
        icon: ImagesRutes.json
      },
      {
        name: Tecnologies.typeScript,
        icon: ImagesRutes.typeScript
      },
      {
        name: Tecnologies.angular,
        icon: ImagesRutes.angular
      },
      {
        name: Tecnologies.ionic,
        icon: ImagesRutes.ionic
      },
      {
        name: Tecnologies.tailwind,
        icon: ImagesRutes.tailwind
      },
      {
        name: Tecnologies.capacitor,
        icon: ImagesRutes.capacitor
      },
      {
        name: Tecnologies.primeNg
      },
    ]
  },
  {
    title: 'home_component.skills_technologies.cards.second_card.title',
    technologia: [
      {
        name: Tecnologies.git,
        icon: ImagesRutes.git
      },
      {
        name: Tecnologies.figma,
        icon: ImagesRutes.figma
      },
      {
        name: Tecnologies.restApi
      },
      {
        name: Tecnologies.postman,
        icon: ImagesRutes.postman
      },
      {
        name: Tecnologies.testing,
        icon: ImagesRutes.testing
      },
    ]
  }
 ]

export const cardsFeaturedProjects = [
  {
    title: 'home_component.featured_projects.cards.first_card.title',
    message: 'home_component.featured_projects.cards.first_card.message',
    image: ImagesRutes.rickNMorty,
    technologia: [
      {
        name: Tecnologies.htmlCss
      },
      {
        name: Tecnologies.typeScript
      },
      {
        name: Tecnologies.angular
      },
      {
        name: Tecnologies.ionic
      },
      {
        name: Tecnologies.capacitor
      },
      {
        name: Tecnologies.tailwind
      },
      {
        name: Tecnologies.git
      },
      {
        name: Tecnologies.figma
      },
      {
        name: Tecnologies.testing
      },
    ],
    gitUrl: url.rickNMortyGitUrl,
    projectUrl: url.rickNMortyProjectUrl
  },
  {
    title: 'home_component.featured_projects.cards.second_card.title',
    message: 'home_component.featured_projects.cards.second_card.message',
    image: ImagesRutes.bookish,
    technologia: [
      {
        name: Tecnologies.htmlCss
      },
      {
        name: Tecnologies.typeScript
      },
      {
        name: Tecnologies.angular
      },
      {
        name: Tecnologies.ionic
      },
      {
        name: Tecnologies.capacitor
      },
      {
        name: Tecnologies.tailwind
      },
      {
        name: Tecnologies.git
      },
      {
        name: Tecnologies.figma
      },
    ],
    gitUrl: url.bookishGitUrl,
    projectUrl: url.bookishProjectUrl
  }
 ]