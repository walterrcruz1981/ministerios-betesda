'use client'
import { AddToCalendarButton } from "add-to-calendar-button-react"
import styles from '../eventos.module.scss'

export default function AddToCalender({ content }) {
    const options = ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo']
    console.log(content)
    return (
        <AddToCalendarButton
            name={content.title}
            options={options}
            location={content.location}
            description={content.description}
            startDate={content.date}
            startTime={content.startTime}
            endTime={content.endTime}
            label="Agregar al calendario"
            timeZone="currentBrowser"
            iCalFileName="Reminder-Event"
            buttonStyle="neumorphism"
        >
        </AddToCalendarButton>
    )
}