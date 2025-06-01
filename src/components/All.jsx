import { data } from "./Alldata"
import { Link } from "react-router"
export default function All()
{
    // let data=[{Img:I1,name:'Data science',des1:"top 10 high paying non-coding jobs in data science in 2025",des2:"are you someone who are not interested in coding, but wants to get placed in tech"},
    //           {Img:I2,name:'Data science',des1:"10 best dara science framework in 2024",des2:"Does data science facinate you? if yes you must definitely know about data science framework"},
    //           {Img:I3,name:'Data science',des1:"top product base company for data science freshers",des2:"In todays data-driven world, data science has emerged as crucial field with companies harnessing"},
    //         {Img:I1,name:'Full stack',des1:"top 10 high paying non-coding jobs in data science in 2025",des2:"are you someone who are not interested in coding, but wants to get placed in tech"},
    //           {Img:I2,name:'Full stack',des1:"10 best dara science framework in 2024",des2:"Does data science facinate you? if yes you must definitely know about data science framework"},
    //           {Img:I3,name:'Full stack',des1:"top product base company for data science freshers",des2:"In todays data-driven world, data science has emerged as crucial field with companies harnessing"},
    //           {Img:I1,name:'Cyber security',des1:"top 10 high paying non-coding jobs in data science in 2025",des2:"are you someone who are not interested in coding, but wants to get placed in tech"},
    //           {Img:I2,name:'Cyber security',des1:"10 best dara science framework in 2024",des2:"Does data science facinate you? if yes you must definitely know about data science framework"},
    //           {Img:I3,name:'Cyber security',des1:"top product base company for data science freshers",des2:"In todays data-driven world, data science has emerged as crucial field with companies harnessing"},
    //           {Img:I1,name:'Career',des1:"top 10 high paying non-coding jobs in data science in 2025",des2:"are you someone who are not interested in coding, but wants to get placed in tech"},
    //           {Img:I2,name:'Career',des1:"10 best dara science framework in 2024",des2:"Does data science facinate you? if yes you must definitely know about data science framework"},
    //           {Img:I3,name:'Career',des1:"top product base company for data science freshers",des2:"In todays data-driven world, data science has emerged as crucial field with companies harnessing"},
    //         ]

    let ui=data.map((m)=>
    {
        return <div className="border border-gray-200 hover:scale-105 transition-all duration-300 rounded-md shadow-xl">
                <img src={m.img} alt="img not fund" className="h-2/5 w-full rounded-t-md"/>
                <div className="h-3/5 grid grid-cols-1  pt-3">
                    <div className="font-semibold pl-5 pr-4">{m.name}</div>
                    <div className="uppercase font-semibold text-justify pl-5 pr-4"> {m.d1} </div>
                    <div className="text-gray-400 pl-5 pr-4"> {m.d2} </div>
                    <a className="text-green-500 font-semibold pl-5 pr-4" href="#"><Link to="/coursedetails" state={{imgs:data.img}}>READ MORE</Link></a>
                    <div className="border-t-2 border-gray-300 pl-5  text-gray-400">28 November 2023 * No Comments</div>
                </div>
            </div>
    })
    return(
        <>
        <div className="w-4/5 mx-auto mt-10 grid grid-cols-3 gap-5">
        {ui}
        </div>
        </>
    )
}