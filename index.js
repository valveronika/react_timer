import React, { useState, useEffect, useRef } from "react";
import TimerCounter from "./TimerCounter";
import TimerPanel from "./TimerPanel";
import TimerLaps from "./TimerLaps";
import styles from "./TimerStyles";

export default function TimerApp() {
  //เริ่มนับที่0
  const [count, setCount] = useState(0);
  //กำหนดเป็นarray สามารถลองใส่ได้เช่น [1,2,3,4]
  const [laps, setLaps] = useState([]);
  //กำหนดให้เป็นfalseเพราะเวลาเปิดตอนแรกสุดให้ยังไม่เล่นเลย
  const [isRunning, setIsRunning] = useState(false);
  // มีการอัฟเดท และกำหนดค่าเริ่มต้น

  useEffect(() => {
    //1.Effect Code
    //Call everytime component updated

    //2.Clean up code
    //Call everytime right before next component updated
    //return()=>xxx

    let timeoutId;
    //ถ้ามันเล่นให้ค่าบวก 1 ทุกๆ1000ms
    if (isRunning) {
      timeoutId = setTimeout(() => {
        setCount(state => state + 1)
      }, 1000);
      //ถ้าcountไม่เท่ากับ 0 ต้อง clearTimeout
    } else if (count !== 0) {
      clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
    //ค่าที่อยู่คือถ้าเปลี่ยนจะเรียก use effect แต่ถ้าค่าไม่ได้อยู่ก้จะไม่เรียก useeffect ในที่นี้ไม่ได้ใ่laps เพื่อให้กดแลปแล้วเลขโชว์ทันทีไม่ต้องรอcallbackตัวก่อนหน้า
  }, [isRunning, count]);

  // To cancel the timer,
  // use clearTimeout(timeoutId)

  function stop() {
    // Write some code here...
    console.log(isRunning);
    setCount(count);
    toggle();


  }

  function toggle() {
    //setIsRunning( !isRunning);
    //ใช้เป็นfunctionเนื่องจากขึ้นกับค่าก่อนหน้า
    setIsRunning(state => !state);
    console.log(isRunning);
  }

  function reset() {
    // Write some code here...
    setCount(0);
    setIsRunning(false);
    setLaps([]);
    //set ให้กลับไปยังค่าเริ่มต้น
    console.log("reset");

    // clearTimeout(timeoutId);
  }

  function recordLap() {
    // Write some code here...
    console.log("lap");
    //good
    //setLaps(state => state.concat([count]))
    setLaps(state => [count].concat(state));
    //bad
    //  setLaps(state => state.concat([count]))
  }


  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter count={count} />
        <TimerPanel onPlay={stop} onReset={reset} onLap={recordLap} onStatus={isRunning} />
        <TimerLaps laps={laps} />
      </div>
    </div>
  );
}

