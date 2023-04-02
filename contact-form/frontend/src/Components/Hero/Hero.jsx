import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {    
    return (
        <div className="relative h-96 md:h-screen">
            <img src="/hero.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover z-0" style={{objectPosition: " 70% 25%"}}/>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8">Unlock the bond of a lifetime!</h1>
                <p className="text-lg md:text-3xl lg:text-4xl">Discover the joy of owning a border collie today</p>
                <Link to='/puppies' className='bg-primaryGold rounded-xl p-1 mt-8'>View Puppies!</Link>
            </div>
        </div>
    )
}