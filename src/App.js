import React, { useEffect, useRef, useState } from 'react';

import { Dock } from './Components/Dock';
import { ControlPanel } from "./Components/ContorlPanel";

import "./styles/app.css"


import ios from "./assets/img/ios17.png"
import ipados from "./assets/img/ipados17.png"
import macos from "./assets/img/macos17.jpg"
import { Status } from './Components/Status';
import { useClickOutside } from './hooks/useClickOutside';
import { useResize } from './hooks/useResize';

import useViewStore from './store/viewStore';


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
  
  const appRef = useRef(null);
  const [width, setWidth] = useState(0);

  // controlPanel 상태 제어
  const {controlPanel} = useViewStore();
  // 창 밖을 클릭하면 controlPanel을 닫음
  useClickOutside("controlPanel", null);
  // 창이 변경되는 이벤트 감지 후, width를 변경
  useResize(appRef, setWidth);


  return (
    <div className="App" style={wallpaperUrl ? {backgroundImage : `url(${wallpaperUrl})`} : null} ref={appRef}>
      <Status />
      <Dock width={width} />
      {controlPanel && <ControlPanel />}
    </div>
  );
}

export default App;
