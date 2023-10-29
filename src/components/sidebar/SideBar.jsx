import { useState } from 'react';
import Links from './links/links';
import './sidebar.scss';
import { motion } from 'framer-motion';
import Togglebutton from './togglebutton/Togglebutton';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness:20
    }
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition:{
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const SideBar = () => {

  const [open,setOpen] = useState(false);

  
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton setOpen = {setOpen}/>
    </motion.div>
  )
}

export default SideBar
