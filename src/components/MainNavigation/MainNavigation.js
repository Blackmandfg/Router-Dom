import React from 'react';
import {navigationMainConfig} from "../../config/navigationMainConfig";
import {Link} from "react-router-dom";
const MainNavigation = () => {
    return (
        <div>
            <ul className="flex flex-col">
                {navigationMainConfig.map(item => <Link className="text-[14px] font-[400] text-[#161616]" to={item.href}>{item.title}</Link>)}
            </ul>
        </div>
    );
};

export default MainNavigation;