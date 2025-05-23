
import { useEffect, useRef, useState } from 'react';

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
    <div className="flex flex-col w-full">
      {/* Show parallax div only if aspect > 4/3 */}
      {aspect > 4/3 && (
        <div className="w-full h-[100vh] overflow-hidden relative mt-[80px]">
          <div 
            ref={imageRef}
            className="w-full absolute top-0 left-0 h-[120%] z-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}teammidwest.png)`,
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
          src={`${import.meta.env.BASE_URL}teammidwest.png`}
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">2025 TOURNEY SCHEDULE</h2>
        
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
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Hawkeye Skifest</td>
                  <td>Evansdale, IA</td>
                </tr>
                <tr className="bg-[#fdf7fa]">
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Mo State Fall Showdown</td>
                  <td>Hartville, MO</td>
                </tr>
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Midwest Shredfest</td>
                  <td>Center City, MN</td>
                </tr>
                <tr className="bg-[#fdf7fa]">
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Husker Ripfest</td>
                  <td>Ashland, NE</td>
                </tr>
                <tr className="bg-[#f8f0f4]">
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
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Allentucky Waterbowl</td>
                  <td>Conklin, MI</td>
                </tr>
                <tr className="bg-[#fdf7fa]">
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Southern Ohio Challenge</td>
                  <td>Harrison, OH</td>
                </tr>
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Great Lakes Fling</td>
                  <td>Van Wert, OH</td>
                </tr>
                <tr className="bg-[#fdf7fa]">
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Spartan Ripfest</td>
                  <td>South Haven, MI</td>
                </tr>
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 20-21</td>
                  <td className="tournament-name">Great Lakes Conference Championship</td>
                  <td>Van Wert, OH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 font-['Montserrat']">Championships</h3>
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
                <tr className="bg-[#f8f0f4]">
                  <td className="tournament-date">Sep 27-28</td>
                  <td className="tournament-name">2025 Collegiate Regionals</td>
                  <td>PITS - Decatur, IL</td>
                </tr>
                <tr className="bg-[#fdf7fa]">
                  <td className="tournament-date">October 16-18</td>
                  <td className="tournament-name">2025 Collegiate Nationals</td>
                  <td>Imperial Lakes - Imperial, CA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div> {/* Close the max-width container div */}
      </div>
    </div>
  );
}

export default Home;
