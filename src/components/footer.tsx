import Link from "next/link"

const Footer = () => {
    return (
        <footer className="p-2 fixed h-fit w-[100%] left-0 bottom-0 text-center text-[14px] text-gray-600 sm:relative sm:bg-slate-200">
            <div>
                Made by @jansm04 in 2023&nbsp;&nbsp;•&nbsp;&nbsp; 
                {<Link href='https://github.com/jansm04/recursion-visualizer' target="_blank">
                    <div className="text-sky-700 inline">Github</div>
                </Link>}
            </div>
        </footer>
    )
}

export default Footer