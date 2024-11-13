export function Button({ label, onClick }) {
    return (
        <div className="">
            <button
                onClick={onClick}
                type="button"
                className="bg-slate-700 hover:bg-indigo-500 dark:bg-gray-700 dark:hover:bg-indigo-600 focus:outline-none font-medium text-white rounded-lg text-sm/6 sm:text-base w-full px-4 sm:px-5 py-2 sm:py-2.5 mb-2 mt-4"
            >
                {label}
            </button>
        </div>
    );
}
