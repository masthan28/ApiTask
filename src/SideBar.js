import React, { useState, useEffect } from 'react';
import './SideBar.css';
import stories from './stories.json';

const Sidebar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {

      console.log(stories);
      setLinks(stories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 let time="MARCH 19,2024 .8:32 PM EST"
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {/* Sidebar content */}
        <strong className='content-way'>LATEST STORIES</strong>
        <ul className='data'>
          {links.map((link, index) => (
            <h3  key={index} ><a href={link.link} style={{textDecoration: 'none'}}>
               {link.title}
               </a>
               <h5 style={{fontWeight: '10'}}>{time}</h5>
            </h3>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
