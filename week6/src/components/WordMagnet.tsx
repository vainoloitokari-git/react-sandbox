import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useMagnetStore } from '../store/useMagnetStore';

export default function WordMagnet({ id }: { id: string }) {
  const magnet = useMagnetStore((s) => s.magnets.find((m) => m.id === id));
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  if (!magnet) return null;

  const baseStyle =
    magnet.status === 'fridge'
      ? { position: 'absolute', left: magnet.x, top: magnet.y }
      : { position: 'relative' };

  const dragStyle = transform
    ? { transform: CSS.Translate.toString(transform) }
    : {};

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="
        px-3 py-1 bg-white text-black border border-gray-300 rounded shadow-sm
        cursor-grab active:cursor-grabbing text-sm select-none
      "
      style={{ ...baseStyle, ...dragStyle }}
    >
      {magnet.word}
    </div>
  );
}
