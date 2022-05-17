import {ChainId} from './Chains'
import {
    Avalanche13b__factory,
    AvalancheAB5__factory,
    Fantom230__factory,
    Fantom9a7__factory,
    FantomFf8__factory,
    Matic063__factory,
    Matic07C__factory,
    Matic574__factory
} from "../contracts";

export interface AddressData {
    contractAddress: string
    name: string
    chainId: number
}

export interface HubData extends AddressData {
    celarToken?: string
    relayChainToken?: string
}

export interface EndblockData extends AddressData {
    countdownAddress: string,
    factory: any
}

export const MaiAddresses: { [key: number]: string } = {
    0: '9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7', //SOL
    10: '0xdfa46478f9e5ea86d57387849598dbfb2e964b02',
    25: '0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb',
    56: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    57: '0x2611fa1cae2a3e20ed47fb1b293437c14f41b00f',
    137: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
    100: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    288: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    1088: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    1285: '0xFb2019DfD635a03cfFF624D210AEe6AF2B00fC2C',
    2001: '0xb9c8f0d3254007ee4b98970b94544e473cd610ec',
    4689: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    42161: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    42220: '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC',
    43114: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b',
    1313161554: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    1666600000: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
}

export const hubData: HubData[] = [
    {
        contractAddress: '0xF5c2B1b92456FE1B1208C63D8eA040D464f74a72',
        relayChainToken: '0x1c965D8E53fb1a448789e2B0FA5abc3EB2c36993',
        name: 'Cronos',
        chainId: ChainId.CRONOS,
    },
    {
        contractAddress: '0xcA8a932e5aA63961D975aFA005d34Ef73C59bb45',
        relayChainToken: '0x7f5a79576620C046a293F54FFCdbd8f2468174F1',
        name: 'MoonRiver',
        chainId: ChainId.MOONRIVER,
    },
    {
        contractAddress: '0xbE56bFF41AD57971DEDfBa69f88b1d085E349d47',
        name: 'Avalanche',
        celarToken: '0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41',
        relayChainToken: '0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e',
        chainId: ChainId.AVALANCHE,
    },

    {
        contractAddress: '0xC85C1ce70C4Bf751a73793D735e9D0209152F13d',
        celarToken: '0x6fa10d3052372118e976948184abacab569209ee',
        name: 'Harmony',
        chainId: ChainId.HARMONY,
    },
]

export const anySwapData: AddressData[] = [
    {
        contractAddress: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
        name: 'Polygon',
        chainId: ChainId.MATIC,
    },
    {
        contractAddress: '0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50',
        name: 'Cronos',
        chainId: ChainId.CRONOS,
    },
    {
        contractAddress: '0xaab1688899a833d0b6e0226afcd9a4c1128a5a77',
        name: 'MoonRiver',
        chainId: ChainId.MOONRIVER,
    },
    {
        contractAddress: '0x3b79a28264fc52c7b4cea90558aa0b162f7faf57',
        name: 'Avalanche',
        chainId: ChainId.AVALANCHE,
    },
    {
        contractAddress: '0xc412ecccaa35621cfcbada4ce203e3ef78c4114a',
        name: 'BNB Chain',
        chainId: ChainId.BSC,
    },
    {
        contractAddress: '0x3405a1bd46b85c5c029483fbecf2f3e611026e45',
        name: 'Harmony',
        chainId: ChainId.HARMONY,
    },
    {
        contractAddress: '0x99415856b37be9e75c0153615c7954f9ddb97a6e',
        name: 'Arbitrum',
        chainId: ChainId.ARBITRUM,
    },
    {
        contractAddress: '0xabd380327fe66724ffda91a87c772fb8d00be488',
        name: 'Iotex',
        chainId: ChainId.IOTEX,
    },
    {
        contractAddress: '0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e',
        name: 'Metis',
        chainId: ChainId.METIS,
    },
    {
        contractAddress: '0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
        name: 'Gnosis',
        chainId: ChainId.XDAI,
    },
    {
        contractAddress: '0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
        name: 'Aurora',
        chainId: ChainId.AURORA,
    },
    {
        contractAddress: '0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50',
        name: 'Celo',
        chainId: ChainId.CELO,
    },
    {
        contractAddress: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
        name: 'Boba',
        chainId: ChainId.BOBA,
    },
    {
        contractAddress: '0x9610b01aaa57ec026001f7ec5cface51bfea0ba6',
        name: 'Milkomeda',
        chainId: ChainId.MILKOMEDA,
    },
    {
        contractAddress: '0x3028b4395f98777123c7da327010c40f3c7cc4ef',
        name: 'Syscoin NEVM',
        chainId: ChainId.SYSCOIN,
    },
    {
        contractAddress: '0x65e66a61d0a8f1e686c2d6083ad611a10d84d97a',
        name: 'Optimism',
        chainId: ChainId.OPTIMISM,
    },
]

export const endblockData: EndblockData[] = [
    {
        contractAddress: '0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F',
        countdownAddress: 'https://polygonscan.com/block/countdown',
        name: 'Polygon',
        chainId: ChainId.MATIC,
        factory: Matic574__factory
    },
    {
        contractAddress: '0x07Ca17Da3B54683f004d388F206269eF128C2356',
        countdownAddress: 'https://polygonscan.com/block/countdown',
        name: 'Polygon',
        chainId: ChainId.MATIC,
        factory: Matic07C__factory
    },
    {
        contractAddress: '0x0635AF5ab29Fc7bbA007B8cebAD27b7A3d3D1958',
        countdownAddress: 'https://polygonscan.com/block/countdown',
        name: 'Polygon',
        chainId: ChainId.MATIC,
        factory: Matic063__factory
    },
    {
        contractAddress: '0x230917f8a262bF9f2C3959eC495b11D1B7E1aFfC',
        countdownAddress: 'https://ftmscan.com/block/countdown',
        name: 'Fantom',
        chainId: ChainId.FANTOM,
        factory: Fantom230__factory
    },
    {
        contractAddress: '0xFf8e9AD7ab6daC78cba9Aaf74CFa7D96132233d4',
        countdownAddress: 'https://ftmscan.com/block/countdown',
        name: 'Fantom',
        chainId: ChainId.FANTOM,
        factory: FantomFf8__factory
    },
    {
        contractAddress: '0x9a73AF4B606813d32197fE598236BdECA47Bf5a3',
        countdownAddress: 'https://ftmscan.com/block/countdown',
        name: 'Fantom',
        chainId: ChainId.FANTOM,
        factory: Fantom9a7__factory
    },
    {
        contractAddress: '0x13b826B2f6317f761A9A7564053EC69B4318073f',
        countdownAddress: 'https://snowtrace.io/block/countdown',
        name: 'Avalanche',
        chainId: ChainId.AVALANCHE,
        factory: Avalanche13b__factory
    },
    {
        contractAddress: '0xAB598434d0d0B1aDAf8311484A980d12169E035f',
        countdownAddress: 'https://snowtrace.io/block/countdown',
        name: 'Avalanche',
        chainId: ChainId.AVALANCHE,
        factory: AvalancheAB5__factory
    }
]