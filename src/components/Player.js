
import React, { useState, useEffect  } from 'react';
import { map } from 'lodash';
import { LineChart } from 'react-charts-d3';
import playerData from './playerProfileData.json';
import "./Player.css"
import Skeleton from 'react-loading-skeleton';

const Player = () => {
  const [showData, setShowData] = useState(false);

  var lineData = [
    {
      name: "series1",
      values: [{ x: 0, y: 20 }, { x: -2, y: 10 }, {x: 33, y: 48.5}, {x: 21.7, y: 27}],
      strokeWidth: 3,
    },
    {
      name: "series2",
      values: [{ x: 42.5, y: 23.5 }, { x: 76, y: 82 }, {x: 8, y: 41}]
    }
  ];

  const imageData = (fname, lname) => {
      let first_name = fname.charAt(0).toUpperCase();
      let last_name = lname.charAt(0).toUpperCase();
      return (
        <div className="col m2 paddall0px">
          <h6 className="mr-1 listicon">
            {first_name + last_name}
          </h6>
        </div>
      );
  };

  useEffect(() => {
    setTimeout(()=>{
     setShowData(true)
    },2000)
  });

  return (
    <React.Fragment>
      {showData ? map(playerData, (data, index) =>
      (
        <div className="row">
          <div className="col s12 m3"  key={`player-${index}`}>
            <div className="card">
              <div className="card-content">
                <div className="row rowset">
                  <div className="col m2 paddall0px">
                      {imageData(data.PlayerName.split(' ').slice(0, -1).join(' '), data.PlayerName.split(' ').slice(-1).join(' ') )}
                  </div>
                  <div className="col m10">
                    <h1 className="card-title">{data.PlayerName}</h1>
                    <p className="location">{data.HomeCourse}</p>
                    <div className="row martop10px marbot0px">
                      <div className="col m4">
                        <p className="font12px litecolor">Quality</p>
                        <p className="font14px darkcolor"><b>{data.Quality}</b></p>
                      </div>
                      <div className="col m4 borltrt1px">
                        <p className="font12px litecolor">Handicap</p>
                        <p className="font14px darkcolor"><b>{data.Handicap}</b></p>
                      </div>
                      <div className="col m4">
                        <p className="font12px litecolor">SG Total</p>
                        <p className="font14px darkcolor"><b>{data.SGTotal}</b></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div className="paddtopbot10px">
                  <p className="font13px litecolor">Latest Activity: <span className="darkcolor">68 (-4), The Shire, UK</span></p>
                </div>
                <div class="divider"></div>
                <LineChart data={lineData} />
              </div>
            </div>
          </div>
        </div>
      ))
      : (
        <div className="row">
        <div className="col s12 m3" >
          <div className="card">
            <div className="card-content">
              <div className="row rowset">
              <Skeleton count={7}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
  }
</React.Fragment>
  )
}
export default Player;