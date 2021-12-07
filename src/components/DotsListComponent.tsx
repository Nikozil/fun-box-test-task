import React, { MouseEventHandler } from 'react';
import { Dot, DotId } from '../App';
import styles from '../styles/DotsListComponent.module.scss';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import DeleteIcon from '../assets/trash-alt-solid.svg';

const DotsListComponent: React.FC<Props> = ({
  dotsList,
  deleteDot,
  permutationDot,
}) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    permutationDot(result.source.index, result.destination.index);
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

const DotComponent: React.FC<DotProps> = ({ dot, deleteDot }) => {
  const handleDelete: MouseEventHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    deleteDot(dot.id);
  };
  return (
    <div className={styles.dot}>
      {dot.name}{' '}
      <button onClick={handleDelete} className={styles['dot__delete-button']}>
        <img src={DeleteIcon} alt="Delete" />
      </button>
    </div>
  );
};

interface Props {
  dotsList: Dot[];
  deleteDot: (id: DotId) => void;
  permutationDot: (startIndex: number, endIndex: number) => void;
}
interface DotProps {
  dot: Dot;
  deleteDot: (id: DotId) => void;
}
