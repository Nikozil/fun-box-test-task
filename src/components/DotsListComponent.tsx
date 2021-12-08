import React from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { Dot, DotId } from '../App';
import styles from '../styles/DotsListComponent.module.scss';
import DotComponent from './DotComponent';

const DotsListComponent: React.FC<Props> = ({
  dotsList,
  deleteDot,
  permutationDots,
}) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    permutationDots(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles['dots-list__ul']}>
            {dotsList.map((dot, i) => (
              <Draggable key={dot.id} draggableId={dot.id} index={i}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={styles['dots-list__li']}>
                    <DotComponent dot={dot} deleteDot={deleteDot} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DotsListComponent;

interface Props {
  dotsList: Dot[];
  deleteDot: (id: DotId) => void;
  permutationDots: (startIndex: number, endIndex: number) => void;
}
