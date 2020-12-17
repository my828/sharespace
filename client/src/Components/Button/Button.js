import React from 'react'
import Button from "@material-ui/core/Button";
import './Button.scss'

export default function Btn({ type, bookingType, display, handleView, currentView }) {
    let active = type === currentView;
    let style = {};
    if (active) {

        style = { backgroundColor: "white", color: "#202e57" };
    }
    return (
      <Button
        id="button"
        variant="contained"
        color="primary"
        onClick={handleView(type, bookingType)}
        style={style}
      >
        {display}
      </Button>
    );
}
