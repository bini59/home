import React, { useEffect, useMemo, useRef, useState } from 'react';

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
import useEnvStore from './store/envStore';


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

  // brightness 상태
  const {brightness} = useEnvStore();

  const appStyle = useMemo(()=>{
    // brigthness 최대치를 60으로 보정
    const bright = brightness * 0.6 + 40;

    const style = {};
    if(wallpaperUrl) style.backgroundImage = `url(${wallpaperUrl})`;
    if(brightness >= 0) style.filter = `brightness(${bright}%)`;
    return style;
  },[wallpaperUrl, brightness])


  return (
    <div className="App" style={appStyle} ref={appRef}>
      <Status />
      <Dock width={width} />
      {controlPanel && <ControlPanel />}
    </div>
  );
}

export default App;
