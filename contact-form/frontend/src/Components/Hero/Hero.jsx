

export default function Hero() {    
    return (
        <div className="justify-center items-center h-screen">
            <div className={styles.overlay}></div>
            <img src="/hero.jpg" alt="hero" className="w-full h-4/5 object-cover" />
        </div>
    )
}