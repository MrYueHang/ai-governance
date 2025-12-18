
import React, { useState } from 'react';
import { Header } from './components/Header';
import { GovernanceMatrix } from './components/GovernanceMatrix';
import { AIClassifier } from './components/AIClassifier';
import { KnowledgeItem, GovernanceLevel, SystemLayer } from './types';
import { INITIAL_KNOWLEDGE_ITEMS } from './constants';

const App: React.FC = () => {
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>(INITIAL_KNOWLEDGE_ITEMS);

  const handleNewClassification = (text: string, level: GovernanceLevel, layer: SystemLayer, reasoning: string) => {
    const newItem: KnowledgeItem = {
      id: Date.now(),
      title: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
      content: text,
      level,
      layer,
      reasoning,
    };
    setKnowledgeItems(prevItems => [newItem, ...prevItems]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <AIClassifier onNewClassification={handleNewClassification} />
        <GovernanceMatrix items={knowledgeItems} />
      </main>
      <footer className="text-center py-4 text-sm text-slate-500">
        <p>&copy; 2024 GEZy OS Platform Concept. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
