import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

function Sticker({ id, emoji }: { id: string, emoji: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });
  const style = { transform: CSS.Translate.toString(transform) };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`text-4xl p-2 cursor-grab active:cursor-grabbing transition-opacity ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {emoji}
    </div>
  );
}

function Canvas({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-area' });
  return (
    <div
      ref={setNodeRef}
      className={`w-full h-80 border-4 border-dashed rounded-3xl flex flex-wrap items-start p-8 transition-colors ${
        isOver ? 'bg-blue-50 border-blue-400' : 'bg-white border-gray-200'
      }`}
    >
      {children}
    </div>
  );
}

import WordBank from './components/WordBank';
import FridgeDoor from './components/FridgeDoor';
import WordMagnet from './components/WordMagnet';
import { useMagnetStore } from './store/useMagnetStore';

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  const magnets = useMagnetStore((s) => s.magnets);
  const moveToFridge = useMagnetStore((s) => s.moveToFridge);
  const loadExpansionPack = useMagnetStore((s) => s.loadExpansionPack);

  const handleStickerDrop = (event: DragEndEvent) => {
    if (event.over && event.over.id === 'canvas-area') {
      setItems((prev) => [...prev, event.active.id as string]);
    }
  };

  const handleMagnetDrop = (event: any) => {
    if (!event.over) return;
    if (event.over.id !== 'fridge') return;

    const magnetRect = event.active.rect.current.translated;
    const fridgeRect = event.over.rect;

    const x = magnetRect.left - fridgeRect.left;
    const y = magnetRect.top - fridgeRect.top;

    moveToFridge(event.active.id, x, y);
  };

  const loadPreset = () => {
    const mockExternalSet = ['⭐', '💖', '🔥', '🚀'];
    setItems(mockExternalSet);
  };

  return (
    <DndContext
      onDragEnd={(e) => {
        handleStickerDrop(e);
        handleMagnetDrop(e);
      }}
    >
      <div className="p-12 min-h-screen bg-slate-50 font-sans flex flex-col gap-24">

        <div>
          <div className="bg-black text-white p-6 mb-8 rounded-2xl flex justify-between items-center shadow print:hidden">
            <div>
              <h1 className="text-xl font-bold">Sticker Sandbox</h1>
              <p className="text-xs text-gray-300">Drag emojis to the box below</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={loadPreset}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold shadow"
              >
                Load Preset 📦
              </button>

              <button
                onClick={() => window.print()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow"
              >
                Print Creation 🖨️
              </button>
            </div>
          </div>

          <div className="flex gap-12 items-start">
            <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow print:hidden">
              <Sticker id="⭐" emoji="⭐" />
              <Sticker id="🚀" emoji="🚀" />
              <Sticker id="🔥" emoji="🔥" />
            </div>

            <div className="flex-1">
              <Canvas>
                {items.length === 0 ? (
                  <p className="text-gray-300 font-bold m-auto">
                    Pudota tarroja tähän
                  </p>
                ) : (
                  items.map((emoji, idx) => (
                    <span key={idx} className="text-5xl m-2">
                      {emoji}
                    </span>
                  ))
                )}
              </Canvas>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">

          <div className="print:hidden bg-black text-white p-6 rounded-xl shadow flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Fridge poetry</h1>
              <p className="text-gray-300 text-sm">
                Drag words to fridge door and locate them freely
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={loadExpansionPack}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold shadow"
              >
                Load extra words
              </button>

              <button
                onClick={() => window.print()}
                className="bg-zinc-800 text-white px-4 py-2 rounded-lg font-bold shadow"
              >
                Print the poem
              </button>
            </div>
          </div>

          <div className="flex gap-12 items-start">
            <WordBank />

            <FridgeDoor>
              {magnets
                .filter((m) => m.status === 'fridge')
                .map((m) => (
                  <WordMagnet key={m.id} id={m.id} />
                ))}
            </FridgeDoor>
          </div>
        </div>
      </div>
    </DndContext>
  );
}
