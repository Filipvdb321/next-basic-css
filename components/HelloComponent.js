import React from 'react';
import { darkGray, grey } from '../styles/colors';

const HelloComponent = () => (
  <div className='hello'>
    <p>Hello World</p>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: ${grey};
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: ${darkGray};
      }
    `}</style>
  </div>
);

export default HelloComponent;