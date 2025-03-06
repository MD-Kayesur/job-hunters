 
import { easeInOut } from "motion"
import {motion } from "motion/react"
import  image  from "../../assets/img/person-working-html-computer.jpg"
import  image2  from "../../assets/img/programming-background-with-person-working-with-codes-computer.jpg"


function Banner() {
    return (
        <div className="hero bg-base-200 min-h-[400px] my-4">
  <div className="hero-content flex-col   lg:flex-row-reverse">
    <div className="flex-1 ">
    <motion.img
     animate={{y:[0,50,0]}}
     transition={{duration:5,delay:1 ,ease:easeInOut,repeat:Infinity}}
      src={image} 
     className="max-w-sm w-60 rounded-br-[40px] border-l-4 border-b-4  rounded-t-[40px] shadow-2xl" />
    <motion.img
     animate={{x:[ 50,100,50]}}
     transition={{duration:3,delay:1 ,ease:easeInOut,repeat:Infinity}}
      src={image2}
      className="max-w-sm w-60 rounded-br-[40px]   rounded-t-[40px] shadow-2xl" />
    </div>
    <div className=" flex-1">
    <h1 className="text-4xl font-bold">ComeOn guyes job waiting for you! </h1>
      <motion.h1 
      animate={{x:[0,50,0]}}
      transition={{ duration:2, delay:1 ,ease:easeInOut,repeat:Infinity }}
      
      className="text-5xl font-bold">latest <motion.span
      animate={{color:['#FF5733','#33FF3C','#333CFF']}}
      transition={{duration:5,delay:1, repeat:Infinity}}
      >jobs</motion.span> for you!!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}

export default Banner
