import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import React,{useRef,useState} from "react"
import TitleReset from "../InputPassword/TitleReset";
import Allert from "../Allert/Allert"
const Tautan = () => {
const [warningMailRed,setWarningMailRed] = useState("hidden")
const [warningMailGreen,setWarningMailGreen] = useState("hidden")
 const dataMail = "contoh@gmail.com"
 const ipMail = useRef(null)
  const sendMail =()=>{
if(ipMail.current.value === dataMail){
 setWarningMailGreen("block")
 setWarningMailRed("hidden")
}else{
 setWarningMailRed("block")
 setWarningMailGreen("hidden")
}
}
  return (
    <section>
      <div className="mt-60 ml-20">
    <TitleReset titleMessage={"Reset Password"}/>
        <div className="pt-8 pr-0 pb-0 pl-0">
            <label className="text-sm/[6px] font-normal pb-1.5">
              Masukan Email Untuk Menerima Tautan 
            </label>
            </div>
            <div>
              <input
                type="email"
                className="w-THREESEVEN pt-2.5 pb-2.5 pl-3 pr-14 rounded-xl border-2 text-sm" ref={ipMail}
                required
              />
            </div>
          <div className="pt-8 pr-0 pb-8 pl-0">
 <Button title={"Kirim"} onClick={sendMail}></Button>
          </div>
         
<div className={`${warningMailRed} ml-LEFTWR mt-14`}>
 <Allert type="warning" message={"Email tidak terdaftar"}/>
 </div>
<div className={`${warningMailGreen} ml-LEFTWG mt-14`}>
<Allert type="success" message={"buka email untuk melihat tautan reset"}/>
 </div>
 </div>
     
    </section>
  );
};
export default Tautan;
