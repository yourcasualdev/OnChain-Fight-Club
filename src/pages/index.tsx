import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import OCFContext from '../context/ocfc'

export default function Home() {
  const OCFC = useContext(OCFContext);
  const [fightId, setFightId] = useState<number | null>(null);
  const [move1, setMove1] = useState<number>(0);
  const [move2, setMove2] = useState<number>(0);
  const [move3, setMove3] = useState<number>(0);

  if (!OCFC) return null;

  const { account, contract, mintMember, createFight, joinAndFight, trainFighter, withdraw } = OCFC;


  const handleMintMember = async () => {
    if (!contract) return;

    await mintMember();
  }

  const handleCreateFight = async () => {
    if (!contract) return;

    const result = await createFight(account, move1, move2, move3);
    setFightId(result.events.FightCreated.returnValues.fightId);
  }

  const handleJoinFight = async () => {
    if (!contract || !fightId) return;

    await joinAndFight(fightId, move1, move2, move3);
  }

  return (
    <div>
      {/* Mint a member */}
      <button onClick={handleMintMember}>Mint Member</button>

      {/* Create a fight */}
      <div>
        <label htmlFor="move1">Move 1: </label>
        <input
          type="number"
          id="move1"
          value={move1}
          onChange={e => setMove1(parseInt(e.target.value))}
        />
        <label htmlFor="move2">Move 2: </label>
        <input
          type="number"
          id="move2"
          value={move2}
          onChange={e => setMove2(parseInt(e.target.value))}
        />
        <label htmlFor="move3">Move 3: </label>
        <input
          type="number"
          id="move3"
          value={move3}
          onChange={e => setMove3(parseInt(e.target.value))}
        />
        <button onClick={handleCreateFight}>Create Fight</button>
      </div>

      {/* Join a fight */}
      {fightId && (
        <div>
          <label htmlFor="fight-id">Fight ID: </label>
          <input
            type="number"
            id="fight-id"
            value={fightId}
            onChange={e => setFightId(parseInt(e.target.value))}
          />
          <button onClick={handleJoinFight}>Join Fight</button>
        </div>
      )}
    </div>
  );
}