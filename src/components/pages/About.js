import React from 'react';
import Avatar from '@mui/material/Avatar';


export default function About() {
  return (
    <div>
      <Avatar
        alt="Joe Kowalczyk"
        src="/images/joepp.jpg"
        sx={{ width: 200, height: 200 }}
      />
      <h1>About Me</h1>
      <div className="aboutMe">
        <p>
          I'm a full stack web developer based in Chicago, IL. Experience with HTML, CSS, Javascript, Node, Mongo and SQL databases, Node and MERN stack. Check out my portfolio tab to see examples of projects.
        </p>
        <p>
          Former hospitality professional who puts an emphasis on communication and understanding client's needs. Lots of previous bartending experience so I'm fun to have around at company parties
        </p>
        <p>
          Experience within the organic agriculture field as well, so I understand the importance of hard work and meeting deadlines. If you have any issues with your home garden I can also chat about that as well!
        </p>
      </div>
    </div>
  );
}
