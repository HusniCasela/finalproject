import { useNavigate } from "react-router-dom" 
import InputTwo from "../InputPassword/InputPasswordTwo"
import TitleReset from "../InputPassword/TitleReset"
const ResetPassword = ()=>{
 return(
<section>
 <div className="mt-60 ml-24"> 
 <TitleReset titleMessage={"Reset Password"}/>
<InputTwo/>
 </div>
</section>
)
}
export default ResetPassword
