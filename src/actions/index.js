export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const APPLY_MEMORY_NUMBER = "APPLY_MEMORY_NUMBER";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator });
}

export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY });
}

export const addToMemory = () => {
    return({ type: ADD_TO_MEMORY });
}

export const applyMemoryNumber = () => {
    return ({ type: APPLY_MEMORY_NUMBER });
}

export const clearMemory = () => {
    return ({ type: CLEAR_MEMORY });
}