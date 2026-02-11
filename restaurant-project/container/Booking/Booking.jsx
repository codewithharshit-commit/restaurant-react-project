import { IoMdArrowDropdown } from "react-icons/io";
import { useState , useRef , useEffect } from "react";
import {images} from "../../constants"
import "./Booking.css"
import "../../src/index.css"


const Booking = () => {

    const [guestsOpen, setGuestsOpen] = useState(false);
    const [dateOpen, setDateOpen] = useState(false);
    const [timeOpen, setTimeOpen] = useState(false);

    const [guests, setGuests] = useState("1 Person");
    const [date, setDate] = useState("Select Date");
    const [time, setTime] = useState("Select Time");

    const guestsRef = useRef(null);
    const dateRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (guestsRef.current && !guestsRef.current.contains(e.target)) {
          setGuestsOpen(false);
        }
        if (dateRef.current && !dateRef.current.contains(e.target)) {
          setDateOpen(false);
        }
        if (timeRef.current && !timeRef.current.contains(e.target)) {
          setTimeOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (setter, toggleSetter, value) => {
      setter(value);
      toggleSetter(false);
    };
    
    return (<div className="app__booking_section bg-[#0c0c0c] h-[90vh] relative overflow-hidden">
        <img className="absolute w-full h-auto" src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/pattern-bg.svg" alt="booking bg" />
        <img className="absolute right-10 w-[146px]" src={images.logo} alt="logo" />

        <div className="app__booking_table border-2 border-[#dcca86] px-4 py-12 relative
         top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-350 h-auto ">
            <h2 className="text-white text-center text-2xl">Reservations</h2>
            <img className="mx-auto" src={images.spoon} alt="spoon" />
            <h1 className="text-[#dcca86] text-center">Book A Table</h1>

            <div className="app__booking_select_container flex justify-around gap-8 mb-15 mt-20">
                {/* Guests dropdown */}
                <div ref={guestsRef} className="select_container relative border-2 border-[#444444]" onClick={() => setGuestsOpen(!guestsOpen)}>
                    <div className="text-[#aaa]">{guests}</div>
                    <IoMdArrowDropdown color="white"/>
                    
                    {guestsOpen && <ul className="text-[#aaaa] absolute border-2 border-[#dcca86] w-full h-auto left-0 bg-black flex flex-col gap-4
                    top-12 px-8 py-5">
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "1 Person")}>1 Person</li>
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "2 People")}>2 People</li>
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "3 People")}>3 People</li>
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "4 People")}>4 People</li>
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "5 People")}>5 People</li>
                        <li onClick={() => handleSelect(setGuests, setGuestsOpen, "6+ People")}>6+ People</li>
                    </ul> }
                    
                </div>
                    
                {/* Date dropdown */}
                <div ref={dateRef} className="select_container relative border-2 border-[#444444]" onClick={() => setDateOpen(!dateOpen)}>
                    <div className="text-[#aaa]">{date}</div>
                    <IoMdArrowDropdown color="white"/>
                    
                    {dateOpen && <ul className="text-[#aaaa] absolute border-2 border-[#dcca86] w-full h-auto left-0 bg-black flex flex-col gap-4
                    top-12 px-8 py-5">
                        <li onClick={() => handleSelect(setDate, setDateOpen, "Today")}>Today</li>
                        <li onClick={() => handleSelect(setDate, setDateOpen, "Tomorrow")}>Tomorrow</li>
                        <li onClick={() => handleSelect(setDate, setDateOpen, "This Weekend")}>This Weekend</li>
                        <li onClick={() => handleSelect(setDate, setDateOpen, "Next Week")}>Next Week</li>
                    </ul> }
                    
                </div>
                   
                {/* Time dropdown */}
                <div ref={timeRef} className="select_container relative border-2 border-[#444444]" onClick={() => setTimeOpen(!timeOpen)}>
                    <div className="text-[#aaa]">{time}</div>
                    <IoMdArrowDropdown color="white"/>
                    
                    {timeOpen && <ul className="text-[#aaaa] absolute border-2 border-[#dcca86] w-full h-auto left-0 bg-black flex flex-col gap-4
                    top-12 px-8 py-5">
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "12:00 PM")}>12:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "1:00 PM")}>1:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "2:00 PM")}>2:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "6:00 PM")}>6:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "7:00 PM")}>7:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "8:00 PM")}>8:00 PM</li>
                        <li onClick={() => handleSelect(setTime, setTimeOpen, "9:00 PM")}>9:00 PM</li>
                    </ul> }
                    
                </div>
            </div>

            <div className='app__menu_btn max-w-[150px] mx-auto overflow-hidden bg-[rgb(220,202,134)] cursor-pointer px-8 py-2  hover:bg-black duration-400 group border-2 border-[#dcca86] '>
            <span className='relative mr-4 z-10 font-bold group-hover:text-[#dcca86]'>Book Now</span>
            </div>
        </div>
    </div>
)};

export default Booking;