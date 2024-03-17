import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="flex h-12 pt-2 bg-blue-500 justify-center gap-20 align-center gradient-bg-welcome">
            <Link to="/"><div className='text-white text-xl'>Home</div></Link>
            <Link to="/feedback"><div className='text-white text-xl'>Feedback</div></Link>
            <Link to="/breach"><div className='text-white text-xl'>Breach</div></Link>
        </div>
    )
}