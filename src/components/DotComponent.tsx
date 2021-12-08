import { MouseEventHandler } from 'react';
import { Dot, DotId } from '../App';
import DeleteIcon from '../assets/trash-alt-solid.svg';

import styles from '../styles/DotComponent.module.scss';

const DotComponent: React.FC<DotProps> = ({ dot, deleteDot }) => {
  const handleDelete: MouseEventHandler = (e) => {
    e.preventDefault();
    deleteDot(dot.id);
  };
  return (
    <div className={styles.dot}>
      {dot.name}{' '}
      <button
        onClick={handleDelete}
        className={styles['dot__delete-button']}
        data-testid="delete-button">
        <img src={DeleteIcon} alt="Delete" />
      </button>
    </div>
  );
};
export default DotComponent;

interface DotProps {
  dot: Dot;
  deleteDot: (id: DotId) => void;
}
