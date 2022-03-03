import { BigNumberish, ethers } from 'ethers'

export const formatAmount = (amount: BigNumberish) => {
    let floatNumber = 18
    return Number.parseFloat(ethers.utils.formatUnits(amount, floatNumber)).toLocaleString()
}
