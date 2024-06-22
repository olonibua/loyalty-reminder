import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import LoyaltyAccess from "./component/LoyaltyAccess";
import DocumentItem from "./component/DocumentItem"; // Import the new component

function App() {
const [userId, setUserId] = useState(1);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getReminders, setReminders] = useState([]);

  const fetchPlan = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${userId}/plan`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPlan(data.plan);
    } catch (error) {
      console.error("Error fetching the plan:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReminders = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/services/${userId}/reminders`
      );
      setReminders(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]); // Empty dependency array means this function won't change

  useEffect(() => {
    fetchReminders();
  }, [fetchReminders]);

  return (
    <div className="app bg-[#ebe6eb] p-10 h-full min-h-[100vh] w-full">
      <div className=" gap-3 bg-white rounded-[12px] p-5 max-w-[1200px] w-full mx-auto shadow-xl">
        <h2 className="text-[30px] text-black font-[600]">Loyalty data</h2>
        <p className="text-[18px] text-[#757575] font-[500]">
          Define how soon your client should return for a necessary touch-up or
          to renew the service. Your client will receive a message and a booking
          link on the most convenient date.
        </p>

        <div className="grid sm:flex justify-center my-4">
          <button
            className={`p-2 w-40 font-[600]  ${
              userId === 1
                ? "text-black  bg-white Border "
                : "text-[#5c5c5c6b] bg-[#ebe8e8] border-[#672e96] border  "
            }`}
            onClick={() => setUserId(1)}
          >
            client 1
          </button>
          <button
            className={`p-2 w-40 ml-3 font-bold ${
              userId === 2
                ? "text-black bg-white Border"
                : "text-[#5c5c5c6b] bg-[#ebe8e8] border  "
            }`}
            onClick={() => setUserId(2)}
          >
            client 2
          </button>
          <button
            className={`p-2 w-40 ml-3 font-bold ${
              userId === 3
                ? "text-black  bg-white Border"
                : "text-[#5c5c5c6b] bg-[#ebe8e8]  "
            }`}
            onClick={() => setUserId(3)}
          >
            client 3
          </button>
        </div>
        <div className="grid sm:flex justify-center bg-[#eeeeee] rounded-[12px] p-10">
          <button
            className="bg-[#672e96] p-2 w-40 text-white font-[600]"
            onClick={fetchPlan}
          >
            Set a reminder
          </button>
          <button className="text-[#5c5c5c6b] bg-white p-2 w-40 ml-3 font-bold">
            PRO
          </button>
        </div>

        <section className="bg-[#eeeeee] rounded-[12px] gap-5 grid sm:flex p-10 mt-5">
          <div>
            {!loading && plan && (
              <LoyaltyAccess
                plan={plan}
                userId={userId}
                onReminderSaved={fetchReminders}
              />
            )}
          </div>

          <div className="w-full">
            {getReminders.map((reminder, index) => (
              <DocumentItem reminder={reminder} key={index} />
            ))}
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}

export default App;
