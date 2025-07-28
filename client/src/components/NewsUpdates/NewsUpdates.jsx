
import './NewsUpdates.css'

const NewsUpdates = () => {
  return (
    <div className='news-container'>
      <div className='news-line' />
      <p>local news & activities</p>
      <div className='news-update'>
      <h1>Latest News Update</h1>
      <div className='news-about-btn'>
          <p>Discover More</p>
          <img src='/XMLID_67_.png' />
       </div>
       
      </div>
      <div className='news-cards'>
        <div className='news-main'>
        <div className='news-images'>
          <img src='/Item 1 (1).png' />
           <img src='/Item 1 (1).png' />

        </div>
        <div className='news-images'>
          <img src='/Item 1 (1).png' />
           <img src='/Item 1 (1).png' />

        </div>
        <img src='/Item 5.png' />
        </div>

       </div>
       <img src='\CTA.png' className='cta'/>
    </div>
  )
}

export default NewsUpdates
