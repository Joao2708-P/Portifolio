import React from "react";
import { FaCode } from "react-icons/fa"
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  result?: string;
  gitUrl: string;
  viewUrl: string;
};

const ProjectCards: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  result,
  gitUrl,
  viewUrl
}) => {
    return(
        <div className="rounded-xl overflow-hidden bg-[#181818]">

            {/* Imagem */}
            <div 
                className="h-52 md:h-72 relative group"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full 
                    bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">

                    <div className="flex gap-4">
                        <Link href={viewUrl} target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm">
                            <IoEyeSharp /> Ver projeto
                        </Link>

                        <Link href={gitUrl} target="_blank"
                            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full text-sm">
                            <FaCode /> Código
                        </Link>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="p-5">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>

                {result && (
                    <p className="text-green-400 text-sm mb-2">
                        {result}
                    </p>
                )}

                <p className="text-[#ADB7BE] text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;