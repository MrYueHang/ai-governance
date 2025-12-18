
import React, { useState } from 'react';
import { classifyContribution } from '../services/geminiService';
import { GovernanceLevel, SystemLayer } from '../types';

interface AIClassifierProps {
  onNewClassification: (text: string, level: GovernanceLevel, layer: SystemLayer, reasoning: string) => void;
}

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const AIClassifier: React.FC<AIClassifierProps> = ({ onNewClassification }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    try {
      const result = await classifyContribution(text);
      onNewClassification(text, result.level, result.layer, result.reasoning);
      setText('');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mb-8 p-6 bg-white rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-xl font-semibold mb-4 text-slate-700">Wissensbeitrag klassifizieren</h2>
      <p className="text-slate-500 mb-4">Geben Sie einen Text ein, um ihn mit Gemini-Unterstützung automatisch in die Governance-Matrix einzuordnen.</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="z.B. 'Entwicklung eines blockchain-basierten Identity-Management-Systems...'"
          className="w-full h-28 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
          disabled={isLoading}
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading && <LoadingSpinner />}
            {isLoading ? 'Analysiere...' : 'Klassifizieren'}
          </button>
        </div>
      </form>
    </section>
  );
};
