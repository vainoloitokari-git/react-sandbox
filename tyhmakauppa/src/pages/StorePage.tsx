import { useState, useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';

export function StorePage() {
	const { products, isLoading, fetchProducts } = useProductStore();
	const [selectedCategory, setSelectedCategory] = useState<string>('all');

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);


	const categoryList: string[] = products.map((product) => {
		return product.category;
	});

	// remove duplicates with Set
	const uniqueCategoriesSet = new Set(categoryList);

	// Set to Array
	const uniqueCategories: string[] = Array.from(uniqueCategoriesSet);

	// sort for alphabetic sorting
	const categories = uniqueCategories.sort();

	const filteredProducts = selectedCategory === 'all' 
		? products 
		: products.filter((p) => p.category === selectedCategory);

	if (isLoading && products.length === 0) {
    return <div className="p-8 text-center text-gray-500 font-medium">Loading products...</div>;
	}

	return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
		<h1>Product Store</h1>

			<CategoryFilter 
				categories={categories}
				selected={selectedCategory}
				onSelect={setSelectedCategory}
			/>

			{!isLoading && filteredProducts.length === 0 ? (
				<div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
				<p className="text-gray-500 text-lg">No products found in this category</p>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
				</div>
			)}
		</div>
	);
};