import React, {ChangeEvent, useState} from 'react';
import {useAccount, useChainId, useIsActive, useProvider} from "../Connectors/Metamask";
import {CrossChainHub} from "../contracts";
import {addOrSwapChain} from "../utils/utils";
import {ChainKey} from "../Connectors/Chains";

export type ButtonType = "ADD_TOKEN" | "CHANGE_LIMIT"

interface TokenFormProps {
    buttonTitle: string
    hubContract: CrossChainHub | undefined
    buttonType: ButtonType
    tokenToChange: string | undefined
    hubChainId: number
}

const TokenForm: React.FC<TokenFormProps> = ({buttonTitle, hubContract, buttonType, tokenToChange, hubChainId}) => {

    const [tokenAddress, setTokenAddress] = useState('')
    const [limit, setLimit] = useState(0)
    let metaMaskIsActive = useIsActive()
    let chainId = useChainId()
    let metamaskProvider = useProvider()
    let account = useAccount()

    const onClick = async () => {
        if (metaMaskIsActive && chainId && metamaskProvider) {
            if (account && !(chainId === hubChainId)) {
                await addOrSwapChain(metamaskProvider, account, hubChainId as ChainKey)
            }
            let signerHubContract = hubContract?.connect(metamaskProvider.getSigner())
            if(signerHubContract && chainId === hubChainId) {
                if (buttonType === "ADD_TOKEN") {
                    const tx = await signerHubContract.addAsset(tokenAddress)
                    await tx.wait(1)
                } else if (buttonType === "CHANGE_LIMIT") {
                    if (!tokenToChange) {
                        alert("Error: No token provided")
                        return;
                    }
                    const tx = await signerHubContract.setLimit(tokenToChange, limit)
                    await tx.wait(1)
                } else {
                    alert("Error: Unknown Button")
                }
            }

        } else {
            alert("Cannot connect to network")
        }

        setTokenAddress('');
        setLimit(0);
    };

    const handleTokenChange = (e: ChangeEvent<HTMLInputElement>) => setTokenAddress(e.target.value)
    const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => setLimit(parseFloat(e.target.value))

    if (buttonType === "ADD_TOKEN") {
        return (
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-token-name">
                            Token Address
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            type="text"
                            name="tokenAddress"
                            id="inline-token-address"
                            value={tokenAddress}
                            onChange={handleTokenChange}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-gray-500 font-bold py-2 px-4 rounded"
                            type="button" onClick={onClick}>
                            {buttonTitle}
                        </button>
                    </div>
                </div>
            </form>
        );
    } else if (buttonType === "CHANGE_LIMIT") {
        return (
            <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-hub-limit">
                            Limit
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            type="text"
                            name="limit"
                            id="inline-hub-limit"
                            value={limit}
                            onChange={handleLimitChange}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-gray-500 font-bold py-2 px-4 rounded"
                            type="button" onClick={onClick}>
                            {buttonTitle}
                        </button>
                    </div>
                </div>
            </form>
        );
    } else {
        alert("Unknown Button")
        return null
    }

}

export default TokenForm