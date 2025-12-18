
import React from 'react';
import { KnowledgeItem } from '../types';

interface KnowledgeItemCardProps {
  item: KnowledgeItem;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

export const KnowledgeItemCard: React.FC<KnowledgeItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200/80 p-4 transition-all duration-300 hover:shadow-lg hover:border-blue-400 group relative">
      <h4 className="font-semibold text-slate-800 truncate">{item.title}</h4>
      <p className="text-sm text-slate-500 mt-1 line-clamp-2">{item.content}</p>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity" title={item.reasoning}>
        <InfoIcon/>
      </div>
    </div>
  );
};
