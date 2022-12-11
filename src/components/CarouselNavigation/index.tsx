import React from "react";

type Props = {
    elements:
    {
        title: string
    }[],
    activeTabIndex: number,
    changeActiveTabIndex: (index: number) => void,
    [x: string]: any,
}

const CarouselNavigation: React.FC<Props> = ({ elements, activeTabIndex, changeActiveTabIndex, ...remainingProps }) => {
    return (
        <div className="flex items-center justify-center" {...remainingProps}>
            <div className="tabs tabs-boxed">
                {elements.map((element, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`tab ${activeTabIndex === index ? "tab-active" : ""} tab-lifted tab-rounded`}
                        onClick={() => changeActiveTabIndex(index)}
                    >
                        {element.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarouselNavigation;