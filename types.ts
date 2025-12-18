
export enum GovernanceLevel {
  Reaktiv = 'Reaktiv',
  Proaktiv = 'Proaktiv',
  Transformativ = 'Transformativ',
}

export enum SystemLayer {
  Mensch = 'Mensch',
  Daten = 'Daten',
  Modell = 'Modell',
}

export interface KnowledgeItem {
  id: number;
  title: string;
  content: string;
  level: GovernanceLevel;
  layer: SystemLayer;
  reasoning: string;
}
