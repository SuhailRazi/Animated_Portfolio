import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id:1,
        title: "Book Management System",
        img: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'This is a Full-Stack application using React as front-end framework and node.js/express.js as backend framework. it uses MySql as the database for storing the data. It allows users to ADD,EDIT,DELETE the Books according tot their need. For the GitHub repo pls click on the button below.',
        url: 'https://github.com/SuhailRazi/Book-Management.git'
    },
    {
        id:2,
        title: "Contact Management API",
        img: 'https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'This is a Backend application using node.js/express.js as backend framework. it uses MongoDB as the database for storing the data. It allows induvidual users to ADD,EDIT,DELETE the Contacts according tot their need.Proper registration and authentication is added using JWT packages. For the GitHub repo pls click on the button below.',
        url: 'https://github.com/SuhailRazi/Contact-Management.git'
    },
    {
        id:3,
        title: "Blogg Application",
        img: 'https://images.pexels.com/photos/4565775/pexels-photo-4565775.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'This is a Full-Stack application using React as front-end framework and node.js/express.js as backend framework. it uses MySql as the database for storing the data. It allows induvidual users to ADD,EDIT,DELETE the Blogs and allow registration and autentication of users. For the GitHub repo pls click on the button below.',
        url: 'https://github.com/SuhailRazi/Blog-App'
    },
    {
        id:4,
        title: "To-DO App",
        img: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=600',
        desc: 'This is a simple react aaplication which maily used the hooks to create delete and update the state of the components. This also helpes a beginner to understant the basic concepts including the arrow functions, states, maping, filters etc. ',
        url: 'https://github.com/SuhailRazi/React-ToDo-Website.git'
    },
];

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref} >
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y: y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <a 
            href={item.url}
            target="_blank"
            rel="noreferrer"
            >
               <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 

const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30
  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio;
