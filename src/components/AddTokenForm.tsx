import React, {ChangeEvent, useState} from 'react';
import {ethers} from "ethers";

interface TokenFormProps {
    buttonTitle: string
    active: boolean;
    provider: ethers.providers.Web3Provider | undefined
    chainId: number | undefined
}

const AddTokenForm: React.FC<TokenFormProps> = ({buttonTitle, provider, chainId, active}) => {
   
    const [tokenAddress, setTokenAddress] = useState('')
    const [limit, setLimit] = useState(0)

    const onClick = () => {
        if (buttonTitle === "Add New Token") {
            if (active && chainId && provider) {
                //Insert check to see if token already exists in hub and provide error message
                //else
                //Call addAsset(tokenAddress)
                //setLimit(limit)
                console.log("Add New Token")
            } else {
                alert("Cannot connect to network")
            }
        } else if (buttonTitle === "Change Limit") {
            if (active && chainId && provider) {
                //Insert check to see if token doesn't already exist in hub and provide error message
                //else
                //Call setLimit(tokenAddress, limit)
                console.log("Change Limit")
            } else {
                alert("Cannot connect to network")
            }
        } else {
            alert("Error: Unknown Button")
        }
        console.log(tokenAddress)
        console.log(limit)
        console.log(active)
        setTokenAddress('');
        setLimit(0);
    };

    const handleTokenChange = (e: ChangeEvent<HTMLInputElement>) => setTokenAddress(e.target.value)
    const handleLimitChange = (e: ChangeEvent<HTMLInputElement>) => setLimit(parseFloat(e.target.value))

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
  }

  export default AddTokenForm