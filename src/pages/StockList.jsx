import React, { useEffect, useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';


const StockList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://ki4mm5ajnj.execute-api.ap-south-1.amazonaws.com/prod/add");
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        const productsData = JSON.parse(data.body); // Make sure this is the correct structure
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="stock-details">
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>CODE</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>SKU</th>
            <th>IMAGE</th>
            <th>MRP</th>
            <th>DISCOUNT</th>
            <th>PRICE</th>
            <th>IN</th>
            <th>OUT</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>FEEDBACK</th>
            <th>WARRANTY</th>
            <th>RETURN POLICY</th>
            <th>SHOWN</th>
          </tr>
        </thead>
        <tbody id="productTable" className='fw-normal fs-6'>
          {products.map((element, index) => (
            <tr key={index}>
              <td>{element.productCode}</td>
              <td><div className="max-row-height">{element.title}</div></td>
              <td><div className='max-row-height max-row-width'>{element.description}</div></td>
              <td><div className="max-row-height">{element.category}</div></td>
              <td>{element.brand}</td>
              <td>{element.sku}</td>
              <td>
                {element.meta && (
                  <StorageImage 
                    alt="Product" 
                    path={element.meta?.thumbnail || 'default-thumbnail.jpg'}
                    width={150} />
                )}
              </td>
              <td>{element.mrp}</td>
              <td>{element.discount}</td>
              <td>{element.price}</td>
              <td>{element.in}</td> 
              <td>{element.out}</td>
              <td>{element.stock}</td>
              <td>{element.rating}</td>
              <td><div className="max-row-height">{element.review}</div></td>
              <td><div className="max-row-height">{element.warrantyInformation}</div></td>
              <td><div className="max-row-height">{element.returnPolicy}</div></td>
              <td>{element.shown?'True':'False'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
