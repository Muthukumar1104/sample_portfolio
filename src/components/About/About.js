import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css';



const About = () => {
  const { name, role, description, resume, social } = about

  const downloadResume = () => {
    // File URL from the assets folder
    const fileUrl = '../../../public/assets/resume.pdf'

    // Create an invisible link element
    const a = document.createElement('a')
    console.log(a, 'a.....', fileUrl, '..href')
    a.href = fileUrl
    a.download = 'resume.pdf' // This will download the file as 'resume.pdf'
    a.click() // Programmatically trigger the click
  }

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* {resume && (
         <a href={resume}>
          <button type='button' className='btn btn--outline' onClick={downloadResume}>
            Resume
          </button>
           </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
