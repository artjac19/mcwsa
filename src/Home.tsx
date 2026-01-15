import { useEffect, useRef, useState } from 'react';
import News from "./News";
import FooterNav from './FooterNav';

function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(() => window.innerWidth / window.innerHeight);
  const [speed, setSpeed] = useState(() => {
    const aspect = window.innerWidth / window.innerHeight;
    return aspect <= 4 / 3 ? 0 : 0.75;
  });

  useEffect(() => {
    const updateAspectAndSpeed = () => {
      const aspect = window.innerWidth / window.innerHeight;
      setAspect(aspect);
      setSpeed(aspect <= 4 / 3 ? 0 : 0.75);
    };
    window.addEventListener('resize', updateAspectAndSpeed);
    updateAspectAndSpeed();
    return () => window.removeEventListener('resize', updateAspectAndSpeed);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${-window.scrollY * speed}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <>
    <div className="flex flex-col w-full">
      {/* Show parallax div only if aspect > 4/3 */}
      {aspect > 4/3 && (
        <div className="w-full h-[100vh] overflow-hidden relative mt-[80px]">
          <div 
            ref={imageRef}
            className="w-full absolute top-0 left-0 h-[120%] z-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}teammidwest.webp)`,
              backgroundSize: '100%',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform'
            }}
          />
        </div>
      )}
      {/* Show static image if aspect <= 4/3 */}
      {aspect <= 4/3 && (
        <img
          src={`${import.meta.env.BASE_URL}teammidwest.webp`}
          alt="Team Midwest"
          className="mt-[80px] mb-0 w-full h-auto"
        />
      )}
      
      <div
        className="w-full bg-white px-6 py-8 z-10 rounded-t-3xl"
        style={{
          marginTop: aspect <= 4/3 ? '0' : '-30vh',
          left: aspect <= 4/3 ? 0 : undefined,
          right: aspect <= 4/3 ? 0 : undefined
        }}
      >
        <div id="news" className="mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">2026 Ski-Ammy Nominations</h2>
          <div className="bg-pink-50 border border-pink-200 rounded-xl px-6 py-4 max-w-2xl mx-auto mb-8 shadow-sm">
            <p className="text-center text-gray-700 m-0">
              Nominate a collegiate water skier who you believe best exemplifies the spirit of these awards. Please include the skier's name, school, and a short paragraph explaining why you think they deserve to be recognized.
            </p>
          </div>
          <div className="max-w-6xl mx-auto mb-12 px-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-100 shadow">
              <iframe
                src="https://padlet.com/embed/6c9sx1lx3un9xsph"
                frameBorder="0"
                allow="camera;microphone;geolocation;display-capture;clipboard-write"
                className="w-full h-[608px] block"
              />
              <div className="flex items-center justify-end p-2 text-xs text-gray-500">
                <a href="https://padlet.com?ref=embed" className="flex items-center gap-1 no-underline" target="_blank" rel="noopener noreferrer">
                  <span>Made with</span>
                  <img src="https://padlet.net/emails/padlet_email_logo_2026_text-dark-200.png" className="h-3" alt="Padlet" />
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">News</h2>
          <News 
            headline="Academic All-Star Team"
            imageUrl={`${import.meta.env.BASE_URL}ncwsaAllStars.webp`}
            linkUrl="https://thencwsa.org/2025-ncwsa-academic-all-stars/"
            description="NCWSA is starting an Academic All-Star Team to recognize academic excellence in collegiate skiers who graduated this year!! The nomination deadline is June 15th and the team will be announced at the end of June! Requirements are: 1. Having graduated in the spring semester, winter quarter, or spring quarter 2. 3.5+ GPA. 3. Skied for the NCWSA."
          />
          <News 
            headline="Collegiate Corn Support Squad"
            imageUrl={`${import.meta.env.BASE_URL}corn.webp`}
            linkUrl="https://tlcornfest.com/ncwsa"
            description="This year the NCWSA is partnering with Twin Lakes CornFest! As the Collegiate Corn Support Squad we’ll be helping serve the festival crowd the all-you-can-eat corn. It’ll be a fun event (free admission if you volunteer) that current skiers and alumni can sign up for. Please fill out the interest form to get more information later in the summer."
          />
        <div id="tourney-section" className="mb-8"></div>
        <h2 className="mt-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">2025 TOURNEY SCHEDULE</h2>
        <div className="max-w-4xl mx-auto w-full sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 font-['Montserrat']">Great Plains</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#ED1472] text-white">
                  <th>DATES</th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Hawkeye Skifest</td>
                  <td>Evansdale, IA</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Saluki Showdown</td>
                  <td>DuQuoin, IL</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Midwest Shredfest</td>
                  <td>Center City, MN</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Sunflower Showdown</td>
                  <td>Lawrence, KS</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 20-21</td>
                  <td className="tournament-name">Great Plains Conference Championships</td>
                  <td>Cambridge, IA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 font-['Montserrat']">Great Lakes</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#ED1472] text-white">
                  <th>DATES</th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Allentucky Waterbowl</td>
                  <td>Conklin, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Southern Ohio Challenge</td>
                  <td>Harrison, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Great Lakes Fling</td>
                  <td>Van Wert, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Spartan Ripfest</td>
                  <td>South Haven, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 20-21</td>
                  <td className="tournament-name">Great Lakes Conference Championship</td>
                  <td>Van Wert, OH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold md:mb-4 font-['Montserrat']">Championships</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#ED1472] text-white">
                  <th>DATES</th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tournament-date">Sep 26-28</td>
                  <td className="tournament-name">2025 Collegiate Regionals</td>
                  <td>PITS - Decatur, IL</td>
                </tr>
                <tr>
                  <td className="tournament-date">October 16-18</td>
                  <td className="tournament-name">2025 Collegiate Nationals</td>
                  <td>Imperial Lakes - Imperial, CA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div> {/* Close the max-width container div */}
        <div id="allstars-section"></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-center mt-16">All Stars 2025</h2>
        <div className="max-w-[1000px] mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full mb-10">
          {/* Sponsors section */}
          <div className="flex-1 flex flex-col justify-center items-center h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center w-full">Thank you to our sponsors</h3>
            <img src={`${import.meta.env.BASE_URL}sponsors.webp`} alt="Sponsors" className="w-[400px] max-w-full mb-4 rounded shadow" />
          </div>
          {/* Congrats/Skiers section */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Congrats to our skiers</h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <img src={`${import.meta.env.BASE_URL}allstars1.webp`} alt="All Star 1" className="rounded shadow w-full object-cover aspect-[4/5]" />
              <img src={`${import.meta.env.BASE_URL}allstars2.webp`} alt="All Star 2" className="rounded shadow w-full object-cover aspect-[4/5]" />
              <img src={`${import.meta.env.BASE_URL}allstars3.webp`} alt="All Star 3" className="rounded shadow w-full object-cover object-left aspect-[4/5]" />
              <img src={`${import.meta.env.BASE_URL}allstars4.webp`} alt="All Star 4" className="rounded shadow w-full object-cover aspect-[4/5]" />
            </div>
          </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 mt-8 text-center">Roster</h3>
        <div className="overflow-x-auto max-w-2xl mx-auto mb-12">
          <table className="w-full border-collapse rounded-lg overflow-hidden bg-white shadow">
            <thead>
              <tr className="bg-[#ED1472] text-white">
                <th className="py-2 px-4">Women</th>
                <th className="py-2 px-4">Men</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Davis, Kelci</td>
                <td className="py-2 px-4">Anderson, Brett</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Dosch, Dallas</td>
                <td className="py-2 px-4">Artang, Jake</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Fischette, Megan</td>
                <td className="py-2 px-4">Budzynski, Drew</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Kneeley, Lucy</td>
                <td className="py-2 px-4">Criel, Scott</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Leff, Kayla</td>
                <td className="py-2 px-4">Fiedler, William</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Lipski, Sydnie</td>
                <td className="py-2 px-4">Freitag, Matthew</td>
              </tr>
              <tr>
                <td className="py-2 px-4">O'Callaghan, Cal</td>
                <td className="py-2 px-4">Freitag, Sean</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Parham, Erin</td>
                <td className="py-2 px-4">Graves, Alex</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Passehl, Faith</td>
                <td className="py-2 px-4">Hack, Mitchell</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Plessner, Keelie</td>
                <td className="py-2 px-4">Hamilton, Luke</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Poppe, Mikayla</td>
                <td className="py-2 px-4">Hawley, Jacob</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Rose, Amanda</td>
                <td className="py-2 px-4">Heilman, Jack</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Thatcher, Lily</td>
                <td className="py-2 px-4">Hughes, Aidan</td>
              </tr>
              <tr>
                <td className="py-2 px-4">VanDenElzen, Kennedy</td>
                <td className="py-2 px-4">Maccarone, Will</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Wardle, Katya</td>
                <td className="py-2 px-4">Strachan, Jack</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Wendricks, Brooklyn</td>
                <td className="py-2 px-4">Wein, Joshua</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  <FooterNav
    links={[
      { label: 'News', id: 'news' },
      { label: 'Tourney', id: 'tourney-section' },
      { label: 'All Stars', id: 'allstars-section' }
    ]}
  />
  </>
  );
}

export default Home;
