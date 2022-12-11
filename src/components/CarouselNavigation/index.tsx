import React from "react";

type Props = {
    titles: string[],
    activeTabIndex: number,
    changeActiveTabIndex: (index: number) => void,
    [x: string]: any,
}

const CarouselNavigation: React.FC<Props> = ({ titles, activeTabIndex, changeActiveTabIndex, ...remainingProps }) => {
    return (
        <div className="flex items-center justify-center" {...remainingProps}>
            <div className="tabs tabs-boxed">
                {titles.map((title, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`tab ${activeTabIndex === index ? "tab-active" : ""} tab-lifted tab-rounded`}
                        onClick={() => changeActiveTabIndex(index)}
                    >
                        {title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarouselNavigation;