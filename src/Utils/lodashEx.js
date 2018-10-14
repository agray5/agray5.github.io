import {has} from 'lodash'

export const hasAll = (object, props) => {
    return props.every((prop) => has(object, prop));
}

export const hasSome = (object, props) => {
    return props.some((prop) => has(object, prop));
}