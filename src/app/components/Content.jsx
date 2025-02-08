import Ads from "./Ads";
import CardCustom from "./CardCustom";
import MainSidebar from "./MainSidebar";

const Content = () =>{
    return(
        <>
        <div className="flex bg-cardCustom p-7 justify-around">
            <MainSidebar/>
            <CardCustom/>
            <Ads/>
        </div>
        </>
    )
}

export default Content;