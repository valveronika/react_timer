
import React from "react";

import TimerButton from "./TimerButton";
import styles from "./TimerStyles";

export default function Panel(props) {
  return (
    <div style={styles.panel}>
      <TimerButton
        icon={props.onStatus === true ? "pause" : "play"}
        onClick={props.onPlay} />
          console.log('toggle play/pause');

      />
      <TimerButton
        icon="stop"
        onClick={props.onReset} />
            console.log('reset');

      <TimerButton
        icon="clock-o"
        onClick={props.onLap} />
          console.log('lap');

    </div>
  )
}

