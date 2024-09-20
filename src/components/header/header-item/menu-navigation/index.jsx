import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ButtonCustom from "../../../buttonCustom";

const MenuNavigation = () => {
    const MenuList = [
        {
            name:"Về Meddy",
            src:""
        },
        {
            name:"Sản phẩm",
            src:""
        },
        {
            name:"Tin tức",
            src:""
        },
        {
            name:"Điểm bán",
            src:""
        }
    ]
    const Items=MenuList.slice(0,3)
    return(
        <div className="MenuNavigation-wrapper gap-2 flex cursor-pointer">
            {Items.map((item,index)=>(
                <h3 className="text-lightblue " key={index}>{item.name}</h3>
            ))}
            <div className="location text-lightblue  flex">
                <LocationOnIcon/>
                <h3 className="">{MenuList[3].name}</h3>
            </div>
            <ButtonCustom description={"Đăng nhập"} func={()=>{}}/>
        </div>
    )

}
export default MenuNavigation