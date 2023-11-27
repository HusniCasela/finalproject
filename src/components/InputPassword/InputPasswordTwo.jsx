import React,{useRef,useState} from 'react'
import Eye from "../iconsvg/eye.svg" 
import EyeSlash from "../iconsvg/eyeslash.svg" 
import Button from "../Button/Button"
import Allert from "../Allert/Allert"
const InputTwo = ()=>{
let inputShowHide = useRef(null)
let inputShowHideO = useRef(null)
 const eye = useRef(null)
 const eyeS = useRef(null)
 const eyeO = useRef(null) 
 const eyeOs = useRef(null)
const [warningRed,setWarningRed] = useState("hidden")
const [warningRedTwo,setWarningRedTwo] = useState("hidden")
const [successGreen,setSuccessGreen] = useState("hidden")
const [inputOne,setInputOne] = useState("border-2")
const [inputTwo,setInputTwo]= useState("border-2")

const [eyeHdOne,setEyeHdOne]= useState("")
const [eyeShOne,setEyeShOne]= useState("hidden")
const [eyeHdTwo,setEyeHdTwo]=useState("")
const [eyeShTwo,setEyeShTwo]= useState("hidden")

const show= ()=>{
 inputShowHide.current.type = "text"
 setEyeHdTwo("hidden")
 setEyeShTwo("block")
}
const hide= ()=>{
 inputShowHide.current.type = "password"
  setEyeHdTwo("block")
 setEyeShTwo("hidden")
}
const sho = ()=>{
 inputShowHideO.current.type = "password"
 setEyeHdOne("block")
  setEyeShOne("hidden")
}
  const hid = ()=>{
  inputShowHideO.current.type = "text"
setEyeHdOne("hidden")
 setEyeShOne("block")
}
 const butt = () => {
  if (inputShowHide.current.value.length >= 8 && inputShowHideO.current.value.length >= 8 && inputShowHide.current.value === inputShowHideO.current.value) {
    setInputOne("border-2");
    setInputTwo("border-2");
    setSuccessGreen("block");
    setWarningRed("hidden");
    setWarningRedTwo("hidden");
  } else if (inputShowHide.current.value !== inputShowHideO.current.value) {
    setInputOne("border-WARNING");
    setInputTwo("border-WARNING");
    setWarningRedTwo("block");
    setSuccessGreen("hidden");
    setWarningRed("hidden");
  } else {
    setInputOne("border-WARNING");
    setInputTwo("border-WARNING");
    setWarningRed("block");
    setSuccessGreen("hidden");
    setWarningRedTwo("hidden");
  }
}

return(
 <div>
 <div className="mt-8">
 <label className="text-xs font-normal pb-1.5">Masukan Password Baru</label>
 <div className="relative">
  <img src={Eye} alt="hide" className={`w-6 absolute mt-TOP ml-RIGHT cursor-pointer ${eyeHdOne}`} onClick={hid} ref={eyeO}/>
  <img src={EyeSlash} alt="hide" className={`w-6 absolute mt-TOP ml-RIGHT cursor-pointer ${eyeShOne}`} onClick={sho} ref={eyeOs}/>
<input type="password" ref={inputShowHideO} className={`w-THREESEVEN pt-2.5 pb-2.5 pl-3 pr-14 rounded-xl border-2 text-sm ${inputOne}`}required/>
 </div>
 </div>
  <div className="mt-6">
 <label className="text-xs font-normal pb-1.5">Ulangi Password Baru</label>
 <div className="relative">
  <img src={Eye} alt="hide" className ={`w-6 absolute mt-TOP ml-RIGHT cursor-pointer ${eyeHdTwo}`} onClick={show} ref={eye}/>
  <img src={EyeSlash} alt="hide" className ={`w-6 absolute mt-TOP ml-RIGHT cursor-pointer ${eyeShTwo}`} onClick={hide} ref={eyeS}/>
<input type="password" ref={inputShowHide} className={`w-THREESEVEN pt-2.5 pb-2.5 pl-3 pr-14 rounded-xl border-2 text-sm ${inputTwo}`}required/>
 </div>
   <div className="mt-8">
  <Button title={"Simpan"} onClick={butt}></Button>
 </div>
 <div className={`${warningRed} ml-LEFT mt-30 `}>
 <Allert type="warning" message={"Password minimal 8 karakter"}/>
 </div>
 
 <div className={`${warningRedTwo} ml-8 mt-30 `}>
 <Allert type="warning" message={"Password dan konfirmasi password harus sama"}/>
 </div>
 
 <div className={`${successGreen} ml-LEFT mt-30 `}>
 <Allert type="success" message={"Reset password berhasil"}/>
 </div>
</div>
</div>
  )
}
export default InputTwo
