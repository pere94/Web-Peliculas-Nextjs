

function HeroSearch({placeholder}) {
    return (
        <div className="flex justify-center items-center h-52 w-full relative">
            <input 
                type="search" 
                className="w-full h-11 border-2 border-version3 rounded-3xl text-xl bg-black/80 
                    text-version3 indent-2" 
                placeholder={placeholder} 
            />

            <svg id="svg_search" xmlns="http://www.w3.org/2000/svg" className="h-[68px] min-h[68px] w-[68px] min-w-[68px]
                text-version3 rounded-full border-2 border-gray-500 relative -left-8 bg-version2 hover:cursor-pointer
                hover:shadow-simpleSh+++ hover:shadow-version3 active:scale-90" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path className="svg-redond" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
            </svg>
        </div>
    );
}

export {HeroSearch};