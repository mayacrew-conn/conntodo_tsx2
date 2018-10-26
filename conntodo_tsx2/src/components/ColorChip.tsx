import * as React from 'react';
import './color-chip.css';

interface IProps {
    color: string;
    toggleColor: (e: React.MouseEvent) => void;
}

const ColorChip: React.SFC<IProps> = ({color, toggleColor}) => {
    return (
        <div className='color-chip' onClick={e => toggleColor(e)} style={{backgroundColor: color}} />
    )
}

export default ColorChip;

// splice