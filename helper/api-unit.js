export const getAllEvebts = async () => {
    const response = await fetch(`${process.env.FIREBASE_URL}/events.json`);
    const data = await response.json();
    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvebts();
    return allEvents.filter(event => event.isFeatured);
}

export const getEventById = async (id) => {
    const allEvents = await getAllEvebts();
    return allEvents.find(event => event.id === id);
}
