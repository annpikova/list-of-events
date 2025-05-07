import React from "react";
import { EventItem } from "../App";

interface EventListProps {
  events: EventItem[];
  onEdit: (event: EventItem) => void;
  onDelete: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEdit, onDelete }) => {
  return (
    <ul className="event-list">
      {events.map((event) => (
        <li key={event.id} className="event-item">
        <span>{event.title} - {event.date}</span>
        <div className="event-actions">
          <button onClick={() => onEdit(event)}>Редактировать</button>
          <button onClick={() => onDelete(event.id)}>Удалить</button>
        </div>
      </li>      
      ))}
    </ul>
  );
};

export default EventList;
