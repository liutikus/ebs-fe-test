import { CiShoppingCart } from "react-icons/ci";


const Nav = () => {
  return (
    <nav className="flex justify-between px-5 py-2 bg-[#ECE5F0] sm:px-15">
      <p className="text-2xl font-light text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 ">
        ProdCat</p>
        <CiShoppingCart className="text-4xl text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110"/>
    </nav>
  )
}

export default Nav
