import * as solanaWeb3 from '@solana/web3.js'
import { PublicKey } from '@solana/web3.js'
import { AccountLayout, getMint, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import React, { useState } from 'react'
import { Buffer } from 'buffer'
import useAsyncEffect from 'use-async-effect'
import { MaiAddresses } from '../../Connectors/HubData'
import SolanaChainLogo from '../../imgs/logos/chains/solana-networkk.svg'
import MaiLogo from '../../imgs/logos/mimatic-red.png'
;(window as any).global = window
//Monkey patch via https://github.com/solana-labs/wallet-adapter/issues/35#issuecomment-908484829
global.Buffer = global.Buffer || Buffer
;(window as any).process = {
    version: '',
}

AllBridgeInfo.propTypes = {}

const ALLBRIDGE_PUBKEY = 'CYEFQXzQM6E5P8ZrXgS7XMSwU3CiqHMMyACX4zuaA2Z4'

function AllBridgeInfo() {
    const [maiSolBalance, setMaiSolBalance] = useState(0)

    useAsyncEffect(async () => {
        let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'))
        let tknAccounts = await connection.getTokenAccountsByOwner(new PublicKey(ALLBRIDGE_PUBKEY), {
            programId: TOKEN_PROGRAM_ID,
        })
        for (const e of tknAccounts.value) {
            const accountInfo = AccountLayout.decode(e.account.data)
            if (connection && accountInfo.mint.toString() === MaiAddresses[0]) {
                let mintInfo = await getMint(connection, accountInfo.mint)
                setMaiSolBalance(Number(accountInfo.amount / BigInt(10 ** mintInfo.decimals)))
            }
        }
    }, [])

    return (
        <div className="mx-auto w-80">
            <div className="min-w-100 block rounded-lg bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-dm-tertiary dark:hover:bg-gray-700">
                <div className="flex place-content-evenly text-gray-700 dark:text-gray-400">
                    <img className="h-8 w-8 rounded" src={SolanaChainLogo} alt={`Solana Icon`} title={`Solana Icon`} />
                    <div className="mr-auto flex items-center pl-4">
                        <span className="my-auto py-2 px-1">
                            <img src={MaiLogo} alt="Mai Token Icon" className="-mb-1 h-5" />
                        </span>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {maiSolBalance.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBridgeInfo
