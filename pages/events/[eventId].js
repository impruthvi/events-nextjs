import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import { Fragment } from 'react'
import EventSummeary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

const EventDetailPage = () => {
    const router = useRouter()
    const { eventId } = router.query
    const event = getEventById(eventId)

    if(!event) {
        return <p>No event found!</p>
    }

    return (
        <Fragment>
            <EventSummeary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage