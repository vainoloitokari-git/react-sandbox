import React, { useState } from 'react';
import Modal from './components/Modal';

// Fake data: Camping gear and their weights in grams
const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 }
];

export default function App() {
  // Modal for camping gear
  const [isOpen, setIsOpen] = useState(false);

  // Modal for test buttons
  const [testOpen, setTestOpen] = useState(false);
  const [testContent, setTestContent] = useState<React.ReactNode>(null);

  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="p-8 space-y-12">

      {/* --- CAMPING TRIP SUMMARY --- */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Camping Trip Summary</h2>

        <p className="text-xl font-black text-blue-600 mb-4">
          Backpack weight: {totalWeight} g
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-zinc-800 text-white px-4 py-2 rounded shadow hover:bg-zinc-700"
        >
          View Equipment
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h3 className="text-xl font-bold mb-4">Packed Items</h3>

          <ul className="mb-6 space-y-2">
            {CAMPING_GEAR.map(item => (
              <li key={item.id} className="border-b pb-1 flex justify-between">
                <span>{item.name}</span>
                <span className="text-gray-500">{item.weight} g</span>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
<div>
  <h2 className="text-2xl font-bold mb-4">Modaalin testaus</h2>

  <div className="flex gap-4">
    <button
      onClick={() => {
        setTestContent("Hihi ei tapahdu mitään!");
        setTestOpen(true);
      }}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Näytä tiedot
    </button>

    <button
      onClick={() => {
        setTestContent(
          <div>
            <h3 className="text-xl font-bold mb-2">
              Second popup with same Modal component!!!
            </h3>
            <p className="text-gray-700">
              Content changes but the Modal is the same!
            </p>
          </div>
        );
        setTestOpen(true);
      }}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
    >
      Näytä tiedot
    </button>
  </div>

  <Modal isOpen={testOpen} onClose={() => setTestOpen(false)}>
    {testContent}
  </Modal>
</div>
</div>
  );
}
