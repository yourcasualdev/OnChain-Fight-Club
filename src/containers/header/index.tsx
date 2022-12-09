import React, { useContext } from "react";

import WalletConnected from "../../components/WalletConnected";
import OCFContext from "../../context/ocfc";

const Header: React.FC = () => {

    const OCFC = useContext(OCFContext);

    if (!OCFC) return null;

    const { account, isWalletConnected, connectWallet } = OCFC;

    return (
        <header className='w-full bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 h-20 p-2 align-center flex absolute top-0'>
            <div className='left-header m-auto justify-center  w-6/12 h-full flex'>

            </div>
            <div className='w-full text-center m-auto'>
                <h1 className='text-[#fbfbfe] text-3xl font-extrabold'>OnChain Fight Club</h1>
            </div>
            <div className='right-header m-auto justify-end w-6/12 h-full flex'>
                <WalletConnected account={account} isWalletConnected={isWalletConnected} onClick={connectWallet} className=" mr-10" />
            </div>
        </header>
    );
};

export default Header;