import { ChainId } from './Chains'

export interface AddressData {
    hub: string
    celarToken?: string
    relayChainToken?: string
    name: string
    chainId: number
}

export const MaiAddresses: { [key: number]: string } = {
    0: '9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7', //SOL
    25: '0x2Ae35c8E3D4bD57e8898FF7cd2bBff87166EF8cb',
    56: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    137: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
    100: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    288: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    1088: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    1285: '0xFb2019DfD635a03cfFF624D210AEe6AF2B00fC2C',
    4689: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    42161: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
    42220: '0xB9C8F0d3254007eE4b98970b94544e473Cd610EC',
    43114: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b',
    1313161554: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
    1666600000: '0x3F56e0c36d275367b8C502090EDF38289b3dEa0d',
}

export const hubData: AddressData[] = [
    {
        hub: '0xF5c2B1b92456FE1B1208C63D8eA040D464f74a72',
        relayChainToken: '0x1c965D8E53fb1a448789e2B0FA5abc3EB2c36993',
        name: 'Cronos',
        chainId: ChainId.CRONOS,
    },
    {
        hub: '0xcA8a932e5aA63961D975aFA005d34Ef73C59bb45',
        relayChainToken: '0x7f5a79576620C046a293F54FFCdbd8f2468174F1',
        name: 'MoonRiver',
        chainId: ChainId.MOONRIVER,
    },
    {
        hub: '0xbE56bFF41AD57971DEDfBa69f88b1d085E349d47',
        name: 'Avalanche',
        celarToken: '0x61f85fF2a2f4289Be4bb9B72Fc7010B3142B5f41',
        relayChainToken: '0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e',
        chainId: ChainId.AVALANCHE,
    },

    {
        hub: '0xC85C1ce70C4Bf751a73793D735e9D0209152F13d',
        celarToken: '0x6fa10d3052372118e976948184abacab569209ee',
        name: 'Harmony',
        chainId: ChainId.HARMONY,
    },
]

export const anySwapData: AddressData[] = [
    {
        hub: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
        name: 'Polygon',
        chainId: ChainId.MATIC,
    },
    {
        hub: '0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50',
        name: 'Cronos',
        chainId: ChainId.CRONOS,
    },
    {
        hub: '0xaab1688899a833d0b6e0226afcd9a4c1128a5a77',
        name: 'MoonRiver',
        chainId: ChainId.MOONRIVER,
    },
    {
        hub: '0x3b79a28264fc52c7b4cea90558aa0b162f7faf57',
        name: 'Avalanche',
        chainId: ChainId.AVALANCHE,
    },
    {
        hub: '0xc412ecccaa35621cfcbada4ce203e3ef78c4114a',
        name: 'BNB Chain',
        chainId: ChainId.BSC,
    },
    {
        hub: '0x3405a1bd46b85c5c029483fbecf2f3e611026e45',
        name: 'Harmony',
        chainId: ChainId.HARMONY,
    },
    {
        hub: '0x99415856b37be9e75c0153615c7954f9ddb97a6e',
        name: 'Arbitrum',
        chainId: ChainId.ARBITRUM,
    },
    {
        hub: '0xabd380327fe66724ffda91a87c772fb8d00be488',
        name: 'Iotex',
        chainId: ChainId.IOTEX,
    },
    {
        hub: '0x2C78f1b70Ccf63CDEe49F9233e9fAa99D43AA07e',
        name: 'Metis',
        chainId: ChainId.METIS,
    },
    {
        hub: '0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
        name: 'Gnosis',
        chainId: ChainId.XDAI,
    },
    {
        hub: '0xc9BAA8cfdDe8E328787E29b4B078abf2DaDc2055',
        name: 'Aurora',
        chainId: ChainId.AURORA,
    },
    {
        hub: '0xC931f61B1534EB21D8c11B24f3f5Ab2471d4aB50',
        name: 'Celo',
        chainId: ChainId.CELO,
    },
    {
        hub: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
        name: 'Boba',
        chainId: ChainId.BOBA,
    },
]
