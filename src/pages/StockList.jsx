import React from 'react'

const StockList = () => {
      try {
    async function fetchdata() {
      const response = await fetch("https://ki4mm5ajnj.execute-api.ap-south-1.amazonaws.com/prod/add");
      if (!response.ok) {
        throw new Error('Network response was not ok in fetch data ' + response.statusText);
      }
      const data = await response.json();
      const products = JSON.parse(data.body); // Assuming the body contains a JSON string
      const table=document.getElementById('productTable');
      table.innerHTML = "";
      products.forEach(element => {
          const datas=['productCode','title','description','category','brand','sku','image','mrp','discount','price','isk','osk','csk','rating','review','warrantyInformation','returnPolicy'];
          const tr=document.createElement('tr');
          datas.forEach(data => {
              const td = document.createElement('td');
              td.textContent = element[data];
              // If the data is an image, create an img element
              if (data === 'image') {
                const img = document.createElement('img');
                img.src = element[data];
                img.alt = 'Product Image';
                img.style.width = '50px'; // Set a fixed width for the image
                td.appendChild(img);
              }
              tr.appendChild(td);
          });
          table.appendChild(tr);
      });
    }
    fetchdata();
  } 
  catch (error) {
    console.error('Error fetching products:', error);
  }
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
              {/* Data will be populated here by fetchdata function */}
            </tbody>
          </table>
        </div>
  )
}

export default StockList