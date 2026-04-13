
export async function fetchProductsFromApi() {
   const response = await fetch('https://dummyjson.com/products');
   if (!response.ok) {
      throw new Error('Verkkovirhe tuotteita haettaessa');
   }
   const data = await response.json();
   return data.products;
};