interface CategoryFilterProps {
   categories: string[];
   selected: string;
   onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
   return (
      <div className="flex flex-wrap gap-2 mb-8">
         <button 
            onClick={() => onSelect('all')}
            className={`px-4 py-2 rounded-md font-medium transition-colors 
               ${selected === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
               }
            `}
         >
            All
         </button>
         {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => onSelect(cat)}
               className={`px-4 py-2 rounded-md font-medium capitalize transition-colors 
                  ${selected === cat 
                     ? 'bg-blue-600 text-white' 
                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
               `}
            >
               {cat}
            </button>
         ))}
      </div>
   );
};