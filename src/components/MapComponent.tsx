import React, { Fragment } from 'react';
import { GeoObject, Map, Placemark, YMaps, YMapsApi } from 'react-yandex-maps';
import { Coordinates, Dot } from '../App';
import styles from '../styles/MapComponent.module.scss';
const MapComponent: React.FC<Props> = ({
  center,
  setCenter,
  dotsList,
  setDotsList,
}) => {
  const onBoundsChangeHandler = (e: YMapsApi) => {
    setCenter(e.get('target').getCenter());
  };

  const onDragHandler = (e: YMapsApi) => {
    const newCoords = e.get('target').geometry.getCoordinates() as Coordinates;
    const id = e.get('target').properties.get('id');

    const changeCoords = (prevList: Dot[]) => {
      return prevList.map((dot: Dot) => {
        if (dot.id === id) return { ...dot, coordinates: newCoords };
        return dot;
      });
    };
    setDotsList(changeCoords);
  };

  const balloonContent = (dot: Dot) => `
                    <div class=${styles['baloon-content']}>
                   <div class=${styles['baloon-content__body']}>${dot.name}</div>
                  </div>
                    `;
  return (
    <YMaps>
      <Map
        className={styles.map}
        defaultState={{
          center: center,
          zoom: 17,
        }}
        options={{
          suppressMapOpenBlock: true,
        }}
        onBoundsChange={onBoundsChangeHandler}>
        {dotsList.map((dot, i, list) => (
          <Fragment key={dot.id}>
            <Placemark
              geometry={dot.coordinates}
              properties={{
                id: dot.id,
                balloonContent: balloonContent(dot),
              }}
              options={{
                preset: 'islands#nightCircleDotIcon',
                iconColor: '#20232a',
                cursor: 'pointer',
                draggable: true,
                hasBalloon: true,
                openBalloonOnClick: true,
                openEmptyBalloon: true,
                balloonCloseButton: false,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, -12],
              }}
              modules={['geoObject.addon.balloon']}
              onDrag={onDragHandler}
            />
            {i === 0 ? null : (
              <GeoObject
                geometry={{
                  type: 'LineString',
                  coordinates: [list[i - 1].coordinates, dot.coordinates],
                }}
                options={{
                  geodesic: true,
                  strokeWidth: 5,
                  strokeColor: '#61dafb',
                }}
              />
            )}
          </Fragment>
        ))}
      </Map>
    </YMaps>
  );
};

export default MapComponent;

interface Props {
  center: Coordinates;
  setCenter: (center: Coordinates) => void;
  dotsList: Dot[];
  setDotsList: (list: Dot[] | ChangePrevState<Dot[]>) => void;
}
type ChangePrevState<T> = (prev: T) => T;
