const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Muthukumar1104',
  title: 'MK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muthukumar',
  role: 'Software Engineer',
  description:
    'A skilled Software Engineer with 3 years of experience specializing in React.js, building dynamic, responsive, and user-centric web applications. Proficient in modern front-end development practices, state management, and API integration, with a strong focus on delivering seamless user experiences. Known for problem-solving, code optimization, and collaborative teamwork in crafting high-quality software solutions.',
  resume: '/assets/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/muthukumar-r-9a3ba3157',
    github: 'https://github.com/Muthukumar1104',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Echo - Admin Panel',
    description:
      'The Echo Admin Panel is a comprehensive platform designed to efficiently manage core operations within a user-centric application. It offers tools for handling products, inventory, and customer data, ensuring smooth and organized workflows. Administrators can create and track offers, coupons, banners, and referral programs to boost user engagement. The panel supports seamless user account management, providing control over registrations, roles, and permissions while safeguarding data. With integrated customer service tools like chat support and ticketing systems, businesses can address inquiries promptly. Its inventory and analytics features enable real-time stock monitoring and data-driven decisions. The customizable application settings allow for tailoring themes, languages, and features to fit business needs. Additionally, the platform enhances operational efficiency and boosts customer satisfaction. Its user-friendly interface and robust functionality make it an essential tool for businesses seeking growth and scalability.',
    stack: ['React', 'TypeScript', 'Redux', 'Node', 'PostgreSQL'],
  },
  {
    name: 'Vet Connect',
    description:
      'Vet Connect is an all-in-one platform dedicated to improving pet care by bridging the gap between pet owners, doctors, and clinics. It offers a user-friendly interface where doctors can manage their schedules efficiently using slot-based availability, enabling streamlined appointment booking. Pet owners can easily book consultations, whether online through the app or offline at clinics, ensuring flexibility and convenience. The system fosters better communication between pet owners and veterinarians, promoting timely care and follow-ups. Clinics benefit from improved appointment management and reduced scheduling conflicts. Additionally, Vet Connect supports detailed record-keeping for pets, including medical history, vaccinations, and prescriptions. By integrating modern technology, the platform enhances the overall pet care experience, ensuring pets receive the attention they deserve. With its focus on accessibility and efficiency, Vet Connect is revolutionizing how pet owners connect with veterinary services.',
    stack: ['React', 'Redux', 'Node', 'MongoDB'],
  },
  {
    name: 'Customer Portal',
    description:
      'We developed a feature-rich customer portal designed to streamline logistics and enhance operational transparency. The portal provides both graphical and tabular representations of key metrics such as inbound and outbound shipments, pending deliveries, pending dispatches, pending PODs, and TAT (Turnaround Time) adherence. It enables customers to access comprehensive insights into their logistics operations at a glance. Each product status is tracked in real-time, allowing users to monitor progress through every stage of the process. The system is tailored to manage customer-specific and warehouse-specific details separately, ensuring a high degree of customization and relevance. Real-time order tracking capabilities offer visibility into ongoing operations, empowering users to make informed decisions. Advanced data visualization tools improve understanding and simplify complex logistics data. This powerful portal not only optimizes efficiency but also elevates customer satisfaction by providing a clear view of operational performance.',
    stack: ['React', 'Redux', 'Node', 'MySQL'],
  },
  {
    name: 'Intranet Portal',
    description:
      'We developed a comprehensive intranet portal for Redington, designed to improve organizational communication and foster employee engagement. The portal features a range of tools to connect employees and provide valuable resources. Key highlights include employee birthday announcements to celebrate special moments, a People Directory to facilitate easy connections among team members, and sections for company news and events to keep everyone updated on organizational happenings. Additionally, the portal includes a job openings board to encourage internal career growth, detailed office location information, and access to company policies and manuals. A gallery section showcases memorable events, while a holiday list ensures employees stay informed about scheduled breaks. Each employee is provided with secure, personalized login credentials, offering tailored access to the portal features. This centralized platform has significantly streamlined communication and enhanced the overall employee experience.',
    stack: ['React', 'Redux', '.NET', 'MySQL'],
  },
  {
    name: 'Reverse Logistics',
    description:
      'A Reverse Logistics platform was developed to streamline communication between customers and logistics providers, optimizing the return process. The platform enables users to create tickets efficiently, incorporating details such as client master, warehouse location, product specifications, and division master. It offers robust tracking features to monitor logistics activities at every stage, ensuring transparency and accountability. To enhance functionality, the platform integrates state, city, pin code, and zone masters, enabling precise location-based logistics management. Turnaround Time (TAT) master integration ensures adherence to delivery and processing timelines. This comprehensive system simplifies return workflows and minimizes operational bottlenecks. By providing seamless communication channels and real-time updates, the platform improves efficiency and enhances customer satisfaction. It serves as a valuable tool for businesses aiming to optimize reverse logistics operations and reduce costs.',
    stack: ['React', 'Redux', '.NET', 'MySQL'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React',
  'Redux',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ksrmk437@gmail.com',
}

export { header, about, projects, skills, contact }
