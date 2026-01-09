import React from 'react'
import { Download, Globe } from 'lucide-react';

interface ButtonmainProps extends React.PropsWithChildren {
  href: string;
}

const Buttonmain = (props: ButtonmainProps) => {
  return (
    <a href={props.href}>
      <button className="shadow-none button-light relative py-2 px-3 flex rounded-lg font-medium text-sm text-[#2f3031] bg-[#e6e6e6] hover:bg-white flex-row items-center mx-auto justify-center gap-2 transition ease-in-out w-[200px] md:w-[200px] z-[4] cursor-pointer">
        <Globe className="text-black w-4 h-4" />
        <span>{props.children}</span>
      </button>
    </a>
  )
}

export default Buttonmain
