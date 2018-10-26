import * as React from 'react';
import './App.css';
import ColorSelector from './components/ColorSelector';
import Form from './components/Form';
import TodoList from './components/TodoList';


interface IState {
  inputText: string;
  colorPicked: string;
  items: Item[];
  colors: IColor[];
}
interface Item {
  id: number;
  content: string;
  color: string;
  done: boolean;
}
interface IColor {
  colorKey: number;
  colorCode: string;
}

class App extends React.Component<{}, IState> {
  public state: IState = {
    inputText: '',
    colorPicked: '',
    items: [
      { id: 1, content: '리액트 소개', color: '#000', done: false },
      { id: 2, content: 'JSX', color: '#000', done: true },
      { id: 3, content: '라이프사이클', color: '#000', done: false },
    ],
    colors: [
      { colorKey:1, colorCode: '#a51' },
      { colorKey:2, colorCode: '#51a' },
      { colorKey:3, colorCode: '#1a5' },
      { colorKey:4, colorCode: '#15a' },
    ]
  }
  // private inputDOM: HTMLInputElement = null;
  // private input = '';
  private id = 4;
  public render() {
    const { items, colors, inputText } = this.state;
    return (
      <div className="todo-app">
        <header>
          <h1>오늘 할 일</h1>
        </header>
        <ColorSelector colors={colors} toggleColor={this.toggleColor}/>
        {/* UnControlled Component - Form */}
        <Form input={inputText} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
        <TodoList items={items} toggleChecked={this.toggleChecked} toggleDelete={this.toggleDelete}/>
      </div>
    );
  }
  private toggleColor = (color: string) => {
    console.log(color)
    this.setState(({colorPicked}) => ({ colorPicked: color }));
  }
  // private handleInput = (inputDOM: HTMLInputElement) => {
  //   this.inputDOM = inputDOM;
  //   console.log(inputDOM);
  // }
  // private handleChange = (value: string) => {
  //   console.log(value)
  //   this.input = value;
  // }
  private handleChange = (value: string) => {
    console.log(value)
    this.setState((current) => ({ ...current, inputText: value}));
  }
  // private handleAdd = () => {
  //   const { items, colorPicked } = this.state;
  //   const newitems = [
  //     ...items,
  //   ];
  //   newitems.push({ id: this.id++, content: this.input, color: colorPicked, done: false })
  //   this.setState((current) => ({ ...current, items: newitems}));
  //   this.inputDOM.value = '';

  // }
  private handleAdd = () => {
    const { items, colorPicked, inputText } = this.state;
    if(inputText !== '') {
      const newitems = [
        ...items,
      ];
      newitems.push({ id: this.id++, content: inputText, color: colorPicked, done: false })
      this.setState((current) => ({ ...current, items: newitems}));
      // this.inputDOM.value = '';
      this.setState((current) => ({ ...current, inputText: ''}));
    } 
  }
  private toggleChecked = (idx: number) => {
    const { items } = this.state;
    const newitems = [
      ...items,
    ];
    newitems[idx].done = !newitems[idx].done;
    this.setState((current) => ({ ...current, 
      items: newitems,
    }));
  };
  private toggleDelete = (idx: number) => {
    const { items } = this.state;
    const newitems = [
      ...items,
    ];
    newitems.splice(idx, 1);
    this.setState((current) => ({ ...current, 
      items: newitems,
    }))
  };
}

export default App;
