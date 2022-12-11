import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import OcfcContext from "../../context/ocfc";
import TransparentContainer from "../../components/TransparentContainer";


const Withdraw = () => {
    const OCFC = useContext(OcfcContext) as OcfcContext;
    const [balance, setBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { getBalance, withdraw } = OCFC;

    useEffect(() => {
        const getBalanceAsync = async () => {
            setIsLoading(true);
            const balance = await getBalance()
            setBalance(balance);
            setIsLoading(false);
        };

        getBalanceAsync();
    }, [getBalance]);

    const handleWithdraw = async () => {
        const tx = await toast.promise(withdraw(), {
            pending: "Withdrawing...",
            success: "Withdrawn!",
            error: "Error withdrawing",
        });

        if (tx) {
            const balance = await getBalance();
            setBalance(balance);
        }
    };


    return (
        <TransparentContainer className="w-4/12">
            <h1 className="text-center font-bold text-3xl text-[#fbfbfe]">Withdraw your money</h1>
            <div className="p-5 flex justify-center">
                <h2 className="text-2xl">Your balance is </h2>
                <h2 className="text-2xl ml-2 font-bold text-[#fbfbfe]">{isLoading ? "Loading..." : balance}</h2>
            </div>
            <div className="flex justify-center p-5">
                <button
                    className="btn btn-warning "
                    onClick={handleWithdraw}
                    type="button"
                >
                    Withdraw
                </button>
            </div>
        </TransparentContainer>
    );
};

export default Withdraw;