const Secondnavbar = () => {
    return (
        <>
            <div className="max-w-sm h-full pt-5">
                <div className="flex items-center mt-1 justify-center">
                    <i className=" text-3xl bi bi-envelope-at  text-black"></i>
                    <p className="text-3xl text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>gmail</p>
                </div>
               <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="fa-solid fa-wand-magic text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>compose</p>
                </button>  
                <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="fa-solid fa-inbox text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>Inbox</p>
                </button>  
                <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-star text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>Starred</p>
                </button>  
                <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-clock text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>Snoozed</p>
                </button>  
                <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-send text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>Sent</p>
                </button>  
                <button className="flex text-white font-bold p-3 shadow-md w-[100%] ms-[10%]  mt-12 rounded-2xl cursor-pointer items-center">
                    <i className="bi bi-file-earmark text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>Drafts</p>
                </button>                            
            </div>
        </>
    )
}

export default Secondnavbar;