import React from "react";

const location = props => {
    const { Timezone } = props;
    if (Timezone == null) {
        return null;
    } else {
        return <div className="location">{Timezone}</div>;
    }
};

export default location;
