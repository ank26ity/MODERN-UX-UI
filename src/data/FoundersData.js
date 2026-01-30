// src/data/FoundersData.js

const foundersData = {
  "Dr. Vinod Kohli": {
    title: "Dr. Vinod Kohli",
    role: "Founder & CEO",
    bio: `Dr. Vinod Kohli is the visionary founder of Allied Medical Limited. 
He brings over 25 years of experience in healthcare innovation and medical diagnostics. 
Under his leadership, the company has introduced cutting-edge medical technologies, 
ensuring patient-centric solutions and rigorous quality assurance.`,
  },
  "Aditya Kohli": {
    title: "Aditya Kohli",
    role: "Co-Founder & Director",
    bio: `Aditya Kohli, co-founder of Allied Medical Limited, oversees operations and strategic growth. 
With a background in biomedical engineering and healthcare management, 
he ensures that the company's solutions are scalable, reliable, and patient-focused.`,
  },
  "Akhil Kohli": {
    title: "Akhil Kohli",
    role: "Director of Technology",
    bio: `Akhil Kohli leads the technological development at Allied Medical Limited. 
He specializes in intelligent diagnostic systems and healthcare software solutions. 
His expertise drives innovation in AI-assisted diagnostics and ensures the integration 
of smart technologies in medical workflows.`,
  },
};

// Convert object to array for easier mapping
const foundersArray = Object.values(foundersData);

export default foundersArray;
