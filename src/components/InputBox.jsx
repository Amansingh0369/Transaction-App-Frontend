export function InputBox({label,placeholder,type,onChange}){
    return <div className="flex flex-col text-left py-2">
        <div className="p-2 text-md font-medium text-left py-2">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} type={type} className="border outline-gray-200 rounded-2xl border-slate-300  py-2 w-full px-3"/>
    </div>
}