import { ethers } from "ethers";

export const formatAmount = (amount, networkName) => {
    let floatNumber = 18;
    if (networkName === "MoonRiver" ) {
        floatNumber = 19;
    } 
    return Number.parseFloat(ethers.utils.formatUnits(amount, floatNumber)).toLocaleString();
}

