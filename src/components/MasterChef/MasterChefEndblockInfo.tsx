import React, {useEffect, useState} from "react";
import {EndblockData} from "../../Connectors/HubData";
import {Network} from "@web3-react/network";
import {Web3ReactHooks} from "@web3-react/core";
import {Web3ReactStore} from "@web3-react/types";
import {getAddChainParameters} from "../../Connectors/Chains";
import {ethers} from "ethers";

export const MasterChefEndblockInfo = ({
                                           networkData,
                                           connector,
                                       }: {
    networkData: EndblockData
    connector: [Network, Web3ReactHooks, Web3ReactStore]
}) => {
    const [network, hooks] = connector
    const {useIsActive, useProvider, useChainId} = hooks
    const active = useIsActive()
    const provider = useProvider()
    const chainId = useChainId()
    const {contractAddress, name} = networkData
    const [countdown, setCountdown] = useState('0')
    const [isConnected, connectStatus] = useState(false)
    const chainParameters = getAddChainParameters(chainId)

    let chainIcon
    if (chainParameters && chainParameters.iconUrls) {
        ;[chainIcon] = chainParameters.iconUrls
    }

    let chainName = ''
    if (chainParameters && chainParameters.chainName) {
        chainName = chainParameters.chainName
    }

    useEffect(() => {
        async function fetchHubBalance() {
            if (!isConnected) {
                try {
                    await network.activate(networkData.chainId)
                    connectStatus(true)
                } catch (ex) {
                    console.warn(ex)
                }
            }

            if (active && provider && chainId) {
                const otherContract = networkData.factory.connect(networkData.contractAddress, provider)
                let balance: ethers.BigNumber = await otherContract.endBlock()
                setCountdown(balance.toBigInt().toString())
            }
        }

        fetchHubBalance().then()
    })

    return (
        <div className="mx-auto w-80 cursor-pointer" onClick={() => window.open(`${networkData.countdownAddress}/${countdown}`)}>
            <div className="min-w-100 block rounded-lg bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-dm-tertiary dark:hover:bg-gray-700">
                <div className="flex place-content-evenly text-gray-700 dark:text-gray-400">
                    {chainIcon ? (
                        <img className="my-auto h-8 w-8 rounded" src={chainIcon} alt={`${chainName} Icon`}
                             title={`${chainName} Icon`}/>
                    ) : (
                        <p className="my-auto font-bold tracking-tight dark:text-white">{name}</p>
                    )}
                    <div className="mr-auto">
                        <div className="ml-auto flex items-center pl-4">
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <b>{contractAddress.slice(1, 5)}:</b> Countdown: {countdown}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}