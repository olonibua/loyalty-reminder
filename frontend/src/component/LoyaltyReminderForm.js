import React, { useState } from "react";
import axios from "axios";
import "./styles.css";


function LoyaltyReminderForm({ userId, onReminderSaved }) {
  const [returnPeriodQuantity, setReturnPeriodQuantity] = useState(6);
  const [returnPeriodType, setReturnPeriodType] = useState("Weeks");
  const [reminderLeadTimeQuantity, setReminderLeadTimeQuantity] = useState(6);
  const [reminderLeadTimeType, setReminderLeadTimeType] = useState("Days");
  const [reminderTiming, setReminderTiming] = useState("Before");
  const [reminderMessage, setReminderMessage] = useState("");
const [userEmail, setUserEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const reminder = {
      returnPeriodQuantity,
      returnPeriodType,
      reminderLeadTimeQuantity,
      reminderLeadTimeType,
      reminderTiming,
      reminderMessage,
      userEmail,
    };
    try {
      await axios.post(
        `http://localhost:5000/api/services/${userId}/reminders`,
        reminder
      );
      alert("Reminder saved successfully");
      onReminderSaved(); // Refetch reminders after saving
    } catch (error) {
      console.error(error);
      alert("Failed to save reminder");
    }
  };


  return (
    <>
      <div className="form-container">
        <h2 className="text-[25px] font-[700]">Loyalty Form</h2>
        <div className="form-group">
          <label>
            How long before your client should repeat this service?{" "}
          </label>
          <div className="input-group">
            <input
              placeholder="Enter client email..."
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            //   required
            />
            <input
              type="number"
              value={returnPeriodQuantity}
              onChange={(e) => setReturnPeriodQuantity(e.target.value)}
            />
            <select
              value={returnPeriodType}
              onChange={(e) => setReturnPeriodType(e.target.value)}
            >
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>
            When should we remind your client to return for their service?{" "}
          </label>
          <div className="input-group">
            <input
              type="number"
              value={reminderLeadTimeQuantity}
              onChange={(e) => setReminderLeadTimeQuantity(e.target.value)}
            />
            <select
              value={reminderLeadTimeType}
              onChange={(e) => setReminderLeadTimeType(e.target.value)}
            >
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
            </select>
            <select
              value={reminderTiming}
              onChange={(e) => setReminderTiming(e.target.value)}
            >
              <option value="Before">Before</option>
              <option value="After">After</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Enter the reminder message to be sent to your client:</label>
          <textarea
            value={reminderMessage}
            onChange={(e) => setReminderMessage(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </>
    //     <div className=" app mx-auto p-5 rounded-[12px] shadow-2xl border border-[#4d4d4d]">
    //       <h2 className="text-[50px] text-left font-[600] text-white pt-10">
    //         Loyalty Reminder
    //       </h2>
    //       <section className="my-10">
    //         <h3 className=" text-left text-white text-[25px]">Return period</h3>
    //         <h3 className=" text-left text-white text-[20px]">
    //           Within how long should your client have this done again? service?
    //         </h3>
    //       </section>

    //       <section className="grid grid-cols-2 text-black outline-none gap-3 my-10">
    //         <div>
    //           <h3 className="mb-2 text-[18px] font-[600] text-left text-white">
    //             Quantity
    //           </h3>
    //           <input
    //             type="text"
    //             className="h-16 p-1 w-full bg-gray-300 text-black font-[600] outline-none selection:text-left"
    //             value={returnPeriodQuantity}
    //             onChange={(e) => setReturnPeriodQuantity(e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div>
    //           <h3
    //             className="mb-2 text-[18px] font-[600] text-white"
    //           >
    //             Type
    //           </h3>
    //           <select
    //             className="h-16 p-1 text-left w-full bg-gray-300 text-black font-[600] outline-none"
    //             value={returnPeriodType}
    //             onChange={(e) => setReturnPeriodType(e.target.value)}
    //           >
    //             <option value="Days">Days</option>
    //             <option value="Weeks">Weeks</option>
    //             <option value="Months">Months</option>
    //           </select>
    //         </div>
    //       </section>

    //       <section className="w-full text-left text-white my-10">
    //         <h3 className="my-2 text-[25px]">
    //           Within how long should your client have this done again? service?
    //         </h3>
    //         <section className="grid grid-cols-3 w-full gap-3">
    //           <div>
    //             <h3 className="mb-2 text-[18px] font-[600]">Quantity</h3>
    //             <input
    //               type="text"
    //               className="w-full bg-gray-300 text-black font-[600] outline-none text-left"
    //               value={reminderLeadTimeQuantity}
    //               onChange={(e) => setReminderLeadTimeQuantity(e.target.value)}
    //             />
    //           </div>
    //           <div>
    //             <h3 className="mb-2 text-[18px] font-[600] text-left text-white">
    //               Type
    //             </h3>
    //             <select
    //               className="bg-gray-300 text-black font-[600] outline-none w-full"
    //               value={reminderLeadTimeType}
    //               onChange={(e) => setReminderLeadTimeType(e.target.value)}
    //             >
    //               <option value="Days">Days</option>
    //               <option value="Weeks">Weeks</option>
    //               <option value="Months">Months</option>
    //             </select>
    //           </div>
    //           <div>
    //             <h3 className="mb-2 text-[18px] font-[600]">Type</h3>
    //             <select
    //               className="bg-gray-300 text-black font-[600] outline-none w-full"
    //               value={reminderTiming}
    //               onChange={(e) => setReminderTiming(e.target.value)}
    //             >
    //               <option value="Before">Before</option>
    //               <option value="After">After</option>
    //             </select>
    //           </div>
    //         </section>
    //         <section>
    //           <h3 className="loyaltyMsgh3">
    //             Write the message with which we must remind your client that has to
    //             return:
    //           </h3>
    //           <textarea
    //             className="outline-none text-black h-24"
    //             placeholder="Reminder message...
    // "
    //             value={reminderMessage}
    //             onChange={(e) => setReminderMessage(e.target.value)}
    //           ></textarea>
    //         </section>
    //       </section>
    //       <section className="btnSection">
    //         <button
    //           style={{
    //             backgroundColor: "white",
    //             border: "1px solid #937CF4",
    //             padding: "10px",
    //             color: "#937CF4",
    //           }}
    //         >
    //           Cancelar
    //         </button>
    //         <button
    //           onClick={handleSubmit}
    //           style={{
    //             backgroundColor: "#937CF4",
    //             border: "none",
    //             padding: "10px",
    //             color: "white",
    //           }}
    //         >
    //           Guardar
    //         </button>
    //       </section>
    //     </div>
  );
}

export default LoyaltyReminderForm;

//   <div className="w-[1100px] app mx-auto p-5 rounded-[12px] shadow-2xl border border-[#4d4d4d]">
//     <h2 className="text-[26px] text-left text-white pt-10">
//       Recordatorio de fidelización para Balayage
//     </h2>
//     <section className="LoyaltyHeadingsection">
//       <h3 className="LoyaltyHeadingsection">Período de retorno</h3>
//       <h3 className="LoyaltyHeadingsection">
//         ¿Dentro de cuánto tiempo tu cliente debe volver a realizarse este
//         servicio?
//       </h3>
//     </section>

//     <section className="LoyaltyfirstForm">
//       <div>
//         <h3 className="LoyaltyfirstFormh3">Cantidad</h3>
//         <input
//           type="text"
//           className="LoyaltyfirstFormInput"
//           value={returnPeriodQuantity}
//           onChange={(e) => setReturnPeriodQuantity(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <h3 style={{ fontSize: "16px", fontWeight: "400" }}>Tipo</h3>
//         <select
//           className="LoyaltyfirstFormSelect"
//           value={returnPeriodType}
//           onChange={(e) => setReturnPeriodType(e.target.value)}
//         >
//           <option value="Days">Days</option>
//           <option value="Weeks">Weeks</option>
//           <option value="Months">Months</option>
//         </select>
//       </div>
//     </section>

//     <section className="LoyaltysecondForm">
//       <h3 className="LoyaltysecondFormh3">
//         ¿Cuándo debemos avisarle a tu cliente que tiene que volver?
//       </h3>
//       <section className="LoyaltysecondFormsection">
//         <div>
//           <h3 className="LoyaltysecondFormh3">Cantidad</h3>
//           <input
//             type="text"
//             className="LoyaltysecondFormInput"
//             value={reminderLeadTimeQuantity}
//             onChange={(e) => setReminderLeadTimeQuantity(e.target.value)}
//           />
//         </div>
//         <div>
//           <h3 className="LoyaltysecondFormh3">Tipo</h3>
//           <select
//             className="LoyaltysecondFormSelect"
//             value={reminderLeadTimeType}
//             onChange={(e) => setReminderLeadTimeType(e.target.value)}
//           >
//             <option value="Days">Days</option>
//             <option value="Weeks">Weeks</option>
//             <option value="Months">Months</option>
//           </select>
//         </div>
//         <div>
//           <h3 className="LoyaltysecondFormh3">Tipo</h3>
//           <select
//             className="LoyaltysecondFormSelect"
//             value={reminderTiming}
//             onChange={(e) => setReminderTiming(e.target.value)}
//           >
//             <option value="Before">Before</option>
//             <option value="After">After</option>
//           </select>
//         </div>
//       </section>
//       <section>
//         <h3 className="loyaltyMsgh3">
//           Escribe el mensaje con el que debemos recordarle a tu cliente que
//           tiene que regresar:
//         </h3>
//         <textarea
//           className="loyaltyMsgTextArea"
//           placeholder="Mensaje del recordatorio..."
//           value={reminderMessage}
//           onChange={(e) => setReminderMessage(e.target.value)}
//         ></textarea>
//       </section>
//     </section>
//     <section className="btnSection">
//       <button
//         style={{
//           backgroundColor: "white",
//           border: "1px solid #937CF4",
//           padding: "10px",
//           color: "#937CF4",
//         }}
//       >
//         Cancelar
//       </button>
//       <button
//         onClick={handleSubmit}
//         style={{
//           backgroundColor: "#937CF4",
//           border: "none",
//           padding: "10px",
//           color: "white",
//         }}
//       >
//         Guardar
//       </button>
//     </section>
//   </div>;