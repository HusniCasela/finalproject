import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"
const ResetPassword = ()=>{
 return(
<section>
<div className="mt-60 ml-20">
<h2 className="font-weight-bold text-xl text-DARKBLUE05
">Reset Password</h2>
<div className="pt-8 pr-0 pb-10 pl-0">
<div>
 <label className="text-sm/[6px] font-normal pb-1.5">Masukan Password Baru</label>
 <div>
 <div></div>
 <div></div>
 
 <input type="password" className="w-50 pt-3 pb-3 pl-3 pr-8 rounded-xl border-2"required/>
 </div>
 </div>
 <div className="pt-8 pr-0 pb-10 pl-0">
<div>
 <label className="text-sm/[6px] font-normal pb-1.5">Ulangi Password Baru</label>
   <div></div>
 <div></div>
 <input type="password" className="w-50 pt-3 pb-3 pl-3 pr-8 rounded-xl border-2"required/>
 </div>
 </div>
  <div className="pt-8 pr-0 pb-8 pl-0">
 <Button title={"Masuk"}></Button>
 </div>
</div>
</div>
</section>
)
}
export default ResetPassword
