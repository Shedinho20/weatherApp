import React from "react";
import Hour from "./Hour";
class Hours extends React.Component {
    state = {
        Hours: [
            { dt: 1588064400, temp_min: 3, temp_max: 45, day: "Mon", icon: "01d" },
            { dt: 1588064400, temp_min: 30, temp_max: 450, day: "Mon", icon: "10d" },
            { dt: 1588064400, temp_min: 23, temp_max: 415, day: "Mon", icon: "10n" },
            { dt: 1588064400, temp_min: 31, temp_max: 45, day: "Mon", icon: "10d" },
            { dt: 1588064400, temp_min: 1, temp_max: 5, day: "Mon", icon: "10n" },
            { dt: 1588150800, temp_min: 3, temp_max: 45, day: "Tue", icon: "10d" },
            { dt: 1588150800, temp_min: 31, temp_max: 49, day: "Tue", icon: "01n" },
            { dt: 1588237200, temp_min: 380, temp_max: 45, day: "Wed", icon: "01d" },
            { dt: 1588323600, temp_min: 386, temp_max: 45, day: "Thu", icon: "10n" },
            { dt: 1588410000, temp_min: 385, temp_max: 115, day: "Fri", icon: "10d" },
            { dt: 1588410000, temp_min: 385, temp_max: 4005, day: "Fri", icon: "10d" },
            { dt: 1588420000, temp_min: 385, temp_max: 7005, day: "Fri", icon: "10d" },
            { dt: 1588410000, temp_min: 35, temp_max: 7, day: "Fri", icon: "10d" },
            { dt: 1588410000, temp_min: 5, temp_max: 7, day: "Fri", icon: "10n" },
            { dt: 1588064400, temp_min: 85, temp_max: 7, day: "Fri", icon: "10d" },
            { dt: 1588064400, temp_min: 8, temp_max: 70, day: "Fri", icon: "10d" }
        ]
    };
    // key(Hour) {
    //     return Hour.temp_min + Hour.icon;
    // }

    render() {
        const parma = parseInt(this.props.match.params.dt);
        let currenthr = null;
        currenthr = this.state.Hours.filter(hour => parma === hour.dt);
        console.log(currenthr);
        return (
            <div className="hourbox">
                {currenthr.map(hour => (
                    <Hour hour={hour} />
                ))}
            </div>
        );
    }
}
export default Hours;
