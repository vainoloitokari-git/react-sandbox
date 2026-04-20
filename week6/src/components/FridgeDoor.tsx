import { useDroppable } from '@dnd-kit/core';

export default function FridgeDoor({ children }: { children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'fridge' });

  return (
    <div
      ref={setNodeRef}
      className={`
        relative w-[600px] h-[500px] rounded-2xl border-4 p-6 bg-white shadow-xl
        ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}
      `}
    >
      {children}
    </div>
  );
}
