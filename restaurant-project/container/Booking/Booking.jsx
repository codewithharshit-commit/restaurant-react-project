import { IoMdArrowDropdown } from "react-icons/io";
import { useState , useRef , useEffect } from "react";
import {images} from "../../constants"
import "./Booking.css"
import "../../src/index.css"


const Booking = () => {

    const [toggle , setToggleMenu] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(e.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
    return (<div className="app__booking_section bg-[#0c0c0c] h-[90vh] relative overflow-hidden">
        <img className="absolute w-full h-auto" src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/pattern-bg.svg" alt="booking bg" />
        <img className="absolute right-10 w-[146px]" src={images.logo} alt="logo" />

        <div className="app__booking_table border-2 border-[#dcca86] px-4 py-12 relative
         top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-350 h-auto ">
            <h2 className="text-white text-center text-2xl">Reservations</h2>
            <img className="mx-auto" src={images.spoon} alt="spoon" />
            <h1 className="text-[#dcca86] text-center">Book A Table</h1>

            <div className="app__booking_select_container flex justify-around gap-8 mb-15 mt-20">
                <div ref={selectRef} className="select_container relative border-2 border-[#444444]" onClick={()=>{setToggleMenu(true)}}>
                    <div className="text-[#aaa]">1 Person</div>
                    <IoMdArrowDropdown color="white"/>
                    
                    {toggle && <ul className="text-[#aaaa] absolute border-2 border-[#dcca86] w-full h-auto left-0 bg-black flex flex-col gap-4
                    top-12 px-8 py-5">
                        <li>1 Person</li>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul> }
                    
                </div>
                    
                <div className="select_container border-2 border-[#444444]">
                    <select className="text-white" name="noOfPersons" id="persons">
                        <option value="1">1 Person</option>
                        <option value="1">One</option>
                        <option value="1">Two</option>
                        <option value="1">Three</option>
                    </select>
                    <IoMdArrowDropdown color="white" />
                </div>
                   
                <div className="select_container border-2 border-[#444444]">
                     <select className="text-white" name="noOfPersons" id="persons">
                        <option value="1">1 Person</option>
                        <option value="1">One</option>
                        <option value="1">Two</option>
                        <option value="1">Three</option>
                    </select>
                    <IoMdArrowDropdown color="white" />
                </div>
            </div>

            <div className='app__menu_btn max-w-[150px] mx-auto overflow-hidden bg-[rgb(220,202,134)] cursor-pointer px-8 py-2  hover:bg-black duration-400 group border-2 border-[#dcca86] '>
            <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>Book Now</span>
            </div>
        </div>
    </div>
)};

export default Booking;