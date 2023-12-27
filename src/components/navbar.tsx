import Link from "next/link"

const Navbar = () => {
    return (
        <header>
            <div className="p-3 mt-3">
                <Link className="italic font-extrabold text-center text-[#ddd3a1] text-3xl sm:text-4xl" href="/">
                    <h1>goDine</h1>
                </Link>
                <div className='text-center text-sm text-[#b7ad7a] py-3 px-10 sm:text-base'>
                    <p>For all the times you want to eat out but have no idea where to go.</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar