import React, { useEffect, useState } from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
  // console.log(data);
  // console.log(removeTour);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {data.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
