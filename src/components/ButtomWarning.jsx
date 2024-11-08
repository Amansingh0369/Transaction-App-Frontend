import {Link} from "react-router-dom"
export function ButtomWarning({label,buttonText,to}) {
    return <div className="flex justify-center py-2 text-sm">
        <div>{label}</div>
        <Link className="underline pointer pl-2 cursor-pointer text-blue-400" to={to}>
            {buttonText}
        </Link>
    </div>
}