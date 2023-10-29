import { motion, useInView } from "framer-motion"
import "./services.scss"
import { useRef } from "react"

const serviceVariant = {
    initial: {
        x: -500,
        y:100,
        opacity: 0
    },
    animate: {
        x: '0',
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px'})

  return (
    <motion.div ref={ref} className="services" variants={serviceVariant} initial='initial' animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={serviceVariant}>
        <p>Focusing on developing myself and the organisation <br/> helping me to develop</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={serviceVariant}>
            <div className="title">
                <img src="./people.webp" />
                <h1><motion.b whileHover={{ color: "orange "}}>Languages</motion.b> I use</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{ color: "orange "}}>For My </motion.b>Growth</h1>
                <button>What I Do</button>
            </div>
      </motion.div>
      <motion.div className="listContainer" variants={serviceVariant}>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black'}}>
            <h2>Html/Css</h2>
            <p>
              My intrest on web-development started on HTML and CSS, where i studied the basics on fron-end development.
              Before starting my carrer in web developemnt I started learning the basics of HTML/Css by building clones of diffrent websites like
              spotify, building a resume.I am still improving my skills on HTML and css(scss) by doing many front-end projects.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black'}}>
            <h2>React.js/Next.js</h2>
            <p>
             My journey as a Front-end developer on react.js/Next.js started at early 2023 at Tranzmeo pvt solutions. I was able to work on projects
             using both react.js and next.js where i became familiar on concepts including UI designing, Hooks, Props and various react concepts. Apart from 
             that i am also working on diffrent mini- projects to inprove my skills on reactjs.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black'}}>
            <h2>Node.js/Express.js</h2>
            <p>
                My enthusiasm and passion towards learning made me also introduced to Node.js(express.js). I started building backend mini-projects while working at Tranzmeo
                using Node.js. I was able to understand about the CRUD system, authentication, handling database queries and how the data flow working in a full stack project.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black'}}>
            <h2>MySql/MongoDb</h2>
            <p>
              On the way of acheving the skills of a full-stack developer i became familiar with both sql and nosql databases. I aquired knowledge
              on how data is stored, interaction of the backend with databases, interconnection of tables, using mongodb compass and mysql workbench, concepts of 
              DBMS etc. 
            </p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
