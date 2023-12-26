import farawin from "farawin";
import { useState } from "react";

export const RemoveContact = ({ setshowRemoveContact }) => {
  const [inputTel, setInputTel] = useState("");

  const SendInformation = async () => {
    const EnMobile = farawin.toEnDigit(inputTel);
    const mobileRegex = farawin.mobileRegex;

    if (mobileRegex.test(EnMobile)) {
      const valid = await farawin.testDeleteContact(EnMobile);
      alert(valid.message);
    } else {
      alert("شماره موبایل را درست وارد کنید");
    }
  };

  return (
    <form className="flex flex-col gap-4 justify-around bg-red-500 rounded-2xl text-white h-[300px] w-[300px]  overflow-hidden my-1 p-6">
      <div
        onClick={() => setshowRemoveContact((prev) => !prev)}
        className="cursor-pointer self-end w-8 rounded-full hover:bg-red-700 p-1"
      >
        {" "}
        X{" "}
      </div>

      <h1 className=" text-white text-lg ">حذف مخاطب</h1>
      <label>شماره تماس :</label>
      <input
        type="tel"
        value={inputTel}
        onChange={(e) => setInputTel(e.target.value)}
        className="outline-none  h-8 text-center text-black"
      />

      <button
        type="button"
        onClick={SendInformation}
        className="border-none bg-red-500  h-10 rounded-full hover:bg-red-700"
      >
        REMOVE
      </button>
    </form>
  );
};
