import { CiShoppingCart } from "react-icons/ci";


const Nav = () => {
  return (
    <nav className="flex justify-between px-15 py-2 bg-[#ECE5F0]">
      <p className="text-2xl font-bold text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110 ">
        ProdCat</p>
        <CiShoppingCart className="text-4xl text-[#362166] cursor-pointer transition-transform duration-100 ease-in-out hover:scale-110"/>
    </nav>
  )
}

export default Nav
