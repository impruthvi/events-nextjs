import { getAllEvents } from '../../dummy-data';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';

const AllEventspage = () => {
    const events = getAllEvents();
    return (
        <Fragment>
            <EventList events={events} />
        </Fragment>
    )
}


export default AllEventspage