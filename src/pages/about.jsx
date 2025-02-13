import '../styling/about.css'
import Club from '../images/clubphoto.png'

const About =()=>{
return(
    <>
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          Established in 2019, our Finance Club is a vibrant hub for students passionate about finance, economics,
          and the world of investments. We are dedicated to fostering financial literacy and practical knowledge
          through engaging workshops, interactive sessions, and dynamic events.
        </p>
        <p>
          Our signature events, such as Trading Ring and Price is Right, provide a hands-on experience in trading
          strategies, market dynamics, and financial decision-making. These events are the highlight of our
          activities during Technozion, our college’s prestigious annual fest.
        </p>
        <p>
          With a focus on creating an immersive and enriching environment, we aim to equip students with the skills
          and insights needed to thrive in the ever-evolving financial world. Whether you are a beginner or an
          enthusiast, our club is the perfect platform to learn, grow, and connect with like-minded individuals.
        </p>
      </div>
      <img src={Club} alt="Finance Club" className="about-image" />
  
      <h1 className="title">Our Members</h1>
  
      <div className="category">
        <h2 className="category-title">General Secretaries</h2>
        <div className="names-row">
          <p>Sreeja Reddy</p>
          <p>Rohan</p>
        </div>
      </div>
  
      <div className="category">
        <h2 className="category-title">Additional Secretaries</h2>
        <div className="names-row">
          <p>Shreyas Shivapuji</p>
          <p>Kanchan Naval</p>
          <p>Khushi Chitara</p>
        </div>
        <div className="names-row">
          <p>Ashish Ricky</p>
          <p>Ashish Sawant</p>
        </div>
      </div>
  
      <div className="category">
        <h2 className="category-title">Joint Secretaries</h2>
        <div className="names-row">
          <p>Ankita Kumari</p>
          <p>Venkat Koushik</p>
          <p>Arka Mishra</p>
        </div>
        <div className="names-row">
          <p>Kiran B</p>
          <p>Udaykanth</p>
        </div>
      </div>
  
      <div className="category">
        <h2 className="category-title">Executive Members</h2>
        <div className="names-row">
          <p>Gaurav Rastogi</p>
          <p>Nikhil</p>
          <p>Devansh Goyal</p>
        </div>
        <div className="names-row">
          <p>Sudipa</p>
          <p>Waqar Ahmed</p>
          <p>Shaik Saba Taranum</p>
        </div>
      </div>
    </div>
  </>
  
)
}
export default About