

import React from 'react';
import './Featured.css'; 

const Featured = () => {
  const headings = ["Anatoal Lieven", "Yohanca Delgado", "Ismat Ara", "W.Kamau Bell", "Robert j.Davis", "Christina Bu"];
  const content = [
    "Russian Has Been Warning the west About Urraine for Decades",
    "The Life-Changing Practice that will Help You Feel More Gratitude",
    "How it Feels to Be a Musilm woman Sold by india,s Right Wing",
    "There's So Much More To Say About Bill Cosby",
    "Why you Shouldn't Exercise to Lose Weight",
    "What Norway Can Teach the World About Switching to Electric Vehicles",
  ];

  return (
    <>
    <h1 className='heading'>FEATURED VOICES</h1>
    <div className="content-adjust">
     
      {headings.map((heading, index) => (
        <div key={index} className="content-item">
          <h2>{heading}</h2>
          <p>{content[index]}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Featured;
