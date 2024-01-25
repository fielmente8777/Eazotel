import React, { useState } from 'react'

function Imageupload() {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg")
    
    function uploadImage(e) {
        e.preventDefault()
        const imageInput = document.getElementById('file1');
        const file = imageInput.files[0];
        if (!file) {
          alert('Please select an image file.');
          return;
        }
    
        const reader = new FileReader();
        reader.onloadend = function() {
          const base64String = reader.result.split(',')[1];
          setImage("https://i.gifer.com/ZKZg.gif")
          UploadingImageS3Nearby(base64String);
        };
        reader.readAsDataURL(file);
      }


    function UploadingImageS3Nearby(base64String) {
        // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
        
        fetch('http://127.0.0.1:8000/api/uploadVideo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImRpdnlhbnNodUBlYXpvdGVsLmNvbSJ9.5Px03BniCXH4tJA8JNt5dkaf1skSSa2-KnfS4T9XvJU", Video: base64String }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Response from backend:', data);
            setImage(data.Video)
            // Handle the backend response as needed

          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
  return (
    <>
        <label htmlFor="">Upload Image:</label>
        <input type="file" id="file1" onChange={uploadImage} />
        <video src={Image} alt="alternative" />
    </>
  )
}

export default Imageupload