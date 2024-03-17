import { useEffect, useState } from 'react'
import axios from 'axios'

const serverUrl = "http://localhost:3000"

const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        async function getFeedbacks() {
            const response = await axios.get(`${serverUrl}/feedback`)
            setFeedbacks(response.data)
        }
        getFeedbacks()
    }, [])

    const setFeedback = async () => {
        try {
            console.log("trying")
            const email = document.getElementById('email').value
            const protocol = document.getElementById('protocol').value
            const address = document.getElementById('address').value
            const feedback = document.getElementById('feedback').value
            axios.post(`${serverUrl}/feedback`, {
                email, protocol, address, feedback
            })
            alert("Thank you for your feedback")
        } catch (err) {
            console.log('error', err)
        }
    }

    const readFeedback = async () => {
        try {
            const response = await axios.get(`${serverUrl}/feedback`)
            console.log(response.data)
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <div className=' min-h-screen'>
            <div className='w-[70%] m-auto text-white p-8 mt-8 border border-slate-300 rounded-xl'>
                <div className='flex flex-col justify-center align-center text-center m-auto'>
                    <div className='text-4xl font-bold text-center underline pb-8'>Enter your Feedback: </div>
                    <div className='flex px-4 py-2 text-center justify-around align-center'>
                        <div>Your Email</div>
                        <input type="text" id="email" className='p-2 rounded-md text-black' />
                    </div>
                    <div className='flex px-4 py-2 text-center justify-around align-center'>
                        <div>Protocol Name:</div>
                        <input type="text" id="protocol" className='p-2 rounded-md text-black' />
                    </div>
                    <div className='flex px-4 py-2 text-center justify-around align-center'>
                        <div>Contract address</div>
                        <input type="text" id='address' className='p-2 rounded-md text-black' />
                    </div>
                    <div className='flex px-4 py-2 text-center justify-around align-center'>
                        <div>Feedback</div>
                        <textarea name="feedback" id="feedback" cols="30" rows="4" className='border border-black p-2 rounded-md text-black'></textarea>
                    </div>
                    <button onClick={setFeedback} className='text-center px-4 py-2 bg-sky-500/75 rounded-3xl'>
                        Submit
                    </button>
                </div>
            </div>
            <div>
                <table className='m-auto w-[70%] text-white mt-8'>
                    <thead>
                        <tr>
                            <th className='p-8 m-auto'>Email</th>
                            <th className='p-8 m-auto'>Protocol</th>
                            <th className='p-8 m-auto'>Contract Address</th>
                            <th className='p-8 m-auto'>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((e, index) => (
                            <tr key={index}>
                                <td className='p-4 m-auto text-center'>{e.email}</td>
                                <td className='p-4 m-auto text-center'>{e.protocol || 0}</td>
                                <td className='p-4 m-auto text-center'>{e.address}</td>
                                <td className='p-4 m-auto text-center'>{e.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}
export default Feedback