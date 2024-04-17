import React, { useState } from 'react';

function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true);
  const query = new URLSearchParams(location.search);
  const template = query.get('template');
  const liteLink =
    template === 'laravel'
      ? ''
      : '';

  return (
    <>
    { bannerOpen && (
      <>
      </>
    )}
    </>
  );
}

export default Banner;