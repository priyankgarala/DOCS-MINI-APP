import React, { useRef } from 'react'
import Card from './card'


function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle:"Download Now", tagColor:"green"},

    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: false, tagTitle:"Download Now", tagColor:"blue"},

    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle:"Download Now", tagColor:"blue"},

    },
  ];
  return (
    
    <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] p-5 flex gap-10'>
     {data.map((item, index)=>(
      <Card data= {item} reference={ref} />
     ))}       
    </div>
  );
}

export default Foreground
