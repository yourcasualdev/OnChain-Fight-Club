import React, { useContext, useReducer, useState } from "react";
import TransparentContainer from "../../components/TransparentContainer";
import OCFCContext from "../../context/ocfc";
import { FighterInitialState, FigtherReducer } from "../../reducers/createFigther";
import { FIGHTS } from "../../constants";

const JoinFight: React.FC = () => {
    const OCFC = useContext(OCFCContext) as OCFCContext;

    const { account, joinAndFight } = OCFC;

    const [stats, dispatch] = useReducer(FigtherReducer, FighterInitialState);

    const [fightID, setFightID] = useState(0);

    const handleJoinFight = async (index: number, attack: number, defense: number, speed: number) => {
        const result = await joinAndFight(index, attack, defense, speed);
    }

    const remainingPoints = 100 - (stats.attack + stats.defense + stats.speed);

    return (
        <TransparentContainer className="w-8/12">
            <div className="p-3">
                <h1 className="text-left font-bold text-5xl text-[#fbfbfe]">Join and Fight</h1>
            </div>
            <div className="w-full flex flex-row justify-between">
                <div className="basis-1/4">
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
                    <h3>Your remaining points: {remainingPoints}</h3>
                </div>
                <div className="basis-3/4 ml-5">
                    <h2 className="text-center text-2xl p-2 font-mono">Fights</h2>
                    <table className="table w-full table-compact table-striped p-2">
                        <thead>
                            <tr>
                                <th className="text-left">Fighter</th>
                                <th className="text-left">Attack</th>
                                <th className="text-left">Defense</th>
                                <th className="text-left">Speed</th>
                                <th className="text-left">Join</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FIGHTS.map((fight, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{fight.fighter}</td>
                                        <td>{fight.attack}</td>
                                        <td>{fight.defense}</td>
                                        <td>{fight.speed}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className={`btn ${index % 2 === 0 ? 'btn-primary' : 'btn-warning'}`}
                                                onClick={() => handleJoinFight(fightID, stats.attack, stats.defense, stats.speed)}
                                            >
                                                Join
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div>
                        <h3 className="">Debug</h3>
                        <input type="number" value={fightID} onChange={e => setFightID(Number(e.target.value))} />
                    </div>
                </div>
            </div>
        </TransparentContainer>

    );
};

export default JoinFight;