
const Button = ({label, handleClick} : {label:string, handleClick: ()=> void}) => {
  return (
    <div>
      <button
      onClick={handleClick}
      className='border-1 px-2 font-bold text-lg border-[#362166] text-[#362166] rounded-md cursor-pointer 
      hover:bg-[#362166]
        hover:text-[#ECE5F0]
      '>
        {label}</button>
    </div>
  )
}

export default Button
