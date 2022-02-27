import type { AddEthereumChainParameter } from '@web3-react/types'

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
}

const AVAX: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
}

const ONE: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Harmony',
    symbol: 'ONE',
    decimals: 18,
}

const MOVR: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Moonriver',
    symbol: 'MOVR',
    decimals: 18,
}

const CRO: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18,
}

const BNB: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
}

const XDAI: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'XDAI',
    symbol: 'XDAI',
    decimals: 18,
}

const METIS: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Metis',
    symbol: 'METIS',
    decimals: 18,
}
const IOTX: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Iotex',
    symbol: 'IOTX',
    decimals: 18,
}

const CELO: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Celo',
    symbol: 'CELO',
    decimals: 18,
}

interface BasicChainInformation {
    urls: string[]
    name: string
}

interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency']
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}

function isExtendedChainInformation(
    chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
    return !!(chainInformation as ExtendedChainInformation).nativeCurrency
}

export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
    const chainInformation = CHAINS[chainId]
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        }
    } else {
        return chainId
    }
}

export const ChainId = {
    MAINNET: 1,
    ROPSTEN: 3,
    RINKEBY: 4,
    GORLI: 5,
    CRONOS: 25,
    KOVAN: 42,
    BSC: 56,
    BSC_TESTNET: 97,
    XDAI: 100,
    HECO: 128,
    HECO_TESTNET: 256,
    MATIC: 137,
    MATIC_TESTNET: 80001,
    FANTOM: 250,
    FANTOM_TESTNET: 4002,
    BOBA: 288,
    METIS: 1088,
    MOONRIVER: 1285,
    MOONBASE: 1287,
    IOTEX: 4689,
    ARBITRUM: 42161,
    CELO: 42220,
    AVALANCHE: 43114,
    FUJI: 43113,
    AURORA: 1313161554,
    HARMONY: 1666600000,
    HARMONY_TESTNET: 1666700000,
}

export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
    1: { urls: ['https://cloudflare-eth.com'], name: 'Mainnet' },
    25: {
        urls: ['https://evm-cronos.crypto.org'],
        name: 'Cronos',
        nativeCurrency: CRO,
        blockExplorerUrls: ['https://cronos.org/explorer/'],
    },
    56: {
        urls: ['https://bsc-dataseed.binance.org/'],
        name: 'BNB Chain',
        nativeCurrency: BNB,
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    100: {
        urls: ['https://rpc.gnosischain.com/'],
        name: 'Gnosis Chain',
        nativeCurrency: XDAI,
        blockExplorerUrls: ['https://blockscout.com/xdai/mainnet/'],
    },
    137: {
        urls: ['https://polygon-rpc.com'],
        name: 'Polygon Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    288: {
        urls: ['https://mainnet.boba.network'],
        name: 'Boba L2',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://blockexplorer.boba.network'],
    },
    1088: {
        urls: ['https://andromeda.metis.io/?owner=1088'],
        name: 'Metis Network',
        nativeCurrency: METIS,
        blockExplorerUrls: ['https://andromeda-explorer.metis.io/'],
    },
    1285: {
        urls: ['https://rpc.api.moonriver.moonbeam.network'],
        name: 'MoonRiver',
        nativeCurrency: MOVR,
        blockExplorerUrls: ['https://moonriver.moonscan.io/'],
    },
    4689: {
        urls: ['https://babel-api.mainnet.iotex.io'],
        name: 'IoTeX Mainnet',
        nativeCurrency: IOTX,
        blockExplorerUrls: ['https://iotexscan.io/'],
    },
    42161: {
        urls: ['https://arb1.arbitrum.io/rpc'],
        name: 'Arbitrum One',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://arbiscan.io'],
    },
    42220: {
        urls: ['https://forno.celo.org'],
        name: 'Celo (Mainnet)',
        nativeCurrency: CELO,
        blockExplorerUrls: ['https://explorer.celo.org'],
    },
    43114: {
        urls: ['https://api.avax.network/ext/bc/C/rpc'],
        name: 'Avalanche Mainnet C-Chain',
        nativeCurrency: AVAX,
        blockExplorerUrls: ['https://snowtrace.io/'],
    },
    1313161554: {
        urls: ['https://mainnet.aurora.dev'],
        name: 'Aurora',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://aurorascan.dev/'],
    },
    1666600000: {
        urls: ['https://api.harmony.one'],
        name: 'Harmony Mainnet',
        nativeCurrency: ONE,
        blockExplorerUrls: ['https://explorer.harmony.one/'],
    },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
    const validURLs: string[] = CHAINS[Number(chainId)].urls

    if (validURLs.length) {
        accumulator[Number(chainId)] = validURLs
    }

    return accumulator
}, {})
