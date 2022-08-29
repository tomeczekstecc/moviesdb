import Link from 'next/link';
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";
import React from "react";
import {Head} from "next/document";
//Compoonents

type Props = {
    setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({setQuery}: Props) => (
    <>

        <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
            <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
                <Link href='/'>
                    <div className='flex cursor-pointer  items-center'>
                        <div className='invisible md:visible '>
                            <Image src='/rmdb-logo.svg' width={150} alt='rmdb logo' height={150}/>
                        </div>
                        <div className='absolute md:invisible pt-2'>
                            <Image src='/rmdb-logo-small.svg' width={42} height={42} alt='rmdb logo'/>
                        </div>
                    </div>
                </Link>
                {setQuery ?
                    <div className='relative flex items-center'>
                        <SearchInput setQuery={setQuery}/>
                    </div> : null}
            </div>
        </div>
    </>
)

export default Header;
