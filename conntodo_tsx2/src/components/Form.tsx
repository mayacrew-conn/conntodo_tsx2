import * as React from 'react';

interface IProps{
  input: string;
  handleChange: (value: string) => void;
  handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Form: React.SFC<IProps> = ({ input, handleChange, handleAdd }) => {
  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(evt) => handleChange(evt.target.value)} />
      <button onClick={e => handleAdd(e)}>ADD</button>
    </div>
  );
};

export default Form;
