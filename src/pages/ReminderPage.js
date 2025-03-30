import Header from "../components/Header";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

function ReminderPage() {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminderMessage, setReminderMessage] = useState("");

  useEffect(() => {
    // Load dates from local storage on component mount
    const storedDates = localStorage.getItem("dates");
    if (storedDates) {
      setDates(JSON.parse(storedDates));
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReminderMessageChange = (event) => {
    setReminderMessage(event.target.value);
  };

  const setReminder = () => {
    const now = new Date();
    const timeDiff = selectedDate.getTime() - now.getTime();
    if (timeDiff <= 0) {
      toast.error("Please select a future date and time");
      return;
    }

    // Add new date to the dates array
    const newDate = selectedDate.toISOString();
    setDates([...dates, newDate]);

    // Save dates to local storage
    localStorage.setItem("dates", JSON.stringify([...dates, newDate]));

    setTimeout(() => {
      notifyReminder(newDate);
    }, timeDiff);

    alert("Reminder is set!!");
  };

  const notifyReminder = (date) => {
    toast.success(reminderMessage || "Reminder!");

    // Remove the triggered reminder from dates array
    const updatedDates = dates.filter((item) => item !== date);
    setDates(updatedDates);

    // Save updated dates to local storage
    localStorage.setItem("dates", JSON.stringify(updatedDates));
  };

  return (
    <>
      <Header />
      <div className="reminder-container">
        <div className="reminder-css">
          <h1>Set Reminder here!!</h1>
          <div style={{ padding: 2, margin: 2 }}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <div style={{ padding: 2, margin: 2 }}>
            <textarea
              placeholder="Enter your reminder message"
              value={reminderMessage}
              onChange={handleReminderMessageChange}
            />
          </div>
          <div style={{ padding: 2, margin: 2 }}>
            <button onClick={setReminder}>Set Reminder</button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ReminderPage;
