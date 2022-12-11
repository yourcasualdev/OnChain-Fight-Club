import { Reducer } from 'react';

type State = {
    attack: number;
    defense: number;
    speed: number;
};

type Action =
    | { type: 'SET_ATTACK'; payload: { attack: number } }
    | { type: 'SET_DEFENSE'; payload: { defense: number } }
    | { type: 'SET_SPEED'; payload: { speed: number } };


const FighterInitialState: State = {
    attack: 0,
    defense: 0,
    speed: 0,
};

const FigtherReducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'SET_ATTACK': {
            const { attack } = action.payload;
            if (attack < 0 || attack > 100 || state.defense + state.speed + attack > 100) {
                return state;
            }
            return {
                ...state,
                attack,
            };
        }
        case 'SET_DEFENSE': {
            const { defense } = action.payload;
            if (defense < 0 || defense > 100 || state.attack + state.speed + defense > 100) {
                return state;
            }
            return {
                ...state,
                defense,
            };
        }
        case 'SET_SPEED': {
            const { speed } = action.payload;
            if (speed < 0 || speed > 100 || state.attack + state.defense + speed > 100) {
                return state;
            }
            return {
                ...state,
                speed,
            };
        }
        default:
            return state;
    }
};

export { FigtherReducer, FighterInitialState };