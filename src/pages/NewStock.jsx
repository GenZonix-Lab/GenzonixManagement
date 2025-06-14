import React from 'react'

const NewStock = () => {
  return (
    <>
    <div className="new-stock">
        <h2>New Stock Entry</h2>
        <form>
            <div className="form-group">
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
            </div>
            <div className="form-group">
            <label htmlFor="images">Images:</label>
            <input type="file" id="images" name="images" accept="image/*" multiple />
            </div>
            <button type="submit">Add Stock</button>
        </form>
    </div>
    </>
  )
}

export default NewStock