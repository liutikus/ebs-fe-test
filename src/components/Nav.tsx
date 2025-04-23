import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";


const Nav = () => {

 const {items} = useCart()

  return (
    <nav className="flex justify-between px-5 py-2 bg-[#ECE5F0] sm:px-15 shadow-xl">
      <Link to='/'
       className="text-2xl font-light text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 ">
        ProdCat</Link>
        <Link to='/cart' className="transition-transform duration-100 ease-in-out hover:scale-110">
        <CiShoppingCart className=" inline text-4xl text-[#362166] "/>
        <p className="inline mx-1 font-bold bg-[#362166] rounded-full p-1 text-[#ECE5F0]">{items.length}</p>
        </Link>
    </nav>
  )
}

export default Nav
