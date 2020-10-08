import React from 'react';
import { Slider } from '../slider/Slider';

const images = [
  {
    src: "https://lh3.googleusercontent.com/pw/ACtC-3fvFFHhmtDiIQGfMMeRO76M1v7mqVby5-WqPGqVIPXGjGHkdB3rgqxUvBBcB2o4X0CA6bul-GpAZtRuC9LWoBOnxqRABOnDGkgOW7pn6kCFjuHHJsI3LLBgbjTHA_STSy9FTSlHYVvAW81THMh1ELV8aw=w958-h639-no?authuser=0",
    alt: "",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ACtC-3dLq5zx1DaoUhPzS69FdVzcmk_w8optKD8Bmd1Gzbu6L48Yfxt_L0g2qE1Rnv8kkJBDlqcPZU5aC1di-V4h-r84sdlyLq_PzHR_wpAbuouiAp2K3MVWzuuKZ4rLP0TDgwjRJUkOaJ9BFxwvXrpSjzKbXg=w958-h639-no?authuser=0",
    alt: "",
  }
]

export const Card = () => {
  return (
    <div className="card">
      <div className="card__info">
        <h3>Servicios</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum
          corporis saepe nemo. Dolorem, porro ducimus rem nihil beatae aliquid
          necessitatibus, perspiciatis esse officiis qui doloribus id repellat,
          sint labore!
        </p>
      </div>
      <div className="card__img">
          <Slider imgs={images} />
       </div>
    </div>
  );
};
