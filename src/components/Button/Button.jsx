/* eslint-disable react/prop-types */
const Button=({title,onClick}) => {
    return (
  <button class="w-THREESEVEN pt-2.5 pb-2.5 pl-3 rounded-xl border-2 bg-DARKBLUE05 text-white text-sm" title={title} onClick={onClick}>
  {title}
  </button>
    )
}
export default Button
