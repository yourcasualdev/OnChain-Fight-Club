import React from "react";

type Props = {
    children: React.ReactNode;
};

const TransparentContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full flex mt-12">
            <div className="bg-[#050014] mx-auto w-8/12 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 h-fit p-12 align-center">
                {children}
            </div>
        </div>
    );
};

export default TransparentContainer;