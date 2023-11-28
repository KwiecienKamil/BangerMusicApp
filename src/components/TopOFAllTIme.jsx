import React from "react";
import TopSongOFAllTimeCard from "./TopSongOFAllTimeCard";

const TopOFAllTIme = () => {
  return (
    <div className="bg-navbar rounded-xl">
      <div className="flex items-center justify-between pt-4 px-4">
        <h1>Top Banger Songs</h1>
        <p className="p-2 bg-black rounded-full text-[14px]">Of All Time</p>
      </div>
      <div className="flex items-center justify-between px-4 pt-4">
        <TopSongOFAllTimeCard
          artist="Eminem"
          title="Lose Yourself"
          src="https://cdn.radiofrance.fr/s3/cruiser-production/2020/10/f8994b7b-48bd-4cd3-bf2c-ef39c1a638bf/801x410_screenshot-eminem-loseyourself-clip.jpg"
          alt="eminem"
        />
        <TopSongOFAllTimeCard
          artist="Ed Sheeran"
          title="Shape Of You"
          src="https://www.people.com/thmb/Knx1PgBoI9zUkUQ2XjXrD7tgQso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ed-sheeran-1-2000-4f371b08ff8945e4969f3c62ac966860.jpg"
          alt="Ed Sheeran"
        />
      </div>
      <div className="flex flex-col py-4">
        <div className="flex items-center justify-between px-4">
          <TopSongOFAllTimeCard
            artist="The Weeknd"
            title="Blinding Lights"
            src="https://th.bing.com/th/id/R.612b2cfd8c30f787046f51ebf6570405?rik=TEXFQ2mACmQyfA&riu=http%3a%2f%2fimg.wennermedia.com%2farticle-leads-vertical-380%2fthe-weeknd-c7e1e07e-f9a5-4200-9c3f-a55f93c4a8bc.jpg&ehk=DgptH7%2fKPudaufaEKsE1f1abCKQG7WgO9K3JLgmWqbg%3d&risl=&pid=ImgRaw&r=0"
            alt="The Weeknd"
          />
          <TopSongOFAllTimeCard
            artist="Luis Fonsi"
            title="Despacito"
            src="https://th.bing.com/th/id/OIP.VrisyKe_maAYGhpRN0VWbgHaE8?rs=1&pid=ImgDetMain"
            alt="Luis Fonsi"
          />
        </div>
      </div>
    </div>
  );
};

export default TopOFAllTIme;
