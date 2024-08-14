import React, { useState } from 'react';
import '../styles/Catalogue.css';
import img2 from '../assets/img2.png'
const imageList = [
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
    { name: 'Image 1', src: img2, brand: 'Amazon', price: "Rs.200" },
    { name: 'Image 2', src: img2, brand: 'Flipkart', price: "Rs.300" },
];
function Catalogue() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };
    const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };

    const [rating, setRating] = useState(0);

    const handleStarClick = (starValue) => {
    setRating(starValue);
    };
return (
    <div>
        <center>
            <h1>Products</h1>
        </center>
        <div className='imagegrid'>
        {imageList.map((image, index) => (
            <div key={index} className='image-container' onClick={() => openModal(image)}>
            <img src={image.src} alt={image.name} />
            <div className='image-details'>
                <p>{image.name}</p>
              {/* <a onClick={() => openModal(image)}>View Details</a> */}
            </div>
            </div>
        ))}
        </div>
        {showModal && (
            <div className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={closeModal}>&times;</span>
                    <img src={selectedImage.src} alt={selectedImage.name} className='modal-image' />
                    <p><center>{selectedImage.name}</center><br/>
                    Brand : {selectedImage.brand}<br/>
                    Price : {selectedImage.price}
                    </p><br/>
                    <h5>Rate the product</h5>
                    
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                            <span key={starValue} className={`star ${starValue <= rating ? 'filled' : ''}`}
                            onClick={() => handleStarClick(starValue)}>
                            ★
                            </span>
                        ))}
                    </div>
                    <div className='review'>
                        <textarea placeholder='Your Review' /><br/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}
export default Catalogue;
