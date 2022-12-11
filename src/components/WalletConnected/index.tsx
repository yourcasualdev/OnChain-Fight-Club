import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
    account: string;
    isWalletConnected: boolean;
    onClick: () => any;
    className?: string;

    [x: string]: any;
};

const WalletConnected: React.FC<Props> = ({ account, isWalletConnected, onClick, className, ...remainingProps }) => {
    const shortAccount = account.slice(0, 6) + "..." + account.slice(-4);

    const router = useRouter();

    useEffect(() => {
        if (!isWalletConnected && window.location.pathname !== "/") {
            router.push("/");
        }
    }, [isWalletConnected, router]);

    return (
        <div className={`flex items-center justify-center ${className}`} {...remainingProps}>
            <button
                type="button"
                className="border-[#fbfbfe] text-[#fbfbfe] border-x-2 border-y-2 font-bold py-2 px-4 rounded-md"
                onClick={onClick}
            >
                {isWalletConnected ? shortAccount : "Connect Wallet"}
            </button>
        </div>
    );
};

export default WalletConnected;