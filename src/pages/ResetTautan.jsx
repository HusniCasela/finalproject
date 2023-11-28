import Tautan from "../components/ResetPassword/Tautan";
const ResetTautan = () => {
  return (
    // <section className="">
    //   <Tautan />
    //   <div class="bg-DARKBLUE05 w-3/5 h-full transform translate-x-full fixed top-0"></div>
    // </section>
    <section className="mx-auto">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 my-auto  px-40">
          <Tautan />
        </div>
        <div className="col-span-5 bg-DARKBLUE05 h-screen"></div>
      </div>
    </section>
  );
};
export default ResetTautan;
