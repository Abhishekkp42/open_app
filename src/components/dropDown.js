import React, { useState } from "react";
import dropIcon from "./images/dropIcon.svg";

const Dropdown = ({ data, getData }) => {
    const [Selected, setSelected] = useState("Select");
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
    }

    function handleClick(i) {
        getData(data[i])
        setSelected(data[i])
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "fitContent",
            gap: "1rem",
            border: "1px solid #EBEBEB",
            position: "relative",
            borderRadius: "10px",
            padding: "0.2rem 1.5rem",
            cursor: "pointer",
        }} onClick={() => {
            handleToggle()
        }}>
            <span>{Selected}</span>
            <img src={dropIcon} alt="dropIcon" />
            <div
                style={{
                    display: `${toggle ? "flex" : "none"}`,
                    top: "2.2rem",
                    left: 0,
                    borderRadius: "10px",
                    padding: "0.4rem !important",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    backgroundColor: "white",
                    width: "100%",
                    zIndex: 1000,
                    gap: "0.2rem",
                    border: "1px solid #EBEBEB"
                }}
            >
                {data.map((a, i) => (
                    <span
                        onClick={() => {
                            handleClick(i);
                        }}
                        key={i}
                    >
                        {a}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
