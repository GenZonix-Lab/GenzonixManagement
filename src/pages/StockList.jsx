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
      <table>
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
            <th>ISK</th>
            <th>OSK</th>
            <th>CSK</th>
            <th>RATING</th>
            <th>FEEDBACK</th>
            <th>WARRANTY</th>
            <th>RETURN POLICY</th>
          </tr>
        </thead>
        <tbody id="productTable">
          {products.map((element, index) => (
            <tr key={index}>
              <td>{element.productCode}</td>
              <td>{element.title}</td>
              <td>{element.description}</td>
              <td>{element.category}</td>
              <td>{element.brand}</td>
              <td>{element.sku}</td>
              <td>
                {element.meta && (
                  <StorageImage 
                    alt="Product" 
                    path={()=>{
                      if (element.meta.thumbnail) {
                        return element.meta.thumbnail;
                      } else {
                        return 'default-thumbnail.jpg'; // Fallback image if no thumbnail is available
                      }
                    }
                  }
                    width={50} />
                )}
              </td>
              <td>{element.mrp}</td>
              <td>{element.discount}</td>
              <td>{element.price}</td>
              <td>{element.isk}</td>
              <td>{element.osk}</td>
              <td>{element.csk}</td>
              <td>{element.rating}</td>
              <td>{element.review}</td>
              <td>{element.warrantyInformation}</td>
              <td>{element.returnPolicy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
