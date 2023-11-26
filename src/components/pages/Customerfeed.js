import React from 'react'
import pro1 from '../assets/pro1.jpg'
import pro2 from '../assets/pro2.jpg'
import pro3 from '../assets/pro3.jpg'
import '../styles/Customerfeed.css'
function Customerfeed() {
    const projects = [
        {
          image: pro1,
          title: 'Karthi',
          description: 'I recently purchased from Trustify, and the quality surpassed my expectations. The attention to detail and craftsmanship are truly commendable. Im a satisfied customer and would highly recommend Trustify.',
          link: '.',
        },
        {
          image: pro2,
          title: 'Arjun',
          description: 'The prompt and reliable service I received from Trustify is worth acknowledging. From placing the order to receiving the product, the process was seamless. I appreciate the efficiency of your team',
          link: '.',
        },
        {
          image: pro3,
          title: 'Mathi',
          description: 'While I have had positive experiences overall, I have a small suggestion for improvement. It would be great to see specific detailed details in your future products. Nonetheless, I appreciate the excellent customer service I have always received.',
          link: '.',
        },
        
        
      ];
  return (
    <div className='cbody'>
        <div class="projectlist">
        <center><h2 className='what'>What Our Customers Say?</h2></center><br/>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <div>
            {project.image && <img src={project.image} className="profileimage" alt={project.profile} />}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link}>Learn More</a>
            </div>
          </li>
        ))}
      </ul>
            </div>
    </div>
  )
}

export default Customerfeed