const Navbar = () => {
    return (
        <>
            <div className="max-w-sm text-center rounded overflow-hidden shadow-lg h-full flex justify-center py-5">
                <div>
                    <button className=" text-white font-bold py-2 px-4 rounded cursor-pointer">
                        <i className="fa-solid fa-bars text-black text-2xl"></i>
                    </button>
                    <button className=" text-white font-bold py-2 px-4 mt-12 rounded cursor-pointer">
                        <i className="fa-solid fa-envelope-open-text text-black text-2xl"></i>
                    </button>
                    <p className="text-sm text-black capitalize">mail</p>
                    <button className=" text-white font-bold py-2 px-4 mt-5 rounded cursor-pointer">
                        <i className="fa-regular fa-message text-black text-2xl"></i>
                    </button>
                    <p className="text-sm text-black capitalize">chat</p>
                    <button className=" text-white font-bold py-2 px-4 mt-5 rounded cursor-pointer">
                        <i className="fa-solid fa-desktop text-black text-2xl"></i>
                    </button>
                    <p className="text-sm text-black capitalize">meet</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;