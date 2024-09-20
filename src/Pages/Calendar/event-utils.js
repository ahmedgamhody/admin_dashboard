// event-utils.js
let eventGuid = 0;
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0],
  },
];

export function createEventId() {
  return String(eventGuid++);
}
