import React, { useState, useEffect } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./styles.css";

export interface EventItem {
  id: number;
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addEvent = (event: EventItem) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent: EventItem) => {
    setEvents(events.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
    setEditingEvent(null);
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Список мероприятий</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
      </button>
      <EventForm
        onSubmit={editingEvent ? updateEvent : addEvent}
        event={editingEvent}
        setEditingEvent={setEditingEvent}
        events={events}
      />
      <EventList
        events={events}
        onEdit={setEditingEvent}
        onDelete={deleteEvent}
      />
    </div>
  );
};

export default App;
