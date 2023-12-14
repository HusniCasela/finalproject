import React, { useRef, useState } from "react";
import Eye from "../../assets/eye.svg";
import EyeSlash from "../../assets/eyeslash.svg";
import Button from "../Button/Button";
import Allert from "../Allert/Allert";
import axios from "axios"; 
import { SERVER_URL } from "../../lib/constant";
const InputTwo = () => {
  let inputShowHide = useRef(null);
  let inputShowHideO = useRef(null);
  const eye = useRef(null);
  const eyeS = useRef(null);
  const eyeO = useRef(null);
  const eyeOs = useRef(null);
  const [warningRed, setWarningRed] = useState("hidden");
  const [warningRedTwo, setWarningRedTwo] = useState("hidden");
  const [successGreen, setSuccessGreen] = useState("hidden");
  const [inputOne, setInputOne] = useState("border-2");
  const [inputTwo, setInputTwo] = useState("border-2");

  const [eyeHdOne, setEyeHdOne] = useState("");
  const [eyeShOne, setEyeShOne] = useState("hidden");
  const [eyeHdTwo, setEyeHdTwo] = useState("");
  const [eyeShTwo, setEyeShTwo] = useState("hidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const show = () => {
    inputShowHide.current.type = "text";
    setEyeHdTwo("hidden");
    setEyeShTwo("block");
  };
  const hide = () => {
    inputShowHide.current.type = "password";
    setEyeHdTwo("block");
    setEyeShTwo("hidden");
  };
  const sho = () => {
    inputShowHideO.current.type = "password";
    setEyeHdOne("block");
    setEyeShOne("hidden");
  };
  const hid = () => {
    inputShowHideO.current.type = "text";
    setEyeHdOne("hidden");
    setEyeShOne("block");
  };
  
  const butt = async () => {
    try {
      console.log({ email, password });
      const response = await axios.put(
        `${SERVER_URL}/auth/reset-password`,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 &&      inputShowHide.current.value.length >= 8 &&
      inputShowHideO.current.value.length >= 8 &&
      inputShowHide.current.value === inputShowHideO.current.value) {
        console.log("reset password sukses!");
      setInputOne("border-2");
      setInputTwo("border-2");
      setSuccessGreen("block");
      setWarningRed("hidden");
      setWarningRedTwo("hidden");
      } else if(inputShowHide.current.value !== inputShowHideO.current.value){
        console.log("Reset password gagal. Kode status:", response.status);
         setInputOne("border-WARNING");
      setInputTwo("border-WARNING");
      setWarningRedTwo("block");
      setSuccessGreen("hidden");
      setWarningRed("hidden");
      }else{
       setInputOne("border-WARNING");
      setInputTwo("border-WARNING");
      setWarningRed("block");
      setSuccessGreen("hidden");
      setWarningRedTwo("hidden");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    
    
  };
  /*
  const butt = () => {
    
  };
*/
  return (
    <div>
      <div className="mt-8">
        <label className="text-xs font-normal pb-1.5">
          Masukan Email Anda 
        </label>
        <div className="relative">
          <img
            src={Eye}
            alt="hide"
            className={`w-6 absolute mt-TOP ml-right cursor-pointer ${eyeHdOne}`}
            onClick={hid}
            ref={eyeO}
          />
          <img
            src={EyeSlash}
            alt="hide"
            className={`w-6 absolute mt-TOP ml-right cursor-pointer ${eyeShOne}`}
            onClick={sho}
            ref={eyeOs}
          />
          <input
            type="email"
            ref={inputShowHideO}
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full ${inputOne}`}
           value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="text-xs font-normal pb-1.5">
          Masukan Password Baru
        </label>
        <div className="relative">
          <img
            src={Eye}
            alt="hide"
            className={`w-6 absolute mt-TOP ml-right cursor-pointer ${eyeHdTwo}`}
            onClick={show}
            ref={eye}
          />
          <img
            src={EyeSlash}
            alt="hide"
            className={`w-6 absolute mt-TOP ml-right cursor-pointer ${eyeShTwo}`}
            onClick={hide}
            ref={eyeS}
          />
          <input
            type="password"
            ref={inputShowHide}
            className={` border-2 border-neutral-200 text-sm rounded-2xl px-4 py-3 w-full ${inputTwo}`} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mt-8">
          <Button title={"Simpan"} onClick={butt}></Button>
        </div>
        <div className={`${warningRed} ml-LEFT mt-8 `}>
          <Allert type="warning" message={"Password minimal 8 karakter"} />
        </div>

        <div className={`${warningRedTwo} ml-LEFT mt-8 `}>
          <Allert
            type="warning"
            message={"Password dan konfirmasi password harus sama"}
          />
        </div>

        <div className={`${successGreen} ml-LEFT mt-8 `}>
          <Allert type="success" message={"Reset tautan terkirim"} />
        </div>
      </div>
    </div>
  );
};
export default InputTwo;
