import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Strategy from "../../icons/Strategy.png";


const Medium = ({channels, setChannels}) => {
  const [mediums, setMediums] = useState([]);
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const { state } = useLocation();

  const location = useLocation();

  const result = location.pathname;

  const channel = result.split("/")[1];

  // console.log({channel})
  // console.log({ state });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://strategytooladmin.handsintechnology.in/api/channels?populate=icon"
      );
      setChannels(data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://strategytooladmin.handsintechnology.in/api/mediums?filters[channel][text]=${channel}&populate=icon`
      );
      setMediums(data.data);
    };
    fetchData();
  }, [channel]);

  const clickHandler = (path) => {
    navigate(`${channel}/${path}`, { state: path });
    setActive(path);
  };

  return (
    <div>
      <div className="textmenu">
        <div className="brand-logo">
          
          {/* {channel ? 
           <h6 style={{textTransform:"capitalize"}}>{channel}</h6>
            :
           <img src={Strategy} width="100" alt="STRATEGY TOOL" /> 
          // <h6>Strategy Tool</h6>
          } */}
           <img src={Strategy} width="100" alt="STRATEGY TOOL" />
         
        </div>
        <div className="tab-content">
          <div id="pills-dashboards">
            <div className="list-group list-group-flush">
              {mediums.map((e) => {
                const medium = e.attributes.medium;

                //  const icon = e.attributes.icon;
                const img = e.attributes.icon.data;

                return (
                  <Link
                    onClick={() => clickHandler(medium)}
                    key={e.id}
                    id={medium}
                    to={`/${channel}/${medium}`}
                    style={
                      medium === active ? { backgroundColor: "#D5E0F1", 
                      // borderLeft:"4px solid #03a9f4"
                    } : null
                    }
                    className="list-group-item fontss"
                    // data-bs-toggle="pill" data-bs-target="#pills-linkedin"
                  >
                    {/* <img
                      src={`https://strategytooladmin.handsintechnology.in/${icon["data"]["attributes"]["url"]}`}
                      style={{ height: "2.5vh", marginRight: "5px" }}
                    ></img> */}

                    {
                       (img?.attributes?.ext === ".png") &&
                        
                          <img
                            src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                            // style={{
                            //   height: "25vh",
                            //   width: "20vw",
                            //   marginRight: "5px",
                            // }}
                            style={{ height: "2.5vh", marginRight: "5px" }}
                          ></img>
                        
                    }
                    {
                       (img?.attributes?.ext === ".svg") &&
                        
                          <img
                            src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                            // style={{
                            //   height: "25vh",
                            //   width: "20vw",
                            //   marginRight: "5px",
                            // }}
                            style={{ height: "2.5vh", marginRight: "5px" }}
                          ></img>
                        
                    }
                    {
                       (img?.attributes?.ext === ".jpeg" ) &&
                        
                          <img
                            src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                            // style={{
                            //   height: "25vh",
                            //   width: "20vw",
                            //   marginRight: "5px",
                            // }}
                            style={{ height: "2.5vh", marginRight: "5px" }}
                          ></img>
                        
                    }
                     {
                       (img?.attributes?.ext === ".webp" ) &&
                        
                          <img
                            src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                            // style={{
                            //   height: "25vh",
                            //   width: "20vw",
                            //   marginRight: "5px",
                            // }}
                            style={{ height: "2.5vh", marginRight: "5px" }}
                          ></img>
                        
                    }
                    {
                       (img?.attributes?.ext === ".jpg") &&
                        
                          <img
                            src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                            // style={{
                            //   height: "25vh",
                            //   width: "20vw",
                            //   marginRight: "5px",
                            // }}
                            style={{ height: "2.5vh", marginRight: "5px" }}
                          ></img>
                        
                    }
                   
                    {medium}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* <div className="tab-pane fade" id="pills-widgets">
            <div className="list-group list-group-flush">
              <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-0">Widgets</h5>
                </div>
                <small className="mb-0">Some placeholder content</small>
              </div>
              <a href="widgets-static-widgets.html" className="list-group-item">
                <i className="bi bi-box" />
                Static Widgets
              </a>
              <a href="widgets-data-widgets.html" className="list-group-item">
                <i className="bi bi-bar-chart" />
                Data Widgets
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Medium;
