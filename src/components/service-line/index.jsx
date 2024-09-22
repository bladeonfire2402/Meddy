import React from "react";
import ServiceLineItem from "./Service-line-item";

const ServiceLine = () => {
    const ServiceList=[
        {
            name:"Mua thuốc",
            imgsrc:"",
            alt:"Mua thuốc",
        },
        {
            name:"Tư vấn",
            imgsrc:"",
            alt:"Tư vấn bác sĩ",
        },
        {
            name:"Tiệm thuốc",
            imgsrc:"",
            alt:"Tiệm thuốc gần nhất",
        },
        {
            name:"Thiết bị",
            imgsrc:"",
            alt:"Thiết bị y tế",
        },
        {
            name:"Kiểm tra",
            imgsrc:"",
            alt:"Test sức khoẻ ngay",
        },
        {
            name:"Mua thuốc",
            imgsrc:"",
            alt:"Mua thuốc",
        }

    ]
    return<div className="ServiceLine-wrapper flex">
        {ServiceList.map((item,index)=>(
            <ServiceLineItem key={index} Servicename={item.name} imgsrc={item.imgsrc} description={item.alt} />
        ))}
    </div>
}
export default ServiceLine