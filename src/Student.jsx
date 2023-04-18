import React, { Component } from "react"
import Score from "./Score"

export default class Student extends Component {
    render() {
        const scores = this.props.student.scores.map((score, i) => {
            return (
                <Score 
                    key={this.props.student.name + 'score' + i}
                    date={score.date}
                    score={score.score}
                />
            )
        })
        return (
            <div>
                <h2>{this.props.student.name}</h2>

                <p>{this.props.student.bio}</p>

                {scores}
            </div>
        )
    }
}