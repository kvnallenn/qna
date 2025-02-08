import Ads from "./Ads";
import CardCustom from "./CardCustom";
import MainSidebar from "./MainSidebar";

const Content = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row bg-cardCustom p-7 justify-between" id="main-content">
            <MainSidebar/>
            <CardCustom/>
            <Ads/>
        </div>
        </>
    )
}

export default Content;