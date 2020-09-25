import React from 'react';
import DesktopLandingPage from './desktopLandingPage';
// import MobileLandingPage from './mobileLandingPage';

const ua = navigator.userAgent;
const isAndroid = /Android/i.test(ua);
const isBlackBerry = /BlackBerry/i.test(ua);
const isWindowPhone = /IEMobile/i.test(ua);
const isIOS = /iPhone|iPad|iPod/i.test(ua);
const isMobile = isAndroid || isBlackBerry || isWindowPhone || isIOS;

const LandingPage: React.FC = () => {
  if (isMobile) {
    return <DesktopLandingPage />;
  }

  return <DesktopLandingPage />;
};

export default LandingPage;
