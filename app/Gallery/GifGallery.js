// GifGallery.js
"use client";
// GifGallery.js
import React, { useState } from 'react';
import axios from 'axios';

const GifGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'; // Your GIPHY API key

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=10`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      
      <input
        className="border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:border-blue-500"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search keyword"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            className="w-full h-auto rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default GifGallery;
