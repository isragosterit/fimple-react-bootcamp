import React, { useState, useEffect } from 'react';

function Modal({ onClose, productId, editProduct }) {
  const [productDetails, setProductDetails] = useState(null);
  const [description, setDescription] = useState('');
  const [originalDescription, setOriginalDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // fetch product details when productId changes
  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
          setProductDetails(product);
          setDescription(product.description);
          setOriginalDescription(product.description); // Store original description
        })
        .catch(error => console.error('Error fetching product details:', error));
    }
  }, [productId]);

  // close the modal and reset states
  const closeModal = () => {
    setProductDetails(null);
    setDescription('');
    setOriginalDescription('');
    onClose();
  };

  // enable editing the description
  const handleEditDescription = () => {
    setIsEditing(true);
  };

  const cancelEditDescription = () => {
    setIsEditing(false);
    setDescription(originalDescription); // Reset description to original
  };

  const saveDescription = () => {
    setIsEditing(false);
    const updatedProductDetails = { ...productDetails, description:description };
    editProduct(productId, updatedProductDetails);
    setOriginalDescription(description);
  };

  // handle changes in the description input field
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <div id='product-modal' style={{ display: productDetails ? 'block' : 'none' }}>
      <div className="modal">
        <span className="close-button fa-solid fa-x" onClick={closeModal}></span>
        {productDetails && (
          <div>
            <h2>{productDetails.title} Details</h2>
            <img src={productDetails.image} alt={productDetails.title} className="product-image" />
            <p>{productDetails.price} $</p>
            {isEditing ? (
              <div>
                <input type="text" value={description} onChange={handleChangeDescription} />
                <div className='edit-buttons'>
                  <button onClick={cancelEditDescription} className='edit-button'>Cancel</button>
                  <button onClick={saveDescription} className='edit-button'>Save</button>
                </div>
              </div>
            ) : (
              <div>
                <p><b>Description: </b>{description}</p>
                <button onClick={handleEditDescription} className='edit-button'>Change</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
