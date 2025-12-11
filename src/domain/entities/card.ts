export interface CardAboutMeEntity{
  title: string;
  message: string;
  icon: string;
}

export interface CardSkillsTechnology{
  title: string;
  technologia: TechnologiaEntity[];
}

export interface TechnologiaEntity{
  name: string;
  icon?: string;
}

export interface CardFeatureProjectsEntity{
  title: string;
  message: string;
  image: string;
  technologia: TechnologiaEntity[];
  gitUrl: string;
  projectUrl: string;
}