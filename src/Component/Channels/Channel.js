import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Platform from "./Platform";

const Channel = () => {
  const [channels, setChannels] = useState([]);

  const [active, setActive] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://strategytooladmin.handsintechnology.in/api/channels?populate=icon"
      );
      // , {
      //   headers: {
      //     Authorization: ()
      //   }
      // });
      setChannels(data.data);
    };
    fetchData();
  }, []);

  const clickHandler = (path) => {
    navigate(`/${path}`, { state: path });
    setActive(path);
  };

  return (
    <div>
      <ul className="nav nav-pills flex-column">
        {channels.map((e) => {
          const channel = e.attributes.text;
          
          const icon = e.attributes.icon;

          const img = e.attributes.icon.data;

          return (
            <li
              key={e.id}
              className="nav-item fontss"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={channel}
             
            >
              <Link
                to={`/${channel}`}
                className="nav-link"
                data-bs-target={`#${channel}`}
                style={
                  channel === active && " "? { backgroundColor: "#D5E0F1" , boxShadow:"0px 3px 10px red !important",
                  // borderLeft:"4px solid #03a9f4"
                } : null
                }
                onClick={() => clickHandler(channel)}
              >
                {img?.attributes?.ext === ".svg" && (
                  <img
                    src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                    className='logo_iconss'
                  ></img>
                )}
                {img?.attributes?.ext === ".png" && (
                  <img
                    src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                    className='logo_iconss'
                  ></img>
                )}
                {img?.attributes?.ext === ".jpg" && (
                  <img
                    src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                    className='logo_iconss'
                  ></img>
                )}
                {img?.attributes?.ext === ".jpeg" && (
                  <img
                    src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                    className='logo_iconss'
                  ></img>
                )}
                {img?.attributes?.ext === ".webp" && (
                  <img
                    src={`https://strategytooladmin.handsintechnology.in/${img["attributes"]["url"]}`}
                    className='logo_iconss'
                  ></img>
                )}

                {/* {channel} */}
              </Link>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default Channel;
