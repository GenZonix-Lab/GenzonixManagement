import React from 'react'
import { FileUploader } from '@aws-amplify/ui-react-storage';
import { uploadData } from 'aws-amplify/storage';
import { useState } from 'react';
const NewStock = () => {
      const [file, setFile] = useState();

  const handleChange = (event) => {
    setFile(event.target.files?.[0]);
  };

  const handleClick = () => {
    if (!file) {
      return;
    }
    try {
        async () => {
        const result = await uploadData({
        path:`photos/${file.name}`,
        data: file,
        }).result;
          console.log('Succeeded:', result);
        }} 
        catch (error) {
            console.error('Error:', error);
        }

  };
  return (
    <>
    <div className="new-stock">
        <h2>New Stock Entry</h2>
        <form>
            {/* <div className="form-group">
            <label htmlFor="productCode">Product Code:</label>
            <input type="text" id="productCode" name="productCode" required />
            </div>
            <div className="form-group">
            <label htmlFor="productTitle">Product Title:</label>
            <input type="text" id="productTitle" name="productTitle" required />
            </div>
            <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required />
            </div> */}
            <div className="form-group">
            <label htmlFor="images">Images:</label>
            <input type="file" onChange={handleChange} />
            </div>
            <FileUploader
              acceptedFileTypes={['image/*']}
              path="images/"
              maxFileCount={1}
              isResumable
            />
            <button type="submit" onClick={handleClick}>Add Stock</button>
        </form>
    </div>
    </>
  )
}

export default NewStock