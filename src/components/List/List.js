//*** fichier List.js ***

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './List.css';
import Film from '../Film/Film';
import '../../TMDBApi.js';
import { getFilmsFromApiWithSearchedText } from '../../TMDBApi.js';

function List() {

const [films, setFilms] = useState([])

  const search = useParams()

useEffect(() => {
  getFilmsFromApiWithSearchedText(search.data, 1)
    .then(data => {setFilms(data.results)})
  
})

  return (
    <div className="container">
      <h2>Liste des films</h2>
      <p>{search.data}</p>
      {films.map((film) => {
        return (
        <Film key={film.id} poster={film.poster_path} abstract={film.overview} />
     ) })}
    </div>
  );
}

export default List;