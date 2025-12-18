
import { GoogleGenAI, Type } from "@google/genai";
import { GovernanceLevel, SystemLayer } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const promptSystemInstruction = `Sie sind ein Experte für KI-Governance und Ethik. Ihre Aufgabe ist es, einen gegebenen Textbeitrag in die 3x3 Governance-Matrix einzuordnen.
Die Matrix hat zwei Dimensionen:
1. Governance-Reifegrad (level):
   - Reaktiv: Ad-hoc-Reaktionen, informelle Prozesse, klassisches 'Feuerlöschen'. Reaktion auf bereits eingetretene Probleme.
   - Proaktiv: Etablierte ethische Leitlinien, definierte Prozesse, vorausschauende Risikobewertung. Zielt auf die Vermeidung von Problemen.
   - Transformativ: Ethik und Governance sind integrale Bestandteile der Kernstrategie. Antizipation zukünftiger Entwicklungen und Neugestaltung von Systemen.

2. KI-Systemebene (layer):
   - Mensch: Fokus auf Rechenschaftspflicht, gesellschaftliche Auswirkungen, ethische Kultur, Mensch-Maschine-Interaktion.
   - Daten: Fokus auf Datenschutz, Voreingenommenheit (Bias) in Datensätzen, Datenqualität, Nachvollziehbarkeit.
   - Modell: Fokus auf die technischen Eigenschaften des KI-Modells selbst, wie Erklärbarkeit, Robustheit, Sicherheit und Nachhaltigkeit.

Analysieren Sie den folgenden Text und geben Sie eine Klassifizierung in den Dimensionen 'level' und 'layer' zurück, zusammen mit einer kurzen Begründung ('reasoning').`;

export const classifyContribution = async (text: string): Promise<{ level: GovernanceLevel; layer: SystemLayer; reasoning: string; }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Klassifizieren Sie den folgenden Textbeitrag: "${text}"`,
      config: {
        systemInstruction: promptSystemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            level: {
              type: Type.STRING,
              enum: [GovernanceLevel.Reaktiv, GovernanceLevel.Proaktiv, GovernanceLevel.Transformativ],
              description: "Der Governance-Reifegrad des Beitrags."
            },
            layer: {
              type: Type.STRING,
              enum: [SystemLayer.Mensch, SystemLayer.Daten, SystemLayer.Modell],
              description: "Die KI-Systemebene, die der Beitrag betrifft."
            },
            reasoning: {
              type: Type.STRING,
              description: "Eine kurze Begründung für die Klassifizierung."
            }
          },
          required: ["level", "layer", "reasoning"]
        },
      },
    });

    const jsonString = response.text;
    const result = JSON.parse(jsonString);
    
    // Validate the response shape
    if (Object.values(GovernanceLevel).includes(result.level) && 
        Object.values(SystemLayer).includes(result.layer) && 
        typeof result.reasoning === 'string') {
      return result;
    } else {
      throw new Error("Invalid response format from Gemini API");
    }

  } catch (error) {
    console.error("Error classifying contribution with Gemini:", error);
    throw new Error("Failed to classify contribution. Please check the API key and network connection.");
  }
};
