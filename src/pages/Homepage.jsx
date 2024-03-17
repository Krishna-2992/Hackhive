import { useState } from 'react'
import CSVReader from '../components/CSVReader'
import HistoricHacks from './HistoricHacks'
import { ethers } from 'ethers'

const Homepage = () => {

    // const rpcUrl = "https://eth-mainnet.g.alchemy.com/v2/ooCgISQdaFZebdi2ElN7OBPnKG_f248I"

    // const getBalance = async () => {
    //     const address = "0x6d2e03b7EfFEae98BD302A9F836D0d6Ab0002766"
    //     const provider = new ethers.JsonRpcProvider(rpcUrl)
    //     const balance = await provider.getBalance(address)
    //     console.log(ethers.formatEther(balance))
    // }

    return (
        <div>
            {/* <CSVReader /> */}
            <HistoricHacks />
        </div>
    )
}
export default Homepage