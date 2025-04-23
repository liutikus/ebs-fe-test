import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="flex justify-between px-5 py-2 bg-[#ECE5F0] sm:px-15 shadow-xl">
      <Link to='/'
       className="text-2xl font-light text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 ">
        ProdCat</Link>
        <Link to='/cart'><CiShoppingCart className="text-4xl text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110"/></Link>
    </nav>
  )
}

export default Nav
