import React from "react";
import Card from "../Card/Card";


class WeekContainer extends React.Component {
    state = {
        days: []
    }

    componentDidMount = () => {
        const name = this.props.name;
        const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
            name + "&lang=ru&units=metric&APPID=e3429fa0204b74f7d1f68f4c0c9ea6fb";
        fetch(weatherURL)
        .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({days: dailyData})
            })
    }

    formatCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index}/>)
    }
    render() {
        return(
            <div className="container">
                <h1 className="display-1 jumbotron">5-days Forecast</h1>
                <h4 className="display-5 text-muted">{ this.props.name }</h4>
                    <div className="row justify-content-center">
                        {this.formatCards()}
                    </div>
            </div>
        )
    }
}

export default WeekContainer;