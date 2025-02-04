export interface CharacterDBO {
  info: CharacterInfoModel;
  results: CharacterResultModel[];
}

export interface CharacterInfoModel {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResultModel {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOriginModel;
  location: CharacterLocationModel;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export interface CharacterOriginModel {
  name: string;
  url: string;
}
export interface CharacterLocationModel {
  name: string;
  url: string;
}
