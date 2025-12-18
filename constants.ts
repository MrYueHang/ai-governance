
import { KnowledgeItem, GovernanceLevel, SystemLayer } from './types';

export const GOVERNANCE_LEVELS: GovernanceLevel[] = [
  GovernanceLevel.Transformativ,
  GovernanceLevel.Proaktiv,
  GovernanceLevel.Reaktiv,
];

export const SYSTEM_LAYERS: SystemLayer[] = [
  SystemLayer.Mensch,
  SystemLayer.Daten,
  SystemLayer.Modell,
];

export const INITIAL_KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  {
    id: 1,
    title: 'Dezentrale Identitätsverwaltung',
    content: 'Entwicklung eines blockchain-basierten Identity-Management-Systems, das Nutzern vollständige Kontrolle über ihre digitalen Identitäten und Beitragsdaten gibt.',
    level: GovernanceLevel.Transformativ,
    layer: SystemLayer.Daten,
    reasoning: 'Dieser Vorschlag ist transformativ, da er die grundlegende Architektur der Datenkontrolle neu gestaltet und auf Souveränität des Nutzers abzielt. Er betrifft primär die Datenebene durch die Verwaltung von Identitäten und Beitragsdaten.'
  },
  {
    id: 2,
    title: 'Smart Contract Beitragsverwaltung',
    content: 'Implementierung von Smart Contracts zur automatisierten Verwaltung und Verteilung von Beiträgen nach selbst definierten Regeln.',
    level: GovernanceLevel.Transformativ,
    layer: SystemLayer.Modell,
    reasoning: 'Die Nutzung von Smart Contracts automatisiert und dezentralisiert Governance-Regeln, was einen transformativen Einfluss auf die Prozesssteuerung hat. Der Kern liegt in der algorithmischen Logik des Modells (Smart Contract).'
  },
  {
    id: 3,
    title: 'Community-Governance für Entscheidungen',
    content: 'Aufbau eines dezentralen Entscheidungssystems, bei dem Nutzer über Plattform-Features und -Richtlinien abstimmen können.',
    level: GovernanceLevel.Transformativ,
    layer: SystemLayer.Mensch,
    reasoning: 'Dies ist ein transformativer Ansatz zur Governance, der die Macht von einer zentralen Instanz auf die Community (Mensch) verlagert und demokratische Teilhabe in den Mittelpunkt stellt.'
  },
  {
    id: 4,
    title: 'Consent-Management mit Versionierung',
    content: 'Implementierung eines ausgeklügelten Einverständnis-Systems, das granulare Zustimmungen mit Versionskontrolle verwaltet.',
    level: GovernanceLevel.Proaktiv,
    layer: SystemLayer.Daten,
    reasoning: 'Ein detailliertes Consent-Management ist proaktiv, da es darauf abzielt, Datenschutzprobleme vorausschauend zu managen und die Einhaltung von Vorschriften (DSGVO) sicherzustellen. Es betrifft die Datenebene.'
  },
  {
    id: 5,
    title: 'Modulares Dashboard zur Beitragskontrolle',
    content: 'Entwicklung einer benutzerfreundlichen Oberfläche mit konfigurierbaren Widgets zur Überwachung und Steuerung aller Beitragsaktivitäten.',
    level: GovernanceLevel.Proaktiv,
    layer: SystemLayer.Mensch,
    reasoning: 'Ein Dashboard zur Steuerung ist proaktiv, da es Nutzern (Mensch) die Werkzeuge gibt, ihre Aktivitäten vorausschauend zu verwalten, anstatt nur auf Probleme zu reagieren.'
  },
  {
    id: 6,
    title: 'Analyse von Argumenten in Foren',
    content: 'Diskussionen und Argumente aus Foren zu einem bestimmten Thema sammeln und die häufigsten Standpunkte identifizieren.',
    level: GovernanceLevel.Reaktiv,
    layer: SystemLayer.Daten,
    reasoning: 'Diese Aktivität ist reaktiv, da sie auf bereits existierende Daten und Diskussionen zurückblickt, um eine Situation zu analysieren. Der Fokus liegt auf der Auswertung von Daten.'
  },
];
