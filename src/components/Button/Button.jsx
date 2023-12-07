/* eslint-disable react/prop-types */
const Button = ({ title, onClick }) => {
  return (
    // <button
    //   class="w-THREESEVEN pt-2.5 pb-2.5 pl-3 rounded-xl border-2 bg-DARKBLUE05 text-white text-sm"
    //   title={title}
    //   onClick={onClick}
    // >
    //   {title}
    // </button>

    // pake button temenku
    <div
      className="py-3 px-6 bg-DARKBLUE05 text-white text-center rounded-2xl mt-2 text-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
export default Button;
