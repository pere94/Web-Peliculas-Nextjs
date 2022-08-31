import React from 'react';
import Image from "next/image";

function MovieCard(props) {

    const {
        imgCard,
        title,
        date,
        stars,
        votes,
    } = props;

    return (
        <article  
            className="w-52 min-w-[200px] flex flex-col p-1 rounded-2xl h-[360] hover:opacity-100"
        >
            <div href="#" className="no-underline rounded-2xl overflow-hidden cursor-pointer max-h-[300px]">
                <Image 
                    width={200}
                    height={300}
                    id="imgTrend0" 
                    className="object-cover object-center rounded-2xl mb-3 max-h-[300px]" 
                    src={imgCard} 
                    alt="" 
                />
                <div className={` relative -top-[306px] opacity-0 py-2 px-3 text-xl font-medium text-white bg-gray-900/80  
                    shadow-sm tooltip dark:bg-gray-900/80 text-right max-h-[300px] min-h-[300px] w-full rounded-2xl flex
                    items-center text transition duration-300 hover:opacity-100
                    `}>
                    <span className="text-center w-full">
                        {title}
                    </span>
                </div>
            </div>

            <a href="#">
            <p className="text-sm text-version1 dark:text-version3 pl-2">{date}</p>
                <h3 title={title} id="h3Trend0" className="truncate mx-2 text-version2 dark:text-gray-50 h-6">
                    {title}
                </h3>
            </a>        
          <div className="text-sm text-version1 dark:text-version3 flex items-center justify-end gap-1 px-1 py-1">
            <p className="text-sm text-version1 dark:text-version3 pl-2 underline">{votes} Reviews</p>
            <p id="yearTrend0">|</p>
            <div className="flex items-center">
              <p id="voteAverage0">{stars}</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-yellow-300 flex items-end" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
            
        </article>
    );
}

export {MovieCard};