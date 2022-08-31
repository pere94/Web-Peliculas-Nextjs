import Link from "next/link";

function Logo({ icon, brand }) {
  return (
    <Link href="/">
        <a href="" className="flex items-center primaryGradientText">
            <span className="w-12 h-12 text-version1">
                {icon}
            </span>

            <p className="ml-2 self-center text-[40px] h-12 font-extrabold flex items-center
              py-0"
            >{brand}</p>
        </a>
    </Link>
  );
}

export { Logo };
