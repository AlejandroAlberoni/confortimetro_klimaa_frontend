"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsInfoCircle } from "react-icons/bs";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaTowerBroadcast } from "react-icons/fa6"; 
import { MdLogout } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { logout } from "@/lib/actions";


export default function Layout({ children }: { children: React.ReactNode }) {
    let router = useRouter();
    const [openNavbar, setOpenNavbar] = useState(true);

    return (
        <div className='relative min-h-screen min-w-screen bg-gradient-to-b from-[#41D271] to-[#BD95EB]'>
            {children}
            <nav className={`fixed p-1 top-0 bottom-0 flex flex-col justify-between items-center z-10 bg-slate-200 ${openNavbar ? "translate-x-0" : "translate-x-[-40px]"} duration-500`}>
                <BsArrowLeftShort className={`absolute top-9 -right-3 border border-black bg-white rounded-full cursor-pointer text-2xl ${!openNavbar && "rotate-180"} duration-200`} onClick={() => setOpenNavbar(!openNavbar)} />
                <Link href={`/home/profile`} title="Profile">
                    <CgProfile className="w-[30px] h-[30px] hover:text-slate-400"></CgProfile>
                </Link>
                <div className="flex flex-col items-center space-y-2">
                    <Link href="/home/metrics">
                        <button className="p-2 border-2 hover:border-black rounded border-transparent transition duration-300" title="metrics">
                            <TbActivityHeartbeat />
                        </button>
                    </Link>
                    <Link href="/home/metric_types">
                        <button className="p-2 border-2 hover:border-black rounded border-transparent transition duration-300" title="metric types">
                            <BsInfoCircle />
                        </button>
                    </Link>
                    <Link href="/home/devices">
                        <button className="p-2 border-2 hover:border-black rounded border-transparent transition duration-300" title="devices">
                            <FaTowerBroadcast />
                        </button>
                    </Link>
                    <Link href="/home/locations">
                        <button className="p-2 border-2 hover:border-black rounded border-transparent transition duration-300" title="locations">
                            <IoLocationSharp />
                        </button>
                    </Link>
                </div>
                <button onClick={() => logout()} title="Sign out">
                    <MdLogout className="w-[20px] h-[20px] hover:text-slate-400" />
                </button>
            </nav>
        </div>
    )
}

