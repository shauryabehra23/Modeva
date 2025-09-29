import modeva from "../pics/Modeva.png"

export default function Nav()
{
    return(
        <div className=" Nav flex w-full justify-between" style={{gridArea:"nav"}}>
            <div>z
                <a>
                    <img src={modeva} />
                </a>
            </div>

            <div className="text-white flex text-xl items-center justify-evenly gap-4">
                <a>Catalog</a>
                <a>Sale</a>
                <a>New Arrival</a>
                <a>About</a>
            </div>

            <form className="flex items-center ">
                <span className="material-symbols-outlined h-1/3"  style={{backgroundColor:"white"}}>
                    search
                </span>
                <input placeholder="Search" className="h-1/3"></input>
            </form>
        </div>
    );
}