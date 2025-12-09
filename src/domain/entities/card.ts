export interface CardEntity{
  title: string;
  message?: string;
  image?: string;
  technologia?: TechnologiaEntity[];
  icon?: string;
}

export interface TechnologiaEntity{
  name: string;
  icon?: string;
}