import { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const clickNav = () => {
    setNav(!nav);
  };

  return (
    <div className='py-3 px-2 flex justify-between items-center w-full h-full bg-[#EBEFFF]'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-[#109CF1] m-10, mr-4 sm:text-4xl'>LOGO</h1>
      </div>
      <div className='px-2 flex justify-center align-center transition-transform duration-300 ease-in-out transform hover:scale-105 '>
        <ul className='hidden md:flex'>
          <li>
            <a href='#home' className='link'>
              Home
            </a>
          </li>
          <li>
            <a href='#products' className='link'>
              Products
            </a>
          </li>
          <li>
            <a href='#customers' className='link'>
              Customers
            </a>
          </li>
          <li>
            <a href='#about' className='link'>
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div onClick={clickNav} className='block md:hidden'>
        {nav ? <AiOutlineMenuUnfold size={30} /> : <AiOutlineMenuFold size={30} />}
      </div>

      <div className='hidden md:flex ml-auto pr-6 mr-20'>
        <button className='bg-transparent text-black border-none mr-5 px-6 py-2 login-button'> Login</button>
        <button className='px-6 py-2'> Sign Up</button>
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[90%] h-full border-r border-[#FF8F6B] bg-[#EBEFFF] ease-in-out duration-700'
            : 'ease-in-out duration-600 fixed left-[-90%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#109CF1] m-8'>FOLLOW ME UP.</h1>
        <li className='px-6 p-4 border-b border-[#FF8F6B]'>
          <a href='#products'>Products</a>
        </li>
        <li className='px-6 p-4 border-b border-[#FF8F6B]'>
          <a href='#customers'>Customers</a>
        </li>
        <li className='px-6 p-4 border-b border-[#FF8F6B]'>
          <a href='#about'>About</a>
        </li>
        <li className='px-6 p-4 border-b border-[#FF8F6B]'>
          <a href='#contact'>Contact</a>
        </li>

        <div className='flex justify-center items-center flex-col my-4'>
          <button className='mb-2 px-4 py-2 bg-[#FF8F6B] text-center w-28'>Login</button>
          <button className='px-4 py-2 text-center w-28'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
