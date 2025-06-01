import { Link } from "react-router";

export default function Navbar()
{
    return(
        <>
            <ul className="flex gap-5 bg-gray-100 mt-2 h-11 rounded-xs w-6/7 mx-auto justify-center">
                <li className="m-2 px-1 border-b-2 border-green-500 text-green-500 "><Link to="/all">ALL</Link></li>
                <li className="m-2 px-1 hover:border-b-2 border-green-500 hover:text-green-500 duration-75"><Link to="/fullstack">FULL STACK DEVELOPMENT</Link></li>
                <li className="m-2 px-1 hover:border-b-2 border-green-500 hover:text-green-500 duration-75"><Link to="/datascience">DATA SCIENCE</Link></li>
                <li className="m-2 px-1 hover:border-b-2 border-green-500 hover:text-green-500 duration-75"><Link to="/cybersecurity">CYBER SECURITY</Link></li>
                <li className="m-2 px-1 hover:border-b-2 border-green-500 hover:text-green-500 duration-75"><Link to="career">CAREER</Link></li>
            </ul>
        </>
    )
}