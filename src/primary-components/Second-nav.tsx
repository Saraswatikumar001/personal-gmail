const Secondnavbar = () => {
    return (
        <>
            <div className="max-w-sm h-full pt-5">
                <div className="flex items-center mt-1 justify-center">
                    <i className=" text-3xl bi bi-envelope-at  text-black"></i>
                    <p className="text-3xl text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>gmail</p>
                </div>
               <button className="flex text-white font-bold py-2 w-[80%] ms-[15%] px-4 mt-12 rounded cursor-pointer bg-[#e9eef6]">
                    <i className="fa-solid fa-wand-magic text-black text-sm"></i>
                    <p className="text-sm text-black capitalize ms-3 font-normal" style={{ fontFamily: "sans-serif" }}>compose</p>
                </button>               
            </div>
        </>
    )
}

export default Secondnavbar;