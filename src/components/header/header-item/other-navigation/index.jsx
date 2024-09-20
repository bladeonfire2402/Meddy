import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneIcon from '@mui/icons-material/Phone';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const OtherNavigation = () => {
    const OtherMenuList = [
        ShoppingCartIcon,
        PhoneIcon,
        NotificationsActiveIcon
    ];

    return (
        <div className="OtherNavigation-wrapper flex gap-1 cursor-pointer text-lightblue">
            {OtherMenuList.map((IconComponent, index) => (
                <div key={index}>
                    <IconComponent />
                </div>
            ))}
        </div>
    );
}

export default OtherNavigation;
