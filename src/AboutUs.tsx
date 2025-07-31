import FooterNav from "./FooterNav";

export default function AboutUs() {
  return (
    <>
<div id="about-section" className="max-w-5xl mx-auto mt-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          The Midwest Collegiate Water Ski Association (MCWSA) is dedicated to promoting collegiate water skiing throughout the Midwest region. 
          Our mission is to support student-athletes, foster sportsmanship, and organize competitive events for teams and individuals of all skill levels.
        </p>
        <p className="text-lg leading-relaxed">
          This website serves as a central hub for MCWSA members, providing access to resources, team information, event schedules, and important updates. 
        </p>
      </div>

      {/* Exec Board Section */}
      <div id="exec-board-section" className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Exec Board</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Jake Artang */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Jake Artang <span className="text-gray-500">(Tango)</span></h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Great Plains Webmaster</div>
            <div className="text-sm text-gray-600 mb-2">School: UW-Madison</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Prior Lake, MN</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Trick</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 1 @ 35, 1670 pts, 85ft</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Spring break</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Kendama, jazz piano, snow skiing, filming/editing</div>
            <div className="text-sm text-gray-600">Favorite quote: "Don't jinx him Tony"</div>
          </div>
          {/* Sean Freitag */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Sean Freitag</h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Secretary</div>
            <div className="text-sm text-gray-600 mb-2">School: ISU</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Milwaukee</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Jump</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 2.6@ 39mph 26off, 132ft, 1040pts</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Winter Conference</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Cliff jumping and hiking</div>
            <div className="text-sm text-gray-600">Favorite quote: "Don't disappoint me"</div>
          </div>
          {/* Amanda Rose */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Amanda Rose <span className="text-gray-500"></span></h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Chair</div>
            <div className="text-sm text-gray-600 mb-2">School: Iowa state & KU</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Lake Saint Louis, MO</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Trick</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 2@35 off, Jump: 74ft, Trick 1930pts</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Quaff & hanging out with ski friends</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Snow skiing, running, being outside</div>
            <div className="text-sm text-gray-600">Favorite quote: "Pull hard suck less"</div>
          </div>
          {/* Nikki Weber */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Nikki Weber</h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Vice Chair</div>
            <div className="text-sm text-gray-600 mb-2">School: Missouri State</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Lake Lotawana MO</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Jump</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 5@28off 34mph, Trick: 1980, Jump 102 </div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Winter Conference</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Skiing (water and snow), sailing, hiking, camping</div>
            <div className="text-sm text-gray-600">Favorite quote:</div>
          </div>
          {/* Jacob Devereaux */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Jacob Devereaux <span className="text-gray-500">(Jdev)</span></h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Great Lakes Web Master</div>
            <div className="text-sm text-gray-600 mb-2">School: Miami University</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Elizabeth, CO</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Slalom</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 12packa beers, 14 shots, 3 mojitos</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Spring break</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Guitar, TV</div>
            <div className="text-sm text-gray-600">Favorite quote: "Big medical tryna stop me"</div>
          </div>
          {/* Lauren Connelly */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Lauren Connelly</h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Great Plains Conference Chair</div>
            <div className="text-sm text-gray-600 mb-2">School: Iowa State University</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Lockport, IL</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Slalom</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 2/5 @ 34mph, Jump: 15ft, Trick: WIP</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Quaff, snow ski trip out west</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Painting myself head-to-toe in school colors, skiing for the west coast, skipping my engineering classes</div>
            <div className="text-sm text-gray-600">Favorite quote: "Zero off & boat guides are more of suggestions than requirements"</div>
          </div>
          {/* Jack Strachan */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Jack Strachan</h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: AAC Rep</div>
            <div className="text-sm text-gray-600 mb-2">School: Marquette</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Slinger</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Trick (if I stand up my run)</div>
            <div className="text-sm text-gray-600 mb-2">PBs: Trick: 1760, Jump: 114ft, Slalom: 5.5@30mph 22off</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Spring break</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: snowmobiling, legos</div>
            <div className="text-sm text-gray-600">Favorite quote: "Fuck slalom"</div>
          </div>
          {/* Rachel Bell */}
          <div className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
            <h2 className="text-xl font-semibold">Rachel Bell</h2>
            <div className="text-sm text-gray-600 mb-2">Board Position: Great Lakes chair</div>
            <div className="text-sm text-gray-600 mb-2">School: Miami</div>
            <div className="text-sm text-gray-600 mb-2">Hometown: Plainfield, IL</div>
            <div className="text-sm text-gray-600 mb-2">Fav Event: Slalom</div>
            <div className="text-sm text-gray-600 mb-2">PBs: 2@32mph 15off, Jump: 56ft, Trick: 221</div>
            <div className="text-sm text-gray-600 mb-2">Favorite non-tournament event: Ski giving</div>
            <div className="text-sm text-gray-600 mb-2">Hobbies: Snow skiing and waterskiing</div>
            <div className="text-sm text-gray-600">Favorite quote: "House Ristin!"</div>
          </div>
        </div>
      </div>

      <div id="hof-section" className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Hall of Fame</h1>
        <p className="text-lg leading-relaxed mb-4">
          The MCWSA Hall of Fame recognizes skiers, leaders, and officials whose dedication and competitive achievements have gone above and beyond to positively impact the sport throughout the Midwest region. Inductees are chosen by the Hall of Fame selection committee and inductions will take place at Winter Conference. Nominations due by January 1st.
        </p>
        <div className="text-center mx-auto max-w-5xl mb-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQV841b9EurV-hL_HtrJ8A7k9QBADMKWhxjsmbdfsXtIEjAA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 mb-4 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700 transition"
          >
            Nomination Form
          </a>
        </div>
        <div className="text-left mx-auto max-w-5xl mb-4">
          <h2 className="mb-2">Rules and Requirements for Nominations</h2>
          <ul className="list-disc list-inside mb-4 ml-6">
            <li>Any MCWSA affiliated USA Waterski AND WAKE SPORTS Member will be allowed to submit nominations to the Hall of Fame Committee.</li>
            <li>Any nominations will need to be submitted in writing to the Hall of Fame Committee Chair. Verbal nominations will not be accepted.</li>
            <li>Nominations are due by January 1st to the Midwest Awards Chair.</li>
            <li>Committee will consist of the Regional Awards Chair, the Regional Alumni Chair, and the MCWSA Executive Board as the HOF Committee Chair.</li>
            <li>Candidates will be sent to captains to review and submit opinions to the Hall of Fame Committee.</li>
            <li>Not mandatory to have inductions every year.</li>
            <li>No more than 2 people will be inducted every year.</li>
            <li>Nomination approval requires a majority of the Hall of Fame Committee.</li>
          </ul>
        </div>
        <div className="mt-8 p-6 bg-white rounded  text-center">
          <h2 className="text-2xl font-bold mb-2">Please welcome the 2023 Inaugural Hall of Fame Class!</h2>
          <p className="text-xl font-semibold mb-2">Congratulations to Christy Kingsmill</p>
          <img src="public/Chrisy Kingsmill.png" alt="Christy Kingsmill" className="w-1/2 mx-auto mb-4" />
          <p className="text-left max-w-5xl mx-auto">
            Christy Kingsmill has over 15 years of service between the MCWSA and NCWSA during which she influenced many positive 
            changes that helped grow the sport of collegiate water skiing for thousands of people. 
            Aside from her contributions in an administrative role, Christy has made it a point to really get to know skiers on a personal level and act as a role model. 
            Over the years she dedicated every weekend during the season to not only make sure things run smoothly, but also went above and beyond by being an official. 
            She has acted as Chief Judge for many MCWSA conference tournaments, regional tournaments, and as Chief Judge and Assistant Chief Judge for NCWSA nationals on more than one occasion. 
            Christy is a jack of all trades who has held the job as Vice Chair of the Region and has the longest term as chair in the region’s history. 
            Christy also pulled double duty for many years serving on the NCWSA board while also leading the MCWSA. Currently Christy is the President of the NCWSA.
          </p>
        </div>
        <div className="mt-8 p-6 bg-white rounded  text-center">
          <h2 className="text-2xl font-bold mb-2">Please welcome the 2022 Inaugural Hall of Fame Class!</h2>
          <p className="text-xl font-semibold mb-2">Congratulations to Jeff Surdej and Cris Kodiak!</p>
          <img src={`${import.meta.env.BASE_URL}JeffSurdejandCrisKodiak.webp`} alt="Jeff Surdej and Cris Kodiak" className="w-1/2 mx-auto mb-4" />
          <p className="text-center italic mb-4">Jeff Surdej (left) and Cris Kodiak (right)</p>
          
          <div className="text-left mx-auto max-w-5xl mb-4">
            <h2 className="text-center mb-2">Jeff Surdej</h2>
            <p className="text-left max-w-5xl mx-auto">
          Jeff Surdej skied for Purdue University from Fall 1994 through Spring 1998 and helped turn Purdue University into a powerhouse in the Midwest that created a decade or more of dominance in the region. 
          Additionally, changes to the team structure helped the team grab elite recruits such as Cale Burdick to help build the longevity of the Purdue team’s dominance well after Jeff had graduated. 
          However, his greatest impact on the Midwest and collegiate skiing as a whole occurs off the water to this day. Jeff is the father of the Team Midwest Winter Conference, starting it with Chad Kodiak. 
          Jeff and his family hosted many collegiate tournaments at Waters Edge in Wilmington, IL as the annual Great Plains Conference Championships location prior to Iowa State’s Dream Lakes. 
          The most epic of these tournaments were dual conference tournaments in the early 2000’s where all teams from both conferences would converge at Waters Edge for one epic tournament. 
          After being the MCWSA Chair Jeff stepped into the National board and has been NCWSA Chair ever since. 
          Jeff has been a judge in the MCWSA and at MCWSA Regionals countless times and has been the appointee for the Midwest as a judge to Nationals and All-Stars a myriad of times over the past twenty+ years as well. 
          At the National level Jeff pushes collegiate skiing to grow and be the best and most fun version of competitive water skiing with NCWSA Nationals being one of the best tournaments in water skiing, 
          if not the best, certainly the most fun! On the National board and as National Chair Jeff has been around and overseen major changes to the NCWSA including the wild-card show (2008), 
          expansion to 20, 22, 23, and 24 team Nationals, the mini-course rule (2017), and many more changes that make sure collegiate skiing is always fun and possibly the best implementation of tournament water skiing. 
          The impact of Jeff Surdej on collegiate water skiing will be measured for many years to come, and he is an outstanding candidate for the Hall of Fame.
          </p>
          </div>
          <div className="text-left mx-auto max-w-5xl mb-4">
            <h2 className="text-center mb-2">Cris Kodiak</h2>
            <p className="text-left max-w-5xl mx-auto">
            Cris Kodiak Skied for Purdue University from 2001-2004, and held many leadership positions in his time there, 
            Team Secretary in 2002, Treasurer and Recruitment Chair 2003, Men’s Team Captain 2004. 
            His on the water accomplishments include 2004 Midwest regionals 4th place – Men’s Trick , 
            Midwest All Star Team member in Trick and Jump all 4 years. With personal bests of 2@22 off, 1340 (single pass), 126 feet. 
            Cris was a leader off the water as much as he was on the water. 
            Starting as the Great Lakes Conference Chairman from 2002-2004, Midwest Region Vice Chair 2004-2007, and Regional Chairman from 2007-2011, 
            Cris helped the Midwest region establish dominance in the collegiate all-stars tournament by managing the first two titles. 
            Cris was the tournament director of the 2005 NCWSA nationals, where Team Midwest debuted the famous pink, 
            Cris brought fun into the tournament by hosting a biggest spray competition, 
            a tournament video and a stunt jumper who was set on fire to kick off the men’s jump event. 
            With the NCWSA leadership Cris has helped with many rule changes including the Women’s equality scoring rule change, 
            non-scoring re-ride jump rule change, and created the wild card concept for additional bids to two divisions in NCWSA. 
            Helped in the rewriting of the National Qualification Standards Cris has also hosted the Wild Card Selection Show for multiple years with Jeff Surdej. 
            Cris also served as NCWSA Secretary 2011-2013 and is an Honorary National Director for Life. 
            Cris also served as Manager for the 2008 World university team, which took home Gold. 
            The impact of Cris Kodiak helped shape the Midwest region into what it is today.
            </p>
          </div>
        </div>
      </div>

      <div id="contact-section" className="max-w-5xl mx-auto mt-12 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or concerns, please don't hesitate to <a href="https://forms.gle/ZshAZ17CmV5p2P9X9" className="underline">contact us</a>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Check us out on <a href="https://www.facebook.com/themcwsa/" className="underline">Facebook</a>.
        </p>
      </div>


    <FooterNav
      links={[
        { label: "About Us", id: "about-section" },
        { label: "Hall of Fame", id: "hof-section" },
        { label: "Contact Us", id: "contact-section" },
      ]}
    />
    </>
  );
}
