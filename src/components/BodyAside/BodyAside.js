import React from 'react';
import MainNavigation from "../MainNavigation/MainNavigation";
import AnimalServicesNavigation from "../AnimalServicesNavigation/AnimalServicesNavigation";
const BodyAside = () => {
    return (
        <div>
          <p className="text-[12px] font-[400] text-[#8a8a8a]">Main</p>
<MainNavigation/>
            <p className="text-[12px] font-[400] text-[#8a8a8a]">Animal Services</p>
            <AnimalServicesNavigation/>
        </div>
    );
};

export default BodyAside;