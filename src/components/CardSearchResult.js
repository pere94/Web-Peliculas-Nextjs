import Image from "next/image";
import Link from 'next/link';

function CardSearchResult(props) {
    const {
        id,
        img_path,
        title,
        media_type,
        first_air_date,
        popularity,
        vote_count,
    } = props;

    return (
        <Link href={`/${media_type.toLowerCase() == 'movie' ? 'movie' : ''}${media_type.toLowerCase() == 'tv' ? 'tv' : ''}${media_type.toLowerCase() == 'person' ? 'person' : ''}${media_type.toLowerCase() == 'acting' ? 'person' : ''}${media_type.toLowerCase() == 'directing' ? 'person' : ''}/${title.toLowerCase().replace(/:/g, '').replace(/ /g, '-')}?id=${id}`}>

            <div className="flex w-full bg-white rounded-lg border border-gray-200 shadow-md 
                dark:bg-gray-800 dark:border-gray-700 p-1 cursor-pointer hover:bg-version3 dark:hover:bg-version1 
                h-[75px]">
                <Image 
                    className="object-cover object-center rounded-lg" 
                    width={80}
                    height={50}
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${img_path}`} 
                    alt=""
                    priority
                />
                <div className="p-1 flex flex-col w-full justify-center">
                    <div className="flex justify-between items-center w-full">
                        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                            {media_type}
                        </p>
                        {!!first_air_date && <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                            {first_air_date}
                        </p>}
                    </div>
                    <div className="p-1 flex gap-2">
                        {!!vote_count && <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                            {vote_count}
                        </p>}
                        {!!vote_count && <span>|</span>}
                        <span className="mb-1 font-normal text-gray-700 dark:text-gray-400 flex">
                            {popularity}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-yellow-300 flex items-end" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div> 
        </Link>

    );
}

export {CardSearchResult};