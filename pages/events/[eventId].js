import { getEventById, getFeaturedEvents } from '../../dummy-data'
import { Fragment } from 'react'
import EventSummeary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

const EventDetailPage = ({ event }) => {

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

export async function getStaticProps(context) {
    const { params } = context
    const event = await getEventById(params.eventId)
    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()
    const paths = events.map(event => ({ params: { eventId: event.id } }))
    return {
        paths,
        fallback: 'blocking'
    }
}


export default EventDetailPage