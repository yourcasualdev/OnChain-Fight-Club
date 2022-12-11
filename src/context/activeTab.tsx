import { createContext, useState } from "react";

interface Context {
    activeTabIndex: number;
    changeActiveTabIndex: (index: number) => void;
}

interface Props {
    children: React.ReactNode;
}

const ActiveTabContext = createContext<Context | null>(null);

const ActiveTabProvider = ({ children }: Props) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const changeActiveTabIndex = (index: number) => {
        setActiveTabIndex(index);
    }

    return (
        <ActiveTabContext.Provider value={{ activeTabIndex, changeActiveTabIndex }}>
            {children}
        </ActiveTabContext.Provider>
    );
};

export { ActiveTabContext, ActiveTabProvider };
