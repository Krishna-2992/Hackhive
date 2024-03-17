import { useState } from 'react'
import data from '../assets/dataset.json'
const HistoricHacks = () => {
    console.log('data', data)
    const [length, setLength] = useState(9)
    const [searchData, setSearchData] = useState()

    function searchBreach() {
        const address = document.getElementById('breachAddress').value
        if (address.length != 42) {
            return
        }
        const filteredData = data.filter((e) => e.Address === address)
        setSearchData(filteredData)
    }

    return (
        <div className='text-white'>
            <div className='w-[70%] m-auto text-white p-8 mt-8 border border-slate-300'>
                <div className='text-4xl font-bold text-center'>Search for the Breached contract</div>
                <div className='text-center p-8'><input type="text" placeholder="Contract address" id="breachAddress" className='text-center p-4 text-black rounded-md' /></div>
                {

                    searchData && (
                        <div className='text-center p-8'>The value lost in the breach is {searchData[0].Value}</div>
                    )}
                <div className='text-center'>
                    <button onClick={(e) => { searchBreach() }} className='text-center px-4 py-2 bg-sky-500/75 rounded-3xl'>
                        Search
                    </button>
                </div>
            </div>
            <table className='m-auto w-[70%]'>
                <thead>
                    <tr>
                        <th className='p-8 m-auto'>Contract address</th>
                        <th className='p-8 m-auto'>Avg value lost</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => (
                        <tr key={index}>
                            <td className='p-4 m-auto text-center'>{e.Address}</td>
                            <td className='p-4 m-auto text-center'>{e.Value || 0}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setLength(length + 10)}>Show more</button>
        </div>
    )
}
export default HistoricHacks