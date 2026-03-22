import React, { useState, useEffect } from 'react';

export function CatGallery() {

  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())              
      .then((data) => setCatUrl(data[0].url))           
      .catch((error) => console.error(error));          
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Random Cat</h2>
      {catUrl ? (
        <img
          src={catUrl}
          alt="Cat"
          className="rounded-xl shadow-lg w-64 h-64 object-cover"
        />
      ) : (
        <p>Loading cat...</p>
      )}
    </div>
  );
}
