import React, { useEffect, useState } from 'react';

import { Dock } from './Components/Dock';

import "./styles/app.css"


import ios from "./assets/img/ios17.png"
import ipados from "./assets/img/ipados17.png"
import macos from "./assets/img/macos17.jpg"

function App() {
  const [wallpaperUrl, setWallpaperUrl] = useState("../assets/img/")
  useEffect(() => {
    const isIphone = /iPhone/.test(navigator.userAgent);
    const isIpad = /iPad/.test(navigator.userAgent);
    const isMac = /Mac/.test(navigator.userAgent);

    if (isIphone) setWallpaperUrl(ios);
    else if (isIpad) setWallpaperUrl(ipados);
    else if (isMac) setWallpaperUrl(macos);
    else setWallpaperUrl(null);
        
  }, [])

  return (
    <div className="App" style={wallpaperUrl ? {backgroundImage : `url(${wallpaperUrl})`} : null}>

      <Dock />
    </div>
  );
}

export default App;
