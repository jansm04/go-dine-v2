import Link from "next/link"

const Footer = () => {
    return (
        <footer className="p-2 fixed h-fit w-[100%] left-0 bottom-0 text-center text-black sm:relative sm:bg-slate-200">
            <div>
                Made by 
                    {<Link href='https://github.com/jansm04' target="_blank">
                        <div className="text-indigo-700 inline"> Jan S. </div>
                    </Link>} 
                in December 2023
            </div>
        </footer>
    )
}

export default Footer