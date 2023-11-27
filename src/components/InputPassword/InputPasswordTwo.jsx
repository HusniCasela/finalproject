import React, { useRef, useState } from "react";
import Eye from "../iconsvg/eye.svg";
import EyeSlash from "../iconsvg/eyeslash.svg";
import Button from "../Button/Button";
import Allert from "../Allert/Allert";
const InputTwo = () => {
  let inputShowHide = useRef(null);
  let inputShowHideO = useRef(null);
  const eye = useRef(null);
  const eyeS = useRef(null);
  const eyeO = useRef(null);
  const eyeOs = useRef(null);
  const [warningRed, setWarningRed] = useState("hidden");
  const [successGreen, setSuccessGreen] = useState("hidden");
  const show = () => {
    inputShowHide.current.type = "text";
    eye.current.style.display = "none";
    eyeS.current.style.display = "block";
  };
  const hide = () => {
    inputShowHide.current.type = "password";
    eye.current.style.display = "block";
    eyeS.current.style.display = "none";
  };
  const sho = () => {
    inputShowHideO.current.type = "password";
    eyeO.current.style.display = "block";
    eyeOs.current.style.display = "none";
  };
  const hid = () => {
    inputShowHideO.current.type = "text";
    eyeO.current.style.display = "none";
    eyeOs.current.style.display = "block";
  };

  const butt = () => {
    if (
      (inputShowHide.current.value.length <= 7 &&
        inputShowHideO.current.value.length <= 7) ||
      inputShowHide.current.value.length != inputShowHideO.current.value.length
    ) {
      inputShowHide.current.style.border = "2.5px solid #FF0000";
      inputShowHideO.current.style.border = "2.5px solid #FF0000";
      setWarningRed("block");
      setSuccessGreen("hidden");
    } else if (
      (inputShowHide.current.value.length >= 7 &&
        inputShowHideO.current.value.length >= 7) ||
      inputShowHide.current.value.length === inputShowHideO.current.value.length
    ) {
      inputShowHide.current.style.border = "2px solid black";
      inputShowHideO.current.style.border = "2px solid black";
      setSuccessGreen("block");
      setWarningRed("hidden");
    }
  };
  return (
    <div>
      <div className="mt-8">
        <label className="text-xs font-normal pb-1.5">
          Masukan Password Baru
        </label>
        <div className="relative">
          <img
            src={Eye}
            alt="hide"
            className="w-6 absolute mt-TOP ml-RIGHT cursor-pointer"
            onClick={hid}
            ref={eyeO}
          />
          <img
            src={EyeSlash}
            alt="hide"
            className="w-6 absolute mt-TOP ml-RIGHT cursor-pointer hidden"
            onClick={sho}
            ref={eyeOs}
          />
          <input
            type="password"
            ref={inputShowHideO}
            className="w-THREESEVEN pt-2.5 pb-2.5 pl-3 pr-14 rounded-xl border-2 text-sm"
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="text-xs font-normal pb-1.5">
          Konfirmasi Password Baru
        </label>
        <div className="relative">
          <img
            src={Eye}
            alt="hide"
            className="w-6 absolute mt-TOP ml-RIGHT cursor-pointer"
            onClick={show}
            ref={eye}
          />
          <img
            src={EyeSlash}
            alt="hide"
            className="w-6 absolute mt-TOP ml-RIGHT cursor-pointer hidden"
            onClick={hide}
            ref={eyeS}
          />
          <input
            type="password"
            ref={inputShowHide}
            className="w-THREESEVEN pt-2.5 pb-2.5 pl-3 pr-14 rounded-xl border-2 text-sm "
            required
          />
        </div>
        <div className="mt-8">
          <Button title={"Simpan"} onClick={butt}></Button>
        </div>
        <div className={`${warningRed}`}>
          <Allert type="warning" message={"Password minimal 8 karakter"} />
        </div>
        <div className={`${successGreen}`}>
          <Allert type="success" message={"Reset password berhasil"} />
        </div>
      </div>
    </div>
  );
};
export default InputTwo;
