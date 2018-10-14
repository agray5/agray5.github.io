import styled from 'styled-components';
import {hasAll} from '../Utils/lodashEx'

export const positions = {
    TOP_RIGHT: Symbol("Top Right"),
    TOP_LEFT: Symbol("Top Left"),
    BOTTOM_RIGHT: Symbol("Bottom Right"),
    BOTTOM_LEFT: Symbol("Bottom Left")
}
export const absPos = (position, margins={x: 25, y: 25}) => {

    if(!hasAll(margins, ['x', 'y'])){
        throw Error("Margins object must contain an x and y property.")
    }

    let positionVals = {};
    switch(position){
        case positions.TOP_LEFT: 
            positionVals.y = [`${margins.y}%`, 'top', margins.y];
            positionVals.x = [`${margins.x}%`, 'left', margins.x];
            break;
        case positions.TOP_RIGHT:
            positionVals.y = [`${margins.y}%`, 'top', margins.y];
            positionVals.x = [`${margins.x}%`, 'right', 0];
            break;
        case positions.BOTTOM_LEFT:
            positionVals.y = [`${margins.y}%`, 'bottom', 0];
            positionVals.x = [`${margins.x}%`, 'left', margins.x];
            break;
        case positions.BOTTOM_RIGHT:
            positionVals.y = [`${margins.y}%`, 'bottom', 0];
            positionVals.x = [`${margins.x}%`, 'right', 0];
            break;
        default:
            console.warn(`Warning: absPos cannot accept ${position}. It is not a 
                          valid position.`);
    }
        
    return `position: absolute; 
            ${positionVals.y[1]}: ${positionVals.y[0]}; 
            ${positionVals.x[1]}: ${positionVals.x[0]};
            transform: translate(-${positionVals.x[2]}%, -${positionVals.y[2]}%);`
}
