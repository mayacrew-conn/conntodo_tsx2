import * as React from 'react';
import ColorChip from './ColorChip';

interface IProps {
    colors: IColor[];
    toggleColor: (colorCode: string) => void;
}
interface IColor {
  colorKey: number;
  colorCode: string;
}

class ColorSelector extends React.PureComponent<IProps> {
    public render() {
        const { colors, toggleColor } = this.props;
        const colorChips = colors.map((color, idx) => {
            return <ColorChip key={color.colorKey} color={color.colorCode} toggleColor={() => toggleColor(color.colorCode)}/>
        });
        return (
            <div>
                {colorChips}
            </div>
        );
  }
}

export default ColorSelector;