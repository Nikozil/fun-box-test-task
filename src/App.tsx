import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DotsListComponent from './components/DotsListComponent';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import NewDotForm from './components/NewDotForm';
import { reorder } from './lib/Functions';
import './styles/App.scss';

function App() {
  const [center, setCenter] = useState<Coordinates>([55.75, 37.57]);
  const [dotsList, setDotsList] = useState<Dot[]>([]);

  const handleSubmit = (name: DotName) => {
    const newDot = {
      id: uuidv4(),
      name: name,
      coordinates: center,
    };

    setDotsList((prevlist) => [...prevlist, newDot]);
  };

  const deleteDot = (id: DotId) => {
    setDotsList((prevlist) => prevlist.filter((dot: Dot) => dot.id !== id));
  };

  const permutationDot = (startIndex: number, endIndex: number) => {
    const newList = reorder(dotsList, startIndex, endIndex);
    setDotsList(newList);
  };

  return (
    <div className="app">
      <Header />
      <div className="interface">
        <NewDotForm handleSubmit={handleSubmit} />
        <DotsListComponent
          dotsList={dotsList}
          deleteDot={deleteDot}
          permutationDot={permutationDot}
        />
      </div>
      <div className="map">
        <MapComponent
          center={center}
          setCenter={setCenter}
          dotsList={dotsList}
          setDotsList={setDotsList}
        />
      </div>
    </div>
  );
}

export default App;

export interface Dot {
  id: DotId;
  name: DotName;
  coordinates: Coordinates;
}
export type DotId = string;
type DotName = string;
export type Coordinates = number[];
