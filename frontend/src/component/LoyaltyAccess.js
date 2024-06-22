import React from "react";
import LoyaltyReminderForm from "./LoyaltyReminderForm";

function LoyaltyAccess({ plan, userId, onReminderSaved }) {
  if (plan === "Entrepreneur") {
    return (
      <div className="bg-white  shadow-lg p-5  mb-4  rounded-[12px]">
        <p className="font-[600]">
          Your plan does not have access to this option. Please upgrade to
          Standard or Pro.
        </p>
        <button
          className="mt-2 font-[700] Border"
          onClick={() => (window.location.href = "/upgrade")}
        >
          Upgrade
        </button>
      </div>
    );
  }

  if (plan === "Standard" || plan === "Pro") {
    return (
      <div>
        <LoyaltyReminderForm
          userId={userId}
          onReminderSaved={onReminderSaved}
        />
      </div>
    );
  }

  return <p>Error loading plan information.</p>;
}

export default LoyaltyAccess;
