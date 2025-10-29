import { useEffect, useState } from 'react';
import './App.css'
import DayCard from './component/DayCard'
import Star from './component/Star';
import Days from './data/data'
import Favorites from './component/Favorites';

function App () {

  const [shuffledDays, setShuffledDays] = useState(Days);
  useEffect(() => {
    const shuffled = [...Days].sort(() => Math.random() - 0.5);
    setShuffledDays(shuffled);
  }, []);

  const [dayInput, setDayInuput] = useState ("");

  const filteredDays =
    dayInput === ""
      ? shuffledDays
      : shuffledDays.filter((day) => day.id === Number(dayInput));
  
  const rows = [1, 2, 3, 4, 5, 6, 3];

  let start = 0;
  const groupedDays = rows.map((nbOfBoxes) => {
    const slice = filteredDays.slice(start, start + nbOfBoxes);
    start += nbOfBoxes;
    return slice;
  });

  const [favoriteTexts, setFavoritesTexts] = useState<string[]>([]);

  function toggleFavorite(thought: string) {
    setFavoritesTexts((prev) =>
      prev.includes(thought)
        ? prev.filter((t) => t !== thought)
        : [...prev, thought]
    );
  }

  return (
    <main>
      <h1>Calendrier de l'avent du développeur en herbe</h1>
      <section className='search'>
        <label>Saisis un jour entre 1 et 24 :</label>
        <input 
          id="day-input" 
          type="number" 
          min="1" 
          max="24" 
          value={dayInput} 
          onChange={(event) => setDayInuput(event.target.value)} />
      </section>
      <section className='tree'>
        <Star/>
        {groupedDays.map((row, i) => (
          <div key={i} className={`row r${i + 1}`}>
            {row.map((day) => (
              <DayCard 
                key={day.id} 
                image={day.imgSrc} 
                mess={day.message} 
                date={day.message.date}
                onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ))}
      </section>
      <Favorites favorites={favoriteTexts} />
    </main>
  )
}

export default App;
