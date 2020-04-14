import React, { Component } from 'react';

//Styles
import './App.css';

class App extends Component{
    state = {
        
    }

    wholeInputChangeHandler = () => {

        const population = document.querySelector('#population')
        const timeToElapse = document.querySelector('#timeToElapse')
        const reportedCases = document.querySelector('#reportedCases')
        const totalHospitalBeds = document.querySelector('#totalHospitalBeds')
        const periodType = document.querySelector('#periodType')

        population.setAttribute('data-population', population.value)
        timeToElapse.setAttribute('data-time-to-elapse', timeToElapse.value)
        reportedCases.setAttribute('data-reported-cases', reportedCases.value)
        totalHospitalBeds.setAttribute('data-total-hospital-beds', totalHospitalBeds.value)
        periodType.setAttribute('data-period-type', periodType.value)

        this.setState({
            data: {
                population,
                timeToElapse,
                reportedCases,
                totalHospitalBeds,
                periodType,
            }
        })
    }

    render(){
        return(
            <div className="App">
                <h1>COVID-19 Estimator</h1>
                <form action="#" method="GET">

                    <label>Population</label>
                    <input type="number" id="population" data-population=""></input>

                    <label>Duration</label>
                    <input type="number" id="timeToElapse" data-time-to-elapse=""></input>

                    <label>Total Reported Cases</label>
                    <input type="number" id="reportedCases" data-reported-cases=""></input>

                    <label>Total Hospital Beds</label>
                    <input type="number" id="totalHospitalBeds" data-total-hospital-beds=""></input>

                    <label>Period Type</label>
                    <select type="text" id="periodType" data-period-type="">
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                    <button onClick={this.wholeInputChangeHandler} data-go-estimate>Get Estimate</button>
                </form>
            </div>
        )
    }
}

export default App;
