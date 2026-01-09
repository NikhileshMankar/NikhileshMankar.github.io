import React from 'react'
import { CircleUser } from 'lucide-react';

interface ButtonheaderProps extends React.PropsWithChildren {
  href: string;
}

const Buttonheader = (props: ButtonheaderProps) => {
  return (
    <a href={props.href}>
      <button className="shadow-none button-light relative py-2 px-3 flex rounded-lg font-medium text-sm text-[#2f3031] bg-[#e6e6e6] hover:bg-white  flex-row items-center mx-auto justify-center gap-2 transition ease-in-out z-[2] cursor-pointer">
        <CircleUser className="text-black w-4 h-4" />
        <span>{props.children}</span>
      </button>
    </a>
  )
}

export default Buttonheader
