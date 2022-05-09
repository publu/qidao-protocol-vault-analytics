import React, {ChangeEvent, useState} from 'react';
import {useIsActive, useProvider, useChainId} from "../Connectors/Metamask";
import {CrossChainHub} from "../contracts";

interface TokenFormProps {
    buttonTitle: string
    hubContract: CrossChainHub | undefined
}

const AddTokenForm: React.FC<TokenFormProps> = ({buttonTitle, hubContract}) => {
   
    const [tokenAddress, setTokenAddress] = useState('')
    const [limit, setLimit] = useState(0)
    let metaMaskIsActive= useIsActive()
    let chainId = useChainId()
    let provider = useProvider()

    const onClick = () => {
        if (buttonTitle === "Add New Token") {
            if (metaMaskIsActive && chainId && provider) {
                hubContract?.addAsset(tokenAddress)
                console.log("Adding New Token")
                console.log(chainId)
                console.log(provider)
            } else {
                console.log(metaMaskIsActive)
                console.log(chainId)
                console.log(provider)
                alert("Cannot connect to network")
            }
        } else if (buttonTitle === "Change Limit") {
            if (metaMaskIsActive && chainId && provider) {

                hubContract?.setLimit(tokenAddress, limit)
                console.log("Changing Limit")
            } else {
                console.log(metaMaskIsActive)
                console.log(chainId)
                console.log(provider)
                alert("Cannot connect to network")
            }
        } else {
            alert("Error: Unknown Button")
        }

        setTokenAddress('');
        setLimit(0);
    };

    const handleTokenChange = (e: ChangeEvent<HTMLInputElement>) => setTokenAddress(e.target.value)
    const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => setLimit(parseFloat(e.target.value))

    if (buttonTitle === "Add New Token") {
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
    } else if (buttonTitle === "Change Limit") {
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

  export default AddTokenForm