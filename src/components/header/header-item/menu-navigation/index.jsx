import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ButtonCustom from "../../../buttonCustom";
import './index.css'

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
        <div className="MenuNavigation-wrapper gap-3 flex cursor-pointer ">
            {Items.map((item,index)=>(
                <h6 className="text-lightblue mb-0" key={index}>{item.name}</h6>
            ))}
            <div className="location text-lightblue mb-0 flex">
                <LocationOnIcon className="location-icon"/>
                <h6 className="mb-0">{MenuList[3].name}</h6>
            </div>
            <ButtonCustom description={"Đăng nhập"} func={()=>{}}/>
        </div>
    )

}
export default MenuNavigation