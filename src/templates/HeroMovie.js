import Image from 'next/image';
import Link from 'next/link';
import { BsCalendarDate } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

function HeroMovie({ h1_title, imageBackground, imagePoster, release_date, runtime, vote_average, vote_count, overview, tagline, homepage, genres, production_companies }) {
    return (
        <>
            <header
                className="relative z-20 pt-16 smMin:px-10 w-full !h-full flex justify-between items-center
                lg:flex-col
                md:p-5"
            >
                <div className="min-w-[300px] mr-5 h-full pt-5 mt-10">
                    <Image
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${imagePoster}`}
                        width={350}
                        height={480}
                        className="object-cover object-center absolute top-0 left-0 z-10 rounded-xl"
                        priority
                        alt={h1_title}
                    />
                </div>

                <div
                    className="h-full py-5 w-full flex flex-col justify-start items-center ml-10
                    md:ml-0"
                >
                    <h1 className="text-7xl text-white font-extrabold w-full text-left pb-2">{h1_title}</h1>

                    {tagline && (
                        <p
                            className="italic text-left underline text-version3 w-full py-2 
                        lg:mb-2"
                        >
                            {`" ${tagline} "`}
                        </p>
                    )}

                    <div
                        className="w-full flex justify-start items-center py-2
                        md:flex-col md:gap-3 md:mb-2"
                    >
                        <p
                            className="text-gray-400 font-medium flex mr-4
                            md:w-full"
                        >
                            <BsCalendarDate className="text-gray-400 text-2xl mr-1" />
                            Release Date: {release_date}
                        </p>
                        <p
                            className="text-gray-400 font-medium flex mr-4
                            md:w-full"
                        >
                            <BiTime className="text-gray-400 text-2xl mr-1" />
                            Duration: {`${Math.round(runtime / 60)}hr:${Math.round(runtime % 60)}min`}
                        </p>
                        <p
                            className="text-gray-400 font-medium flex mr-4
                            md:w-full"
                        >
                            <span className="underline">Reviews: {vote_count}</span>
                            <span className="mx-2">|</span>
                            <AiTwotoneStar className="text-yellow-300 text-2xl mr-1" />
                            {vote_average}
                        </p>
                        <Link href={homepage}>
                            <span
                                className="flex text-gray-400 font-medium mr-4
                                md:w-full"
                            >
                                {homepage && <FaExternalLinkAlt className="text-gray-200 text-xl mr-1 cursor-pointer" />}
                                See official page
                            </span>
                        </Link>
                    </div>

                    <p className="w-full text-left py-2 text-gray-400">Genres included: {`${genres.map((genre) => ' ' + genre.name)}`}</p>

                    <div className="flex flex-col justify-start items-start w-full">
                        <h2 className="text-3xl text-white font-extrabold w-full text-left pb-2 mt-6">Overview</h2>
                        <p
                            className="text-gray-100 font-medium w-full 
                            "
                        >
                            {overview}
                        </p>
                    </div>

                    <div className="flex flex-col justify-start items-start w-full">
                        <h2 className="text-3xl text-white font-extrabold w-full text-left pb-2 mt-6">Production Companies</h2>
                        <div
                            className="text-gray-100 font-medium flex bg-gray-100/10 rounded-lg p-1 gap-2 mb-10 
                            sm:w-[320px] sm:overflow-scroll"
                        >
                            {production_companies.map((company) => (
                                <div
                                    key={company.name + company.id}
                                    className="w-36 h-36 flex flex-col justify-center items-center
                                    sm:min-w-[140px] sm:min-h-[140px]"
                                >
                                    <Image
                                        src={`https://image.tmdb.org/t/p/h60/${company.logo_path}`}
                                        width="100%"
                                        height="100%"
                                        className="object-contain object-center absolute top-0 left-0 z-10 
                                        min-h-[50px] min-w-[150px]"
                                        alt={company.name}
                                    />
                                    <p>{company.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <div className="fixed top-0 left-0 z-0 w-full h-full">
                <Image
                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${imageBackground}`}
                    layout="fill"
                    className="object-cover object-center absolute top-0 left-0 z-10"
                    priority
                    alt={h1_title}
                />
                <div className="absolute z-20 w-full h-full bg-black/80"></div>
            </div>
        </>
    );
}

export { HeroMovie };
