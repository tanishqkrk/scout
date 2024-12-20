import AboutWork from '@/components/bagalore/AboutWork';
import Adapting from '@/components/bagalore/Adapting';
import Amenities from '@/components/bagalore/Amenities';
import Hero from '@/components/bagalore/Hero';
import Journey from '@/components/bagalore/Journey';
import React from 'react';


const BangaloreRelocationPage = () => {
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

export default BangaloreRelocationPage;