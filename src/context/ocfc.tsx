import { useState, useEffect, createContext } from "react";

import Web3 from "web3";
import OCFC from "../contracts/OCFC.json";

interface Ocfc {
    // The address of the current account
    account: string;
    // An object containing the contract's methods
    contract: {
        methods: {
            mintMember(): {
                send(options: { from: string; }): Promise<any>;
            };
            createFight(address: string, move1: number, move2: number, move3: number): {
                send(options: { from: string; }): Promise<any>;
            };
            joinAndFight(fightId: number, move1: number, move2: number, move3: number): {
                send(options: { from: string; }): Promise<any>;
            };
            trainFighter(address: string): {
                send(options: { from: string; }): Promise<any>;
            };
            withdraw(): {
                send(options: { from: string; }): Promise<any>;
            };
        };
    }
}

interface OcfcContext {
    account: string;
    contract: Ocfc["contract"] | null;
    mintMember: () => Promise<any>;
    createFight: (address: string, move1: number, move2: number, move3: number) => Promise<any>;
    joinAndFight: (fightId: number, move1: number, move2: number, move3: number) => Promise<any>;
    trainFighter: (address: string) => Promise<any>;
}

const OcfcContext = createContext<OcfcContext | null>(null);

declare global {
    interface Window {
        ethereum: any;
    }
}


export const OCFCProvider = (props: any) => {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState<Ocfc["contract"] | null>(null);


    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            const ethereum = window.ethereum;
            ethereum.request({ method: "eth_requestAccounts" });

            const web3 = new Web3(ethereum);
            const contract = new web3.eth.Contract(OCFC.abi as any, OCFC.networks["43113"].address) || null;
            setContract(contract);

            setAccount(ethereum.selectedAddress);
            console.log(contract)
        }
    }, []);

    const mintMember = async () => {
        if (!contract) return;

        const result = await contract.methods.mintMember().send({ from: account });
        console.log(contract.methods.mintMember())
        return result;
    }

    const createFight = async (address: string, move1: number, move2: number, move3: number) => {
        if (!contract) return;

        const result = await contract.methods.createFight(address, move1, move2, move3).send({ from: account });
        return result;
    }

    const joinAndFight = async (fightId: number, move1: number, move2: number, move3: number) => {
        if (!contract) return;

        const result = await contract.methods.joinAndFight(fightId, move1, move2, move3).send({ from: account });
        return result;
    }

    const trainFighter = async (address: string) => {
        if (!contract) return;

        const result = await contract.methods.trainFighter(address).send({ from: account });
        return result;
    }

    return (
        <OcfcContext.Provider value={{ account, contract, mintMember, createFight, joinAndFight, trainFighter }}>
            {props.children}
        </OcfcContext.Provider>
    );
}

export default OcfcContext;