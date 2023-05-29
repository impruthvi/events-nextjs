import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';
const HomePage = () => {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <ul>
                <EventList events={featuredEvents} />
            </ul>
        </div>
    )
}

export default HomePage