
import React from 'react';
import { KnowledgeItem, GovernanceLevel, SystemLayer } from '../types';
import { GOVERNANCE_LEVELS, SYSTEM_LAYERS } from '../constants';
import { KnowledgeItemCard } from './KnowledgeItemCard';

interface GovernanceMatrixProps {
  items: KnowledgeItem[];
}

const LEVEL_CONFIG: Record<GovernanceLevel, { color: string, description: string }> = {
    [GovernanceLevel.Transformativ]: { color: 'bg-purple-100 border-purple-300', description: 'Innovativ' },
    [GovernanceLevel.Proaktiv]: { color: 'bg-blue-100 border-blue-300', description: 'Organisiert' },
    [GovernanceLevel.Reaktiv]: { color: 'bg-amber-100 border-amber-300', description: 'Ad-hoc' },
};

const LAYER_CONFIG: Record<SystemLayer, { description: string }> = {
    [SystemLayer.Mensch]: { description: 'Ethik, Kultur' },
    [SystemLayer.Daten]: { description: 'Bias, Qualität' },
    [SystemLayer.Modell]: { description: 'Robustheit, Ökologie' },
};

export const GovernanceMatrix: React.FC<GovernanceMatrixProps> = ({ items }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-slate-700">3x3 Governance-Matrix</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-slate-200 p-1 rounded-xl shadow-inner">
        
        {/* Header Row */}
        <div className="hidden md:block"></div>
        {SYSTEM_LAYERS.map(layer => (
           <div key={layer} className="text-center py-2 px-3">
             <h3 className="font-bold text-slate-700">{layer}</h3>
             <p className="text-sm text-slate-500">{LAYER_CONFIG[layer].description}</p>
           </div>
        ))}

        {/* Matrix Body */}
        {GOVERNANCE_LEVELS.map(level => (
            <React.Fragment key={level}>
                 <div className="hidden md:flex items-center justify-center p-3 text-center">
                    <div>
                        <h3 className="font-bold text-slate-700">{level}</h3>
                        <p className="text-sm text-slate-500">{LEVEL_CONFIG[level].description}</p>
                    </div>
                </div>
                 {SYSTEM_LAYERS.map(layer => {
                    const cellItems = items.filter(item => item.level === level && item.layer === layer);
                    return (
                        <div key={`${level}-${layer}`} className={`min-h-[200px] p-3 space-y-3 rounded-lg border-2 border-dashed ${LEVEL_CONFIG[level].color}`}>
                            <div className="md:hidden text-center pb-2 border-b border-slate-300/50 mb-3">
                                <h3 className="font-bold text-slate-700">{level} / {layer}</h3>
                             </div>
                             {cellItems.length > 0 ? (
                                cellItems.map(item => <KnowledgeItemCard key={item.id} item={item} />)
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-sm text-slate-400 italic">Keine Beiträge</p>
                                </div>
                            )}
                        </div>
                    );
                 })}
            </React.Fragment>
        ))}
      </div>
    </div>
  );
};
