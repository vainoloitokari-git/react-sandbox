import { useMagnetStore } from '../store/useMagnetStore';
import WordMagnet from './WordMagnet';

export default function WordBank() {
  const magnets = useMagnetStore((s) => s.magnets);

  return (
    <div className="print:hidden bg-zinc-900 text-white p-6 rounded-xl shadow-xl w-48">
      <h2 className="font-bold text-lg mb-4">WORD BANK</h2>

      <div className="flex flex-col gap-2">
        {magnets
          .filter((m) => m.status === 'bank')
          .map((m) => (
            <WordMagnet key={m.id} id={m.id} />
          ))}
      </div>
    </div>
  );
}
