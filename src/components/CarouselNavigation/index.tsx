import React from "react";

type Props = {
    elements:
    {
        title: string,
        onCLick: () => any,
    }[],
    [x: string]: any,
}

const CarouselNavigation: React.FC<Props> = ({ elements, ...remainingProps }) => {
    return (
        <div className="flex items-center justify-center" {...remainingProps}>
            <div className="flex items-center justify-between w-4/12 ">
                {elements.map((element, index) => (
                    <button
                        key={index}
                        type="button"
                        className="border-[#fbfbfe] text-[#fbfbfe] border-x-2 border-y-2 font-bold py-2 px-4 rounded-md"
                        onClick={element.onCLick}
                    >
                        {element.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarouselNavigation;