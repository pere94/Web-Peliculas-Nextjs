import Image from "next/image";
import {HeroSearch} from '/src/components/HeroSearch';

function HeroHeader({ h1_title, imageHeader }) {
    return (
        <header className="">

            <div className="relative z-30 pt-16 w-full h-[500px] flex justify-center items-center">
                <div className="h-80 w-full flex flex-col justify-center items-center">
                    <h1 className="text-7xl text-white font-extrabold">{h1_title}</h1>
                    <span className="ml-5 w-3/5 min-w-[300px]">
                        <HeroSearch 
                            placeholder='Movies, TV shows, Actors...'
                        />
                    </span>
                </div>
            </div>

            <div className="fixed top-0 left-0 z-0 h-2 w-full min-h-[500px]">
                <Image
                src={imageHeader}
                layout="fill"
                className="object-cover object-center absolute top-0 left-0 z-10"
                priority 
                />
                <div className="absolute z-20 w-full min-h-[500px] bg-black/50"></div>
            </div>
        </header>
    );
}

export {HeroHeader};