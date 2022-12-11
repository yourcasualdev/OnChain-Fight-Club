import React, { useContext } from "react";
import { toast } from "react-toastify";

import TransparentContainer from "../../components/TransparentContainer";
import OcfcContext from "../../context/ocfc";



const TrainFighter = () => {
    const OCFC = useContext(OcfcContext) as OcfcContext;

    const { account, trainFighter } = OCFC;

    const handleTrainFighter = async () => {
        const result = await toast.promise(
            trainFighter(account),
            {
                pending: "Training...",
                success: "Fighter trained!",
                error: "Failed to train fighter",
            },
        );

        console.log(result);
    };

    return (
        <TransparentContainer className="w-4/12">
            <h1 className="text-center font-bold text-3xl text-[#fbfbfe]">Train your fighter</h1>
            <div className="flex justify-center p-5">
                <button
                    className="btn btn-warning "
                    onClick={handleTrainFighter}
                    type="button"
                >
                    Train
                </button>
            </div>
        </TransparentContainer>
    );
};

export default TrainFighter;