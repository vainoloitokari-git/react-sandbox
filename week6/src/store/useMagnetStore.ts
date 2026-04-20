import { create } from 'zustand';
import type { Magnet } from '../types/Magnet';

interface MagnetStore {
  magnets: Magnet[];
  moveToFridge: (id: string, x: number, y: number) => void;
  loadExpansionPack: () => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
    { id: '1', word: 'summer', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'night', status: 'bank', x: 0, y: 0 },
    { id: '3', word: 'is', status: 'bank', x: 0, y: 0 },
    { id: '4', word: 'hot', status: 'bank', x: 0, y: 0 },
  ],

  moveToFridge: (id, x, y) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, status: 'fridge', x, y } : m
      ),
    })),

  loadExpansionPack: () =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        { id: crypto.randomUUID(), word: 'beautiful', status: 'bank', x: 0, y: 0 },
        { id: crypto.randomUUID(), word: 'code', status: 'bank', x: 0, y: 0 },
        { id: crypto.randomUUID(), word: 'bug', status: 'bank', x: 0, y: 0 },
      ],
    })),
}));
