export interface Pokemon {
  id: number;
  name: string;
  abilities: AbilityDetail[];
}

interface AbilityDetail {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
