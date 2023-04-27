import React, { useEffect } from 'react';
import { isIOS, isAndroid, isDesktop } from 'react-device-detect';

const AppRouting = () => {
  useEffect(() => {
    if (isIOS) {
      window.location.href = 'https://apps.apple.com/se/app/v%C3%A4vda-rum/id1633434387';
    } else if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.untoldgarden.wovenplaces&hl=en&gl=US';
    } else if (isDesktop) {
      window.location.href = 'https://www.vavdarum.se';
    }
  }, []);

  return (
    <div>
      <div className="title">
        <h1>App routing in progress...</h1><br></br>
      </div>
      <div className="text-container">
      </div>
    </div>
  );
};

export default AppRouting;