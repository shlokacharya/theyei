import Link from "next/link";
import {
    ArrowRightIcon
} from '@heroicons/react/24/outline'
import { useRouter } from "next/router";

const data = {
    primary: "EconBowl is open for 2026 :",
    secondary: '',
    linkText: "Register",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfCgJTezqUMqQf0bs6zZlns61p5mdCEjA2yO7tl8dVmW__Afg/viewform",
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
