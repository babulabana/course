import { data } from "./Alldata"
export default function Cybersecurity()
{
    let Cybersecurity=data.filter((c)=>c.name=="Cyber security")
            const Cybersecurityui=Cybersecurity.map((m)=>
            {
                return <div className="border border-gray-200 hover:scale-105 transition-all duration-300 rounded-md shadow-xl">
                        <img src={m.img} alt="img not fund" className="h-2/5 w-full rounded-t-md"/>
                        <div className="h-3/5 grid grid-cols-1  pt-3">
                
                
                            <div className="font-semibold pl-5 pr-4">{m.name}</div>
                            <div className="uppercase font-semibold text-justify pl-5 pr-4"> {m.d1} </div>
                            <div className="text-gray-400 pl-5 pr-4"> {m.d2} </div>
                            <a className="text-green-500 font-semibold pl-5 pr-4" href="#">READ MORE</a>
                            <div className="border-t-2 border-gray-300 pl-5  text-gray-400">28 November 2023 * No Comments</div>
                        </div>
                    </div>
            })
    return(
        <>
        <div className="w-4/5 mx-auto mt-10 grid grid-cols-3 gap-5">
            {Cybersecurityui}
        </div>
        </>
    )
}