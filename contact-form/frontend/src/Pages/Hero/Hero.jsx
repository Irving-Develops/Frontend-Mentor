import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {    
    return (
        <div className="relative md:h-screen" style={{height: "80vh"}}>
            <img src="/hero.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover z-0" style={{objectPosition: " 70% 25%"}}/>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 mt-8">Unlock the bond of a lifetime!</h1>
                <p className="text-lg md:text-3xl lg:text-4xl mb-8">Discover the joy of owning a border collie today</p>
                <Link to='/puppies' className='md:order-4 w-48 md:w-48 text-white bg-gold text-darkGrey font-medium py-2 px-4 rounded-md hover:bg-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkGold'>View Puppies!</Link>
                <button> Test</button>
            </div>
        </div>
    )
}