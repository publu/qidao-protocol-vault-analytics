import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { formatAmount } from '../../utils/utils'
import { HubData, MaiAddresses } from '../../Connectors/HubData'
import { Network } from '@web3-react/network'
import { Web3ReactStore } from '@web3-react/types'
import { Web3ReactHooks } from '@web3-react/core'
import MaiLogo from '../../imgs/logos/mimatic-red.png'
import CelerLogo from '../../imgs/logos/celer.png'
import RelayLogo from '../../imgs/logos/relay-icon.png'
import { getAddChainParameters } from '../../Connectors/Chains'
import { CrossChainHub__factory, ERC20__factory } from '../../contracts'
import * as metaMaskConnector from '../../Connectors/Metamask'
import { MetaMask } from "@web3-react/metamask"
import { Web3Provider } from '@ethersproject/providers'
import TokenModal from "../Modal";

export const HubInfo = ({ hubData, connector }: { hubData: HubData; connector: [Network, Web3ReactHooks, Web3ReactStore] }) => {
    const [n, hooks] = connector
    const { useIsActive: a, useProvider: p , useChainId: c} = hooks
    let network: Network | MetaMask
    let connectorChainId = c()
    let metaMaskChainId = metaMaskConnector.useChainId()
    let active: boolean 
    let provider: Web3Provider | undefined
    let chainId: number | undefined

    if (metaMaskConnector.useIsActive() && connectorChainId === metaMaskChainId) {
        active = metaMaskConnector.useIsActive()
        provider = metaMaskConnector.useProvider()
        chainId = metaMaskConnector.useChainId()
        network = metaMaskConnector.metaMask
        
    } else {
        active = a()
        provider = p()
        chainId = c()
        network = n
    }
    
    const [hubBalance, setBalance] = useState('0')
    const [celerBalance, setCelerBalance] = useState<string>()
    const [celerLimit, setCelerLimit] = useState<string>()
    const [relayBalance, setRelayBalance] = useState<string>()
    const [relayLimit, setRelayLimit] = useState<string>()
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
                    await network.activate(hubData.chainId)
                    connectStatus(true)
                } catch (ex) {
                    console.warn(ex)
                }
            }
            if (active && provider && chainId) {
                const maiContract = ERC20__factory.connect(MaiAddresses[chainId], provider)
                const hubContract = CrossChainHub__factory.connect(hubData.contractAddress, provider)
                let balance: ethers.BigNumber = await maiContract.balanceOf(hubContract.address)

                setBalance(formatAmount(balance))
                if (hubData.celarToken) {
                    const celerPeggedMaiToken = ERC20__factory.connect(hubData.celarToken, provider)
                    const bridgeBalance = await celerPeggedMaiToken.balanceOf(hubContract.address)
                    setCelerBalance(formatAmount(bridgeBalance))

                    const [, , celerTokenLimit] = await hubContract._able(celerPeggedMaiToken.address)
                    setCelerLimit(formatAmount(celerTokenLimit))
                }

                if (hubData.relayChainToken) {
                    const relayChainMaiToken = ERC20__factory.connect(hubData.relayChainToken, provider)
                    const bridgeBalance = await relayChainMaiToken.balanceOf(hubContract.address)
                    const [, , relayChainTokenLimit] = await hubContract._able(relayChainMaiToken.address)
                    setRelayBalance(formatAmount(bridgeBalance))
                    setRelayLimit(formatAmount(relayChainTokenLimit))
                }
            }
        }

        fetchHubBalance().then()
    })

    return (
        <div>
        <div className="mx-auto w-80">
            <div className="min-w-100 block rounded-lg bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-dm-tertiary dark:hover:bg-gray-700">
                <div className="flex place-content-evenly text-gray-700 dark:text-gray-400">
                    {chainIcon ? (
                        <img className="my-auto h-8 w-8 rounded" src={chainIcon} alt={`${chainName} Icon`} title={`${chainName} Icon`} />
                    ) : (
                        <p className="my-auto font-bold tracking-tight dark:text-white">{hubData.name}</p>
                    )}
                    <div className="w-full divide-y divide-slate-400/[.24] p-2">
                        <div className="ml-auto flex items-center pl-4">
                            <span className="my-auto py-2 px-1">
                                <img src={MaiLogo} alt="Mai Token Icon" className="-mb-1 h-5" />
                            </span>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {hubBalance}</p>
                        </div>
                        {hubData.celarToken && (
                            <div className="ml-auto grid grid-cols-[auto_1fr] items-center pl-4">
                                <span className="my-auto py-2 px-1">
                                    <img src={CelerLogo} alt="Mai Token Icon" className="-mb-1 h-5" />
                                </span>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {celerBalance}</p>
                                <span className="my-auto py-2 px-1" />
                                <p className="font-normal text-gray-700 dark:text-gray-400">Limit: {celerLimit}</p>
                            </div>
                        )}
                        {hubData.relayChainToken && (
                            <div className="ml-auto grid grid-cols-[auto_1fr] items-center pl-4">
                                <span className="my-auto py-2 px-1">
                                    <img src={RelayLogo} alt="Mai Token Icon" className="-mb-1 h-5" />
                                </span>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {relayBalance}</p>
                                <span className="my-auto py-2 px-1" />
                                <p className="font-normal text-gray-700 dark:text-gray-400">Limit: {relayLimit}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="ml-auto flex flex-cols-[auto_1fr] pl-4">
                    <TokenModal buttonTitle="Add New Token" active={active} provider={provider} chainId={chainId}/>
                    <TokenModal buttonTitle="Change Limit" active={active} provider={provider} chainId={chainId}/>
                </div>
            </div>
        </div>
        </div>

    )
}
