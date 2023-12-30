import React, { Component } from 'react';
import Modal from './Modal';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      selectedProductId: null,
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        this.setState({ productsData: products });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  handleDelete = productId => {
    const { productsData } = this.state;
    const updatedProducts = productsData.filter(product => product.id !== productId);
    this.setState({ productsData: updatedProducts });
    console.log(`Product ID: ${productId} has been deleted.`);
  };

  showModal = productId => {
    console.log('Edit button clicked for product ID:', productId);
    this.setState({ selectedProductId: productId });
  };

  closeModal = () => {
    this.setState({ selectedProductId: null });
  };

  editProduct = (productId, updatedData) => {
    const { productsData } = this.state;
    const updatedProducts = productsData.map(product => {
      if (product.id === productId) {
        return { ...product, ...updatedData };
      }
      return product;
    });

    console.log('Updated Products:', updatedProducts);
    this.setState({ productsData: updatedProducts });
    console.log(`Product ID: ${productId} has been updated with data:`, updatedData);
    this.closeModal();
  };

  render() {
    const { productsData, selectedProductId } = this.state;

    return (
      <div id='product-list'>
        <div id='list-item'>
          {productsData.map(product => (
            <div key={product.id} className='product-item'>
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>{product.price} $</p>
              <img className='product-image' src={product.image} alt={product.title} />
              <div className='button-container'>
                <button onClick={() => this.handleDelete(product.id)} className='delete-button'>Delete</button>
                <button onClick={() => this.showModal(product.id)} className='edit-button'>Edit</button>
              </div>
            </div>
          ))}
        </div>
        {selectedProductId && (
          <Modal
            onClose={this.closeModal}
            editProduct={this.editProduct}
            productId={selectedProductId}
          />
        )}
      </div>
    );
  }
}

export default ProductList;
