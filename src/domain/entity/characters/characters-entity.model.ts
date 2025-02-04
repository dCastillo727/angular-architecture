export interface CharactersEntity {
  info: CharacterPageInfo;
  results: CharacterResult[];
}

export interface CharacterPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterResult {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export interface CharacterLocation {
  name: string;
  url: string;
}
