import Nav from "./Nav"
import Hbg from "../pics/Header.jpg"


export default function Header()
{
    return(
        <div className="grid Header" style={{backgroundImage:`url(${Hbg})`}}>
            <Nav/>
            <div>
                
            </div>
        </div>
    );
}