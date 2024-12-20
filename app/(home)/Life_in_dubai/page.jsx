import React from 'react';
import Hero from '@/components/dubai/Hero';
import Journey from '@/components/dubai/Journey';
import AboutWork from '@/components/dubai/AboutWork';
import Adapting from '@/components/dubai/Adapting';
import Amenities from '@/components/dubai/Amenities';
const DubaiRelocationPage = () => {
   return (
     <div className="bg-white mt-20">
       <div className="my-16"><Hero/></div>
       <div className="my-16"><Journey/></div>
       <div className="my-16"><AboutWork/></div>
       <div className="my-16"><Adapting/></div>
       <div className="my-16"><Amenities/></div>
    </div>
   );
};

export default DubaiRelocationPage;