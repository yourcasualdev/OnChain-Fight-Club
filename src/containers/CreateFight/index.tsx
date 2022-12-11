import React, { useContext, useReducer, Reducer, useState } from "react";
import { toast } from 'react-toastify';

import OCFC from "../../context/ocfc";
import { ActiveTabContext } from "../../context/activeTab";


const CreateFight: React.FC = () => {
    type State = {
        attack: number;
        defense: number;
        speed: number;
    };

    type Action =
        | { type: 'SET_ATTACK'; payload: { attack: number } }
        | { type: 'SET_DEFENSE'; payload: { defense: number } }
        | { type: 'SET_SPEED'; payload: { speed: number } };


    const initialState: State = {
        attack: 0,
        defense: 0,
        speed: 0,
    };

    const reducer: Reducer<State, Action> = (state, action) => {
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

    const OCFCContext = useContext(OCFC);
    const ActiveTab = useContext(ActiveTabContext);

    const [stats, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(false);

    if (!OCFCContext) return null;
    if (!ActiveTab) return null;

    const { account, createFight } = OCFCContext;
    const { changeActiveTabIndex } = ActiveTab;

    const handleCreateFight = async () => {
        if (!account) return;
        const { attack, defense, speed } = stats;

        try {
            setIsLoading(true);
            const result = await toast.promise(
                createFight(account, attack, defense, speed),
                {
                    pending: 'Creating Fight...',
                    success: 'Fight Created!',
                    error: 'Error Creating Fight',
                },
                {
                    theme: "dark",
                    position: "bottom-center",
                    autoClose: 3000,
                }
            );
            setIsLoading(false);
            result.status = true ? changeActiveTabIndex(1) : null;
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            return;
        }
    };

    const remainingPoints = 100 - (stats.attack + stats.defense + stats.speed);

    return (
        <div className="w-full flex mt-12">
            <div className="bg-[#050014] mx-auto w-8/12 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 h-fit p-12 align-center">
                <h1 className="text-left font-bold text-5xl text-[#fbfbfe]">Create Fight</h1>
                <p className="mt-2 font-extralight  text-lg">{`Give your warrior stats. You have ${remainingPoints} points to give your Fighther`}</p>
                <form>
                    <label className="block mt-4">
                        <h3 className="p-1 font-bold">Attack Damage</h3>
                        <input type="range" min="0" max="100"
                            value={stats.attack}
                            onChange={(e) => dispatch({ type: 'SET_ATTACK', payload: { attack: Number(e.target.value) } })}
                            className="range range-primary" />
                        <span className="range-value">{stats.attack}</span>
                    </label>
                    <label className="block mt-4">
                        <h3 className="p-1 font-bold">Defense</h3>
                        <input type="range" min="0" max="100"
                            value={stats.defense}
                            onChange={(e) => dispatch({ type: 'SET_DEFENSE', payload: { defense: Number(e.target.value) } })}
                            className="range range-secondary" />
                        <span className="range-value">{stats.defense}</span>
                    </label>
                    <label className="block mt-4">
                        <h3 className="p-1 font-bold">Speed</h3>
                        <input type="range" min="0" max="100"
                            value={stats.speed}
                            onChange={(e) => dispatch({ type: 'SET_SPEED', payload: { speed: Number(e.target.value) } })}
                            className="range range-warning" />
                        <span className="range-value">{stats.speed}</span>
                    </label>
                </form>
                <div className="flex justify-center w-full">
                    {
                        !isLoading ?
                            <button type="button" className="btn btn-primary mt-4" onClick={handleCreateFight}>Create Fight</button>
                            :
                            <button type="button" className="btn btn-primary mt-4" disabled>Loading</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateFight;