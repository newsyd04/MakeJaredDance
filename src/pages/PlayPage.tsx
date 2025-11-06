import { useNavigate } from 'react-router-dom';

const PlayPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <main>
            <div className="grid h-screen place-items-center">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    {["💜","✨","💖","⭐"].map((emoji) =>
                    Array.from({ length: 6 }).map((_, i) => (
                        <div
                        key={`${emoji}-${i}`}
                        className="absolute animate-float opacity-80"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${Math.random() * 30 + 22}px`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 6 + 4}s`,
                        }}
                        >
                        {emoji}
                        </div>
                    ))
                    )}
                </div>
                <button onClick={() => navigate('/dance')}>                        
                        <span></span>
                        <span>Play</span>
                </button>
            </div>

        </main>
        
        <div
            id="info-box" data-info-chrome="🟠 In Chrome: The first hover can look clunky, no idea why" data-info-safari="✅ In Safari" data-info-firefox="✅ In  Firefox"
            data-presentation-width="60vw"
            data-presentation-height="60vh"
            data-inspiration="https://twitter.com/aleksliving/status/1635306125393551360">
        </div>
        </>
    )
}

export default PlayPage;