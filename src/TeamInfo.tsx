import FooterNav from "./FooterNav";

export default function TeamInfo() {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-4">
        <div className="text-center text-2xl font-bold font-merriweather mb-8 mt-32">Team Info</div>
      <section id="checklist-section" className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Checklist</h2>
        <p className="mb-4">The following checklist contains everything your team needs to complete in order to be eligible to ski at tournaments.</p>
        <ul className="list-disc list-inside mb-6">
          <li className="font-bold mt-2">
            Club Members
            <ul className="list-disc list-inside ml-6 mb-2 font-normal">
              <li>Log into your member account for <a href="https://members.usawaterski.org/member/login" className="underline" target="_blank" rel="noopener noreferrer">USA Waterski</a> or create an account if you don't have one.</li>
              <li>Purchase an Individual Active Membership.</li>
              <li>Get SafeSport Certified from the dashboard. ALL SKIERS MUST BE SAFESPORT CERTIFIED TO COMPETE OR VOLUNTEER AT SANCTIONED EVENTS.</li>
            </ul>
          </li>
          <li className="font-bold mt-2">
            Captains
            <ul className="list-disc list-inside ml-6 mb-2 font-normal">
              <li>Register your team on USA Waterski by following <a href="https://drive.google.com/file/d/1x3usqf0wbUrvuDQZ1KCDhf-ra7b4fli_/view" className="underline" target="_blank" rel="noopener noreferrer">this instructional video</a>.</li>
              <li>Create an Eligibility Letter based on <a href="https://docs.google.com/document/d/1ztCt2jYpDLqU2NmZfyFFV-ul12u21Jtdj27adVOOzOg/edit" className="underline" target="_blank" rel="noopener noreferrer">this information</a>. This is an example 
              <a href="http://ncwsa.com/resources/NCWSA%20Letter%20of%20Eligibility%20Sample.pdf" className="underline" target="_blank" rel="noopener noreferrer"> eligibility letter.</a></li>
              <li>Ski office hours will be available on Wednesday nights during the season typically from 8pm – 9pm Central Time.</li>
              <li>Send the chairperson your team's updated captain's contact information.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="points-section" className="bg-white rounded shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Point Opportunities</h2>
        <p className="mb-4 font-semibold">Team Midwest Incentives:</p>
        <p className="mb-2">The top 3 teams from the Midwest with the most points at the end of the combined Spring and Fall seasons will receive a cash reward at the WC banquet.</p>
        <ul className="list-disc list-inside mb-4">
          <li>First Place = $750</li>
          <li>Second Place = $500</li>
          <li>Third Place = $250</li>
        </ul>
        <p className="mb-2 font-semibold">Points Opportunities:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="font-bold mt-2">
            Tournament Preparedness
            <ul className="list-disc list-inside ml-6 mb-2 font-normal">
              <li>Having MCWSA, NCWSA, Conference money ready and correct (cash/check): 5 pts.</li>
              <li>Having all eligibility forms completed and correct:
                <ul className="list-disc list-inside ml-6 mb-2 font-normal">
                  <li>Points early (the Sunday prior to Conference): 20 pts.</li>
                  <li>Point as of Friday – complete and correct: 5 points</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="font-bold mt-2">
            Officials Points
            <ul className="list-disc list-inside ml-6 mb-2">
              <li className="font-semibold">Judges and Scorers
                <ul className="list-disc list-inside ml-6 mb-2 font-normal">
                  <li>10 pts. per event for new and upgraded Judges and Scorers</li>
                  <li>2 pt. per event worked (after completing your rating)</li>
                </ul>
              </li>
              <li className="font-semibold">Drivers
                <ul className="list-disc list-inside ml-6 mb-2 font-normal">
                  <li>10 pts. per event for new and upgraded Drivers (Assistant and above)</li>
                  <li>3 pt. per event worked for Drivers (after completing your rating)</li>
                </ul>
              </li>
              <li className="font-semibold">Safety
                <ul className="list-disc list-inside ml-6 mb-2 font-normal">
                  <li>10 pts. per new and upgraded Safety (state and above)</li>
                  <li>4 pts. per tournament worked (ratings per event are not required and are not trackable, only the Chief Safety position at a tournament can be tracked, thus the higher number of points is given)</li>
                </ul>
              </li>
              <li className="font-semibold">TC (Technical Coordinator)
                <ul className="list-disc list-inside ml-6 mb-2 font-normal">
                  <li>10 pts. for a new TC rating</li>
                  <li>4 pts. per tournament worked (TC can only be tracked per tournament, so higher points are awarded)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="font-bold mt-2">
            Other Tournament Help Points
            <ul className="list-disc list-inside ml-6 mb-2 font-normal">
              <li>Rope Handling: 1 pt. per person to help (must be at least a couple rounds and must be radioed in)</li>
              <li>Dock Starting: 1 pt. per person to help (must be at least a couple rounds and must be radioed in)</li>
              <li>Waivers ALL completed by 2 days before the tournament starts: 3 pts.</li>
              <li>Random: The Midwest Executive Board can present point opportunities throughout the year at their discretion.</li>
            </ul>
          </li>
        </ul>
        <p className="mb-2 font-semibold">Additional Information</p>
        <ul className="list-disc list-inside mb-2">
          <li>You can find your personal ratings and events worked on the USA Waterski homepage (see previous email for more information).</li>
          <li>If something doesn't show up for an event/tournament you will need to contact the Chief Official immediately. To prevent further confusion, make sure when you work as an official that it is recorded in the computer and it is recommended that you check at the end of the tournament as well.</li>
          <li>One person on the team should collect all the screenshots for the entire team to be sent in one email to your chairperson.</li>
          <li>Only collegiate tournaments will be counted for points, though we encourage you to stay involved and help at summer tournaments as well!</li>
        </ul>
      </section>

      <section id="teams-section" className="bg-white rounded shadow p-6 mb-32">
        <h2 className="text-xl font-semibold mb-4">Teams</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 overflow-x-auto">
            <table className="min-w-[200px] w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 text-lg font-semibold bg-[#ED1472] text-white">Great Plains Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-1">Eau Claire</td></tr>
                <tr><td className="px-4 py-1">Illinois</td></tr>
                <tr><td className="px-4 py-1">Iowa</td></tr>
                <tr><td className="px-4 py-1">Iowa State</td></tr>
                <tr><td className="px-4 py-1">Kansas</td></tr>
                <tr><td className="px-4 py-1">Kansas State</td></tr>
                <tr><td className="px-4 py-1">La Crosse</td></tr>
                <tr><td className="px-4 py-1">Madison</td></tr>
                <tr><td className="px-4 py-1">Marquette</td></tr>
                <tr><td className="px-4 py-1">Minnesota</td></tr>
                <tr><td className="px-4 py-1">Missouri State</td></tr>
                <tr><td className="px-4 py-1">Nebraska</td></tr>
                <tr><td className="px-4 py-1">Southern Illinois</td></tr>
                <tr><td className="px-4 py-1">Stevens Point</td></tr>
                <tr><td className="px-4 py-1">Stout</td></tr>
                <tr><td className="px-4 py-1">Wichita State</td></tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="min-w-[200px] w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 text-lg font-semibold bg-[#ED1472] text-white">Great Lakes Teams</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-4 py-1">Akron</td></tr>
                <tr><td className="px-4 py-1">Ball State</td></tr>
                <tr><td className="px-4 py-1">Bowling Green</td></tr>
                <tr><td className="px-4 py-1">Cincinnati</td></tr>
                <tr><td className="px-4 py-1">Dayton</td></tr>
                <tr><td className="px-4 py-1">Grand Valley State</td></tr>
                <tr><td className="px-4 py-1">Indiana</td></tr>
                <tr><td className="px-4 py-1">Miami University</td></tr>
                <tr><td className="px-4 py-1">Michigan</td></tr>
                <tr><td className="px-4 py-1">Michigan State</td></tr>
                <tr><td className="px-4 py-1">Notre Dame</td></tr>
                <tr><td className="px-4 py-1">Ohio University</td></tr>
                <tr><td className="px-4 py-1">Ohio State</td></tr>
                <tr><td className="px-4 py-1">Purdue</td></tr>
                <tr><td className="px-4 py-1">Western Michigan</td></tr>
                <tr><td className="px-4 py-1">West Virginia</td></tr>
                <tr><td className="px-4 py-1">Wittenberg University</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    <FooterNav
      links={[
        { label: "Checklist", id: "checklist-section" },
        { label: "Point Opportunities", id: "points-section" },
        { label: "Teams", id: "teams-section" },
      ]}
    />
    </>
  );
}
