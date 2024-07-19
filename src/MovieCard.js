import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={dogImage} alt="Dog" />
    </div>
  );
};

export default MovieCard;