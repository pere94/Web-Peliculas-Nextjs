import Image from "next/image";

import {HeroSearch} from '/src/components/HeroSearch';

function HeroHeader({ h1_title, imageHeader }) {

    return (
        <header className="relative z-20">

            <div className="relative z-40 pt-16 w-full h-[500px] flex justify-center items-center">
                <div className="h-96 w-full flex flex-col justify-start items-center">
                    <h1 className="text-7xl text-white font-extrabold">{h1_title}</h1>
                    <span className="ml-6 w-3/5 min-w-[300px]
                        sm:w-11/12">
                        <HeroSearch 
                            placeholder='Movies, TV shows, Actors...'
                        />
                    </span>
                </div>
            </div>

            <div className="fixed top-0 left-0 z-30 h-2 w-full min-h-[500px] min-w-[320px]">
                <Image
                src={imageHeader}
                layout="fill"
                className="object-cover object-center absolute top-0 left-0 z-10 min-w-[320px]"
                priority 
                />
                <div className="absolute z-20 w-full min-w-[320px] min-h-[500px] bg-black/50"></div>
            </div>
        </header>
    );
}

export {HeroHeader};