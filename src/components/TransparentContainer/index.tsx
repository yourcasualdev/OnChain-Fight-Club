import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // [key: string] is a workaround for the following error:
};

const TransparentContainer: React.FC<Props> = ({ children, className, ...remainingProps }) => {
    return (
        <div  {...remainingProps} className="w-full flex mt-12">
            <div className={`bg-[#050014] mx-auto bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 h-fit p-12 align-center ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default TransparentContainer;