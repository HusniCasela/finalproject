import ResetPassword from "../components/ResetPassword/ResetPassword";
const Reset = () => {
  return (
    // <section className="">
    // <ResetPassword/>
    // <div class="bg-DARKBLUE05 w-3/5 h-full transform translate-x-full fixed top-0"></div>
    // </section>
    <section className="mx-auto">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 my-auto  px-40">
          <ResetPassword />
        </div>
        <div className="col-span-5 bg-DARKBLUE05 h-screen"></div>
      </div>
    </section>
  );
};
export default Reset;
