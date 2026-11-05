import { ArrowDown, CalendarDays, Clock3, Gift, IdCard, MapPin, ShieldCheck, ClipboardCheck } from 'lucide-react';
import AnimatedNumberCountdown from '../components/ui/countdown-number.jsx';
import { games } from '../data/games.js';

const EVENT_START = new Date(2026, 10, 11, 14, 30);

export default function Home() {
  return (
    <main className="home-scroll-pages">
      <section className="home-panel home-hero-panel" id="home">
        <img className="hero-bunting" src="/images/sports-carnival-bunting.png" alt="" aria-hidden="true" />
        <div className="hero-firework-decoration" aria-hidden="true" />
        <div className="hero-panel-content">
          <div className="hero-panel-copy" data-scroll-reveal="up">
            <span className="hero-panel-eyebrow"><span/> ROOT GROUP 2 PRESENTS · CAMPUS EDITION</span>
            <h1>SPORTS<br/><em>CARNIVAL</em></h1>
            <div className="hero-event-details">
              <span><CalendarDays size={18}/> NOV 11, WEDNESDAY</span>
              <span><Clock3 size={18}/> 2:30 PM – 5:00 PM</span>
              <span><MapPin size={18}/> FIFTH ROW ZONE</span>
            </div>
            <p className="hero-audience">Freshmores · Year 3–4 · Graduate<br className="desktop-break"/> and Masters students</p>
            <a className="hero-scroll-link" href="#story">Explore the carnival <ArrowDown size={17}/></a>
          </div>
          <div className="hero-panel-art" data-scroll-reveal="up">
            <img src="/images/sports-carnival-balls.png" alt="Colorful carnival balls with a free entry ticket" />
            <div className="hero-countdown">
              <span className="hero-countdown-title">IT’S ALMOST TIME</span>
              <AnimatedNumberCountdown endDate={EVENT_START} />
            </div>
          </div>
        </div>
        <div className="hero-bottom-note"><span>FREE ENTRY</span><span>GOOD GAMES · GOOD COMPANY · GOOD VIBES</span></div>
      </section>

      <section className="home-panel story-panel" id="story">
        <div className="story-panel-inner" data-scroll-reveal="up">
          <span className="story-mark" aria-hidden="true">✳</span>
          <p>Unwind the<br/>stress after<br/>midterms with<br/>games, fun and<br/>prizes!</p>
          <span className="story-caption">TAKE A BREATHER. MAKE A MEMORY.</span>
        </div>
      </section>

      <section className="home-panel games-panel" id="games">
        <div className="games-panel-inner">
          <div className="games-panel-heading" data-scroll-reveal="up">
            <div className="games-panel-title">
              <span className="section-kicker">FOUR BOOTHS · ONE BIG AFTERNOON</span>
              <div className="games-panel-title-row">
                <h2>Pick Your <em>Game.</em></h2>
              </div>
              <h2 className="games-panel-subtitle">Are you Ready To Win?</h2>
            </div>
            <aside className="games-panel-sponsors" aria-label="Lucky draw voucher sponsors">
              <h3>STAND A CHANCE TO WIN VOUCHERS!</h3>
              <div className="games-sponsor-logos">
                <img src="/images/sponsors/grab.png" alt="Grab" />
                <img src="/images/sponsors/luckin-coffee.png" alt="Luckin Coffee" />
                <img src="/images/sponsors/fairprice.png" alt="FairPrice" />
              </div>
            </aside>
          </div>
          <div className="booth-grid reference-booth-grid">
            {games.map((game) => (
              <article className={`reference-game-card ${game.accent}`} data-scroll-reveal="up" key={game.name}>
                <span className="reference-game-art">
                  <img src={game.image} alt="" />
                </span>
                <span className="reference-game-copy">
                  <strong>{game.name}</strong>
                  <span>{game.shortDescription}</span>
                </span>
              </article>
            ))}
          </div>
          <p className="games-stamp-note">
            <span>4 GAME BOOTHS</span>
            <span>Collect a stamp at every booth!</span>
            <strong>Take home a prize & even stand a chance to win FairPrice, Grab &amp; Luckin’ vouchers in our lucky draw!</strong>
          </p>
        </div>
      </section>

      <section className="home-panel registration-section registration-panel" id="registration">
        <div className="registration-inner page-container">
          <div className="registration-copy" data-scroll-reveal="up">
            <span className="eyebrow eyebrow-light">BEFORE YOU DROP BY</span>
            <h2>Three quick steps.<br/><em>Then you're in.</em></h2>
            <p>Admission is free. Head to the central station when you arrive and the team will get you sorted.</p>
            <div className="registration-reminder"><IdCard size={20}/><span>Remember to bring your student ID.</span></div>
          </div>
          <div className="registration-steps" data-scroll-reveal="up">
            <article><span className="step-no">01</span><span className="step-icon"><IdCard size={21}/></span><div><h3>Bring your student ID</h3><p>Have your student ID ready for on-site registration.</p></div></article>
            <article><span className="step-no">02</span><span className="step-icon"><ShieldCheck size={21}/></span><div><h3>Register &amp; sign the waiver</h3><p>Complete registration and the waiver / consent notice at the central station.</p></div></article>
            <article><span className="step-no">03</span><span className="step-icon"><ClipboardCheck size={21}/></span><div><h3>Collect your stamp card</h3><p>Pick up your game stamp card and find your first booth.</p></div></article>
          </div>
        </div>
        <div className="registration-panel-footer"><span>ROOT GROUP 2 · SPORTS CARNIVAL 2026</span><span>SEE YOU ON CAMPUS!</span></div>
      </section>
    </main>
  );
}
