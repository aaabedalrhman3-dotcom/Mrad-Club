import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  Gamepad2,
  Headphones,
  Laptop,
  MapPin,
  Monitor,
  Mouse,
  Phone,
  Trophy,
  Wifi,
  Zap,
} from 'lucide-react'

const whatsapp = 'https://wa.me/9613553268'
const phone = 'tel:+9613553268'

const services = [
  { icon: Gamepad2, title: 'PS5 Gaming', note: 'اللعب عالأصول', price: '100,000', tone: 'red' },
  { icon: Monitor, title: 'PC Gaming', note: 'Ready. Set. Play.', price: '100,000', tone: 'yellow' },
  { icon: Zap, title: 'VR Experience', note: 'عيش اللعبة', price: '100,000', tone: 'cream' },
  { icon: Gamepad2, title: 'Retro Games', note: 'Old school, always cool', price: 'Come play', tone: 'cream' },
  { icon: Laptop, title: 'Computer Shop', note: 'Gear up at MRAD', price: 'Call for price', tone: 'cream' },
]

const products = [
  { name: 'Gaming computers', detail: 'Built for your next win', icon: Monitor },
  { name: 'Laptops', detail: 'Work, play, anywhere', icon: Laptop },
  { name: 'PlayStation 5', detail: 'The latest console', icon: Gamepad2 },
  { name: 'Games', detail: 'Find your next favorite', icon: Gamepad2 },
  { name: 'Controllers', detail: 'Find your next move', icon: Gamepad2 },
  { name: 'Headsets', detail: 'Hear every detail', icon: Headphones },
  { name: 'Keyboards & mice', detail: 'Set up your way', icon: Mouse },
]

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="MRAD CLUB home">
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-name">MRAD<span>CLUB</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#games">Games</a><a href="#shop">Shop</a>
          <a href="#tournaments">Tournaments</a><a href="#prices">Prices</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-phone" href={phone}><Phone size={15} /> <span>+961 3 553 268 </span></a>
        <a className="mobile-book" href={whatsapp} aria-label="Book on WhatsApp"><Gamepad2 size={20} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Gaming lounge with rows of PCs and colorful screens" />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="hero-kicker"><span className="live-dot" /> HARET SAIDA, SAIDA <span className="kicker-line" /> OPEN 24/7</div>
            <h1>MRAD<br /><span>CLUB</span><i className="hero-period">.</i></h1>
            <p className="hero-place">Gaming Lounge <span>&</span> Computer Shop<br /><b>Haret Saida</b></p>
            <p className="hero-arabic" lang="ar" dir="rtl">Play, Win, Relax</p>
            <div className="hero-actions">
              <a className="button button-red" href={whatsapp}>Book Your Seat <ArrowRight size={17} /></a>
              <a className="button button-outline" href="#prices">See The prices <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-footnote"><span>01</span> YOUR NEXT GAME STARTS HERE</div>
          </div>
          <div className="hero-sticker"><span>A7san Ma7al</span><b>Bi Saida!</b><i>✳</i></div>
          <div className="hero-side-label">PLAY A LITTLE LOUDER</div>
        </section>

        <div className="ticker" aria-label="Open twenty four hours every day">
          <div className="ticker-track">OPEN 24 HOURS <span>✳</span> EVERY DAY <span>✳</span> HARET SAIDA <span>✳</span> GAME ON <span>✳</span> OPEN 24 HOURS <span>✳</span> EVERY DAY <span>✳</span> HARET SAIDA <span>✳</span> GAME ON <span>✳</span></div>
        </div>

        <section className="games-section section-pad" id="games">
          <div className="games-top">
            <SectionHeading eyebrow="01 / PICK YOUR PLAYER" title={<>Your game.<br /><em>Your rules.</em></>} />
            <p className="section-intro">From late-night PS5 sessions to a whole new world in VR. Your seat is waiting, ya shabeb.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, note, price, tone }, index) => (
              <article className={`service-card service-${tone}`} key={title}>
                <span className="service-number">0{index + 1}</span>
                <Icon className="service-icon" strokeWidth={1.6} />
                <div className="service-copy"><h3>{title}</h3><p>{note}</p></div>
                <span className="service-price">{price === 'Come play' || price === 'Call for price' ? price : `${price} L.L`}<small>{price.includes(',') ? '/ HOUR' : ''}</small></span>
              </article>
            ))}
          </div>
          <div className="games-note"><span className="note-asterisk">✳</span> Every setup comes with fast internet, good company, and one more round.</div>
        </section>

        <section className="shop-section" id="shop">
          <div className="shop-photo" role="img" aria-label="Gaming PC setup with keyboard, mouse, and headset" />
          <div className="shop-copy">
            <span className="eyebrow">02 / THE GEAR ROOM</span>
            <h2>Play here.<br /><em>Take it home.</em></h2>
            <p className="shop-description">Looking for your next setup? We keep the good stuff close. Ask us what’s in the shop today.</p>
            <div className="product-list">
              {products.map(({ name, detail, icon: Icon }) => (
                <article className="product-row" key={name}>
                  <Icon size={20} strokeWidth={1.7} />
                  <div className="product-name"><h3>{name}</h3><span>{detail}</span></div>
                  <a href={`${whatsapp}?text=${encodeURIComponent(`Hi MRAD CLUB, I'm interested in ${name}.`)}`} aria-label={`Ask about ${name}`}><ArrowRight size={18} /></a>
                </article>
              ))}
            </div>
            <a className="shop-call" href={phone}>Call for price <span>03 268 359</span> <ArrowRight size={17} /></a>
          </div>
        </section>
        

        <section className="tournament-section" id="tournaments">
          <div className="tournament-inner">
            <div className="tournament-heading">
              <div><span className="eyebrow">03 / THE WEEKLY SHOWDOWN</span><h2>Local legends<br /><em>only.</em></h2></div>
              <div className="trophy-stamp"><Trophy size={29} /><span>WHO'S<br />NEXT?</span></div>
            </div>
            <div className="tournament-bottom">
              <div className="tournament-copy">
                <p>FIFA, Fortnite, Call of Duty. Weekly tournaments, proper bragging rights, prizes worth showing up for. Haret Saida has entered the lobby.</p>
                <a className="button button-dark" href={`${whatsapp}?text=${encodeURIComponent('Hi MRAD CLUB, I want to register for a tournament!')}`}>Sajjel Esmak <ArrowRight size={17} /></a>
              </div>
              <div className="leaderboard">
                <div className="leaderboard-head"><span>THE LEADERBOARD</span><span>THIS WEEK</span></div>
                <div className="leader-row"><span className="leader-rank">01</span><span className="leader-name">Next up: you?</span><span className="leader-score">—</span></div>
                <div className="leader-row"><span className="leader-rank">02</span><span className="leader-name">Claim your spot</span><span className="leader-score">—</span></div>
                <div className="leader-row"><span className="leader-rank">03</span><span className="leader-name">Prizes every week</span><span className="leader-score">✳</span></div>
                <div className="leaderboard-foot">Entries open now <span>↗</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="prices-section section-pad" id="prices">
          <div className="prices-heading">
            <SectionHeading eyebrow="04 / NO SURPRISES" title={<>One price.<br /><em>More play.</em></>} />
            <p>Grab your seat. PS5, PC, and VR all have the same easy hourly rate.</p>
          </div>
          <div className="price-table">
            <div className="price-table-head"><span>YOUR SETUP</span><span>PER HOUR</span></div>
            <div className="price-row"><span><Gamepad2 /> PS5 Gaming</span><b>100,000 <small>L.L</small></b></div>
            <div className="price-row"><span><Monitor /> PC Gaming</span><b>100,000 <small>L.L</small></b></div>
            <div className="price-row"><span><Zap /> VR Experience</span><b>100,000 <small>L.L</small></b></div>
            <div className="price-row price-row-day"><span><Clock3 /> Full day offer</span><a href={phone}>Call us for a deal <ArrowRight size={16} /></a></div>
          </div>
          <div className="price-foot"><span>Cash, good games, good times.</span><span>Ask about group bookings <a href={whatsapp}>on WhatsApp ↗</a></span></div>
        </section>

        <section className="why-section">
          <div className="why-photo" role="img" aria-label="Friends playing video games together at a gaming lounge" />
          <div className="why-copy">
            <span className="eyebrow">NOT JUST A PLACE TO PLAY</span>
            <h2>Ma7al el shabeb<br /><em>bi Haret Saida.</em></h2>
            <p>Your people, your neighborhood, and a setup that’s always ready. The kind of place where “one last game” means three more.</p>
            <ul className="why-list">
              <li><Wifi /> Fast internet, no lag excuses</li>
              <li><Zap /> New devices, ready to go</li>
              <li><Gamepad2 /> A3de merte7a, stay a while</li>
              <li><Clock3 /> Open 24h, every single day</li>
            </ul>
          </div>
          <div className="why-mark">SAIDA<br /><span>✳</span><br />PLAYS</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-top">
            <div><span className="eyebrow">05 / FIND YOUR WAY HERE</span><h2>We’re around.<br /><em>All day. All night.</em></h2></div>
            <div className="contact-detail"><MapPin /><div><span>OUR NEIGHBORHOOD</span><b>Haret Saida, Saida, Lebanon</b></div></div>
          </div>
          <div className="contact-bottom">
            <div className="map-frame">
              <iframe title="Map of Haret Saida, Lebanon" src="https://maps.google.com/maps?q=Haret%20Saida%2C%20Saida%2C%20Lebanon&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a className="map-open" href="https://maps.google.com/?q=Haret+Saida,+Saida,+Lebanon" target="_blank" rel="noreferrer"><MapPin size={15} /> OPEN IN MAPS <ArrowRight size={14} /></a>
            </div>
            <div className="contact-card">
              <span className="eyebrow">CALL IT. BOOK IT. PLAY.</span>
              <a className="contact-phone" href={phone}>+961 3 553 268 </a>
              <div className="contact-hours"><Clock3 size={17} /><span>Open 24 hours <b>·</b> Every day</span><i /></div>
              <a className="button button-whatsapp" href={whatsapp}><Phone size={17} /> Chat with us on WhatsApp <ArrowRight size={17} /></a>
              <span className="contact-arabic" lang="ar" dir="rtl">منشوفك عاللعبة!</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MRAD<span>CLUB</span></span></a>
        <span className="footer-note">MADE FOR THE LOVE OF THE GAME <i>✳</i> HARET SAIDA, LEBANON</span>
        <a className="footer-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}

export default App