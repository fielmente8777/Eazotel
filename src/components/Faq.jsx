import React from 'react'
import "../style/Faq.css"
import FaqImage from "../assets/Faq's.png"
const Faq = () => {
  return (
    <div className='container faq'>
      <div className='row'>
        <div className='col-md-6 question-section'>
          <div className='question mb-4'>
              <h3 className='heading'>Question 1</h3>
              <h3 className='add-button'>+</h3>
          </div>
          <div className='question mb-4'>
              <h3 className='heading' >Question 2</h3>
              <h3 className='add-button'>+</h3>
          </div>
          <div className='question mb-4'>
              <h3 className='heading'>Question 3</h3>
              <h3 className='add-button'>+</h3>
          </div>
          <div className='question mb-4'>
              <h3 className='heading'>Question 4</h3>
              <h3 className='add-button'>+</h3>
          </div>
          <div className='question'>
              <h3 className='heading'>Question 5</h3>
              <h3 className='add-button '>+</h3>
          </div>
        </div>
        <div className='col-md-6 image-section'>
          <div className='faqimage'>
            <img className='faq-image' src={FaqImage} alt='faq' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq