import * as React from 'react';
import './TodoItem.css';

interface IProps {
  item: Item;
  toggleChecked: (event: React.MouseEvent<HTMLDivElement>) => void;
  toggleDelete: () => void;
}
interface Item {
  id: number;
  content: string;
  color: string;
  done: boolean;
}

const TodoItem: React.SFC<IProps> = ({item, toggleChecked, toggleDelete}) => {
  return (
    <div className='todo-item' onClick={e => toggleChecked(e)}>
      <div className='item'>
        <button onClick={(evt)=> {
          evt.stopPropagation();
          toggleDelete();
        }}>X</button>
        <h4 style={{color: item.color}}>{item.content}</h4>
      </div>
      {
        item.done && 'V'
      }
    </div>
  )
}

export default TodoItem;

// splice