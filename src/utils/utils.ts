import { BigNumberish, ethers } from 'ethers'

export const formatAmount = (amount: BigNumberish, networkName: String) => {
    let floatNumber = 18
    if (networkName === 'MoonRiver') {
        floatNumber = 19
    }
    return Number.parseFloat(ethers.utils.formatUnits(amount, floatNumber)).toLocaleString()
}
