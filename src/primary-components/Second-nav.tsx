const Secondnavbar = () => {
    return (
        <>
            <div className="max-w-sm h-full pt-5">
                <div className="flex items-center mt-1 justify-start ms-10">
                    <i className=" text-2xl bi bi-envelope-at  text-black"></i>
                    <p className="text-2xl text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>gmail</p>
                </div>
               <button className="flex text-white px-5 py-5 shadow-md w-[65%] ms-5  mt-5 rounded-2xl cursor-pointer items-center bg-[#C3E7FF]">
                    <i className="fa-solid fa-wand-magic text-black text-[15px]"></i>
                    <p className=" text-[14px] text-black capitalize ms-3">compose</p>
                </button>  
                <button className="flex text-white  py-3 shadow-md w-[100%] ms-5 mt-5 rounded-3xl cursor-pointer items-center bg-[#D3E3FD]">
                    <i className="fa-solid fa-inbox text-black text-[14px] me-3 ms-5"></i>
                    <p className=" text-[15.5px] text-black capitalize ms-3">Inbox</p>
                </button>  
                <button className="flex text-white p-3 w-[100%]  ms-5 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-star text-black text-[14px] ms-2"></i>
                    <p className=" text-[15.5px] text-black capitalize ms-3">Starred</p>
                </button>  
                <button className="flex text-white p-3 w-[100%] ms-5 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-clock text-black text-[14px] ms-2"></i>
                    <p className=" text-[15.5px] text-black capitalize ms-3">Snoozed</p>
                </button>  
                <button className="flex text-white p-3  w-[100%] ms-5 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-send text-black text-[14px] ms-2"></i>
                    <p className=" text-[15.5px] text-black capitalize ms-3">Sent</p>
                </button>  
                <button className="flex text-white p-3 w-[100%] ms-5 rounded-2xl cursor-pointer items-center">
                    <i className="fa-solid fa-wand-magic text-black text-[14px] ms-2"></i>
                    <p className=" text-[15.5px] text-black capitalize ms-3">Drafts</p>
                </button>                            
            </div>
        </>
    )
}

export default Secondnavbar;