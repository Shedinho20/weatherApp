import React from "react";
import Hour from "./Hour";
class Hours extends React.Component {
    state = {
        Hours: []
    };

    async componentDidMount() {
        const url =
            "https://api.openweathermap.org/data/2.5/onecall?lat=6.5244&lon=3.3792&appid=c4bf502f01ad796b2ae93a93063fccb2";
        const res = await fetch(url);
        const data = await res.json();
        const hourly = data.hourly;
        this.setState({ Hours: hourly });
    }
    render() {
        const parma = parseInt(this.props.match.params.dt);
        const day = new Date(parma * 1000).toLocaleString("en-US", { day: "numeric" });
        const currenthr = this.state.Hours.filter(
            hour => day === new Date(hour.dt * 1000).toLocaleString("en-US", { day: "numeric" })
        );
        console.log(currenthr);

        if (currenthr.length === 0) {
            return (
                <div className="hourbox1">
                    <h1> No hourly data available</h1>
                </div>
            );
        } else {
            return (
                <div className="hourbox">
                    {currenthr.map(hour => (
                        <Hour key={hour.dt} hour={hour} />
                    ))}
                </div>
            );
        }
    }
}
export default Hours;
