import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import maiAbi from './abis/maiAbi.json'
import { formatAmount } from './utils/utils'
import { AddressData, MaiAddresses } from './Connectors/HubData'
import { Network } from '@web3-react/network'
import { Web3ReactStore } from '@web3-react/types'
import { Web3ReactHooks } from '@web3-react/core'
import MaiLogo from './imgs/logos/mimatic-red.png'
import { getAddChainParameters } from './Connectors/Chains'

export const NetworkInfo = ({
    networkData,
    connector,
}: {
    networkData: AddressData
    connector: [Network, Web3ReactHooks, Web3ReactStore]
}) => {
    const [network, hooks] = connector
    const { useIsActive, useProvider, useChainId } = hooks
    const active = useIsActive()
    const provider = useProvider()
    const chainId = useChainId()
    const { hub, name } = networkData
    const [hubBalance, setBalance] = useState('0')
    const [isConnected, connectStatus] = useState(false)
    const chainParameters = getAddChainParameters(chainId)

    let chainIcon
    if (chainParameters && chainParameters.iconUrls) {
        ;[chainIcon] = chainParameters.iconUrls
    }

    let chainName
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
                const maiContract = new ethers.Contract(MaiAddresses[chainId], maiAbi, provider)
                let amount = await maiContract.balanceOf(hub)
                setBalance(formatAmount(amount, name))
            }
        }
        fetchHubBalance().then()
    })

    return (
        <div className="mx-auto w-80">
            <div className="min-w-100 block rounded-lg bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-dm-tertiary dark:hover:bg-gray-700">
                <div className="flex place-content-evenly text-gray-700 dark:text-gray-400">
                    {chainIcon ? (
                        <img className="h-8 w-8 rounded" src={chainIcon} alt={`${chainName} Icon`} title={`${chainName} Icon`} />
                    ) : (
                        <p className="font-bold tracking-tight dark:text-white">{name}</p>
                    )}
                    <div className="mr-auto flex items-center pl-4">
                        <span className="my-auto py-2 px-1">
                            <img src={MaiLogo} alt="Mai Token Icon" className="-mb-1 h-5" />
                        </span>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {hubBalance}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
