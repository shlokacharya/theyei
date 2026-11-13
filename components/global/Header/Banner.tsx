import Link from "next/link";
import {
    ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useRouter } from "next/router";

const data = {
    primary: "YEI just published a new book:",
    secondary: '"50 Things You Shouldn\'t Learn the Hard Way"',
    linkText: "Read it here",
    link: "https://moneymanual.org/",
    enabled: true
}

export default function Banner() {
    if (data.enabled) {
        return (
            <div className="w-screen bg-green-700">
                {/* {currPath !== path &&  */}
                <div className="flex items-center flex-wrap font-medium text-white text-center justify-center space-x-2 px-1 py-2">
                    <div>{data.primary}</div>
                    <div className="sm:block hidden">{data.secondary}</div>
                    <Link href={data.link}><a target="_blank" rel="noopener noreferrer" className="underline font-semibold inline-flex items-center">{data.linkText}<ArrowRightIcon className=" ml-1 h-4 w-4" /></a></Link>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export function Spacer() {
    if (data.enabled) {
        return (
            <div className="pt-[4rem] sm:pt-10"></div>
        )
    } else {
        return <></>
    }
}
