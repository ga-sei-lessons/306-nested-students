import React, { Component } from "react"
import Student from "./Student"

export default class Roster extends Component {
    render() {
        const students = this.props.students.map((student, i) => {
            return (
                <Student 
                    key={'student' + i}
                    student={student}
                />
            )
        })

        return (
            <div>
                {students}
            </div>
        )
    }
}