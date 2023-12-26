import farawin from "farawin";
import { useState } from "react";

export const AddContact = ({ setShowAddContact }) => {
  const [inputTel, setInputTel] = useState("");
  const [inputName, setInputName] = useState("");

  const SendInformation = async () => {
    const EnMobile = farawin.toEnDigit(inputTel);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile) && inputName.length >= 3) {
      const valid = await farawin.testAddContact(EnMobile, inputName);
      alert(valid.message);
    }
  };
  return (
    <form className="flex flex-col justify-around bg-green-500 text-white h-[350px] w-[300px]  overflow-hidden my-4 p-4 rounded-2xl">
      <div
        onClick={() => setShowAddContact((prev) => !prev)}
        className=" hover:bg-green-800 p-2 cursor-pointer rounded-full   self-end"
      >
        X
      </div>
      <h1 className="   mb-4">فرم افزودن مخاطب</h1>

      <label>شماره تماس :</label>
      <input
        type="tel"
        onChange={(e) => {
          setInputTel(e.target.value);
        }}
        value={inputTel}
        className="text-center text-black outline-none h-8 rounded-full "
      />

      <label htmlFor="">نام : </label>
      <input
        type="text"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
        className="text-center text-black outline-none h-8 rounded-full"
      />

      <button
        type="button"
        onClick={SendInformation}
        className="hover:bg-green-800 border-none bg-green-600 h-10 rounded-full my-4"
      >
        ADD
      </button>
    </form>
  );
};
