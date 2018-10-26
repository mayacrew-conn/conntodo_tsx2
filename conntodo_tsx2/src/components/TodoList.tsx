import * as React from 'react';
import TodoItem from './TodoItem';

interface IProps{
  items: Item[];
  toggleChecked: (idx: number) => void;
  toggleDelete: (idx: number) => void;
}

interface Item{
  id: number;
  content: string;
  color: string;
  done: boolean;
}

class TodoList extends React.PureComponent<IProps> {
  public render() {
    const { items, toggleChecked, toggleDelete } = this.props;
    const todoitems = items.map((item, idx) => {
      return <TodoItem key={item.id} item={item} toggleChecked={() => toggleChecked(idx)} toggleDelete={() => toggleDelete(idx)}/>
    });
    return (
      <div>
        {todoitems}
      </div>
    );
  }
}

export default TodoList;