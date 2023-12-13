/*update*/
import RegisterForm from "../components/LoginAndRegister/RegisterForm";
import Logo from "../assets/logo.jpg";
const Register = () => {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 my-auto  px-40">
          <RegisterForm />
        </div>
        <div className="col-span-5 bg-DARKBLUE05 h-screen"> 
        <div className="flex justify-center mt-80">
        <img src={Logo} className="w-80"/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
