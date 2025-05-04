const Secondnavbar = () => {
    return (
        <>
            <div className="max-w-sm h-full pt-5">
                <div className="flex items-center mt-1 justify-center">
                    <i className=" text-3xl bi bi-envelope-at  text-black"></i>
                    <p className="text-3xl text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>gmail</p>
                </div>
               <button className="flex text-white font-bold p-3 shadow-md w-[90%] ms-[10%] rounded-full mt-12 rounded cursor-pointer bg-[#e9eef6] items-center">
                    <i className="fa-solid fa-wand-magic text-black text-[15px]"></i>
                    <p className=" text-[18px] text-black capitalize ms-3" style={{ fontFamily: "sans-serif" }}>compose</p>
                </button>               
            </div>
        </>
    )
}

export default Secondnavbar;