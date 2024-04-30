import React from "react";
import { FaCode } from "react-icons/fa"
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  gitUrl: string 
  viewUrl: string
};

const ProjectCards: React.FC<Props> = ({ imageUrl, title, description, gitUrl, viewUrl }) => {
    return(
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{background: `url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

                    <Link href={gitUrl} className="h-14 w-14 border-2 relative rounded-full mr-3 border-[#ADB7BE] hover:border-white group/link">
                        <FaCode className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </Link>

                    <Link href={viewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <IoEyeSharp className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </Link>

                </div>
            </div>
            <div className="text-white mt-3 rounded-b-xl bg-[#181818] py-6 px-4 mb-5">
                <h5 className="text-xl font-semibold">{title}</h5>
                <p className="text-[#d2d2d284]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCards;