export function Button({label,onClick}) {
    return <div className="mt-4">
        <button onClick={onClick} type="button" className="bg-gray-800 hover:bg-blue-500 focus:outline-none font-medium text-white rounded-lg text-sm w-full px-5 py-2.5 me-2 mb-2 mt-4">
            {label}
        </button>
    </div>
}