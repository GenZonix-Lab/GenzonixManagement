import React, { useState, useEffect } from 'react';
import { FileUploader } from '@aws-amplify/ui-react-storage';

const NewStock = () => {
  const [form, setForm] = useState({
    productCode: '',
    title: '',
    description: '',
    category: '',
    brand: '',
    sku: '',
    mrp: '',
    discount: '',
    price: '',
    stock: '',
    shown: false,
    warranty: '',
    returnPolicy: '',
    thumbnail: '',
    images: [],
    videos: [],
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  // Auto-calculate price from MRP and discount
  useEffect(() => {
    const mrpValue = parseFloat(form.mrp) || 0;
    const discountValue = parseFloat(form.discount) || 0;
    const calculatedPrice = mrpValue - (mrpValue * (discountValue / 100));
    setForm(prev => ({ ...prev, price: calculatedPrice.toFixed(2) }));
  }, [form.mrp, form.discount]);

  const handleOption = async (e) => {
    e.preventDefault(); // prevent form reload

    const postData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    };

    try {
      const response = await fetch("https://hss03vsscj.execute-api.ap-south-1.amazonaws.com/Production/add", postData);
      if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);
      const data = await response.json();
      console.log('Success:', data);
      alert('Stock added successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="new-stock">
      <h2 className='text-center fw-bolder'>Add Stock</h2>
      <form onSubmit={handleOption} className='row g-3'>
        {[
          { label: "Product Code", id: "productCode" },
          { label: "Product Title", id: "title" },
          { label: "Description", id: "description", isTextarea: true },
          { label: "Category", id: "category" },
          { label: "Brand", id: "brand" },
          { label: "SKU", id: "sku" },
          { label: "MRP", id: "mrp", type: "number" },
          { label: "Discount", id: "discount", type: "number" },
          { label: "Price", id: "price", type: "number", readOnly: true },
          { label: "Stock", id: "stock", type: "number" },
          { label: "Warranty", id: "warranty" },
          { label: "Return Policy", id: "returnPolicy" },
        ].map(({ label, id, type = "text", isTextarea, readOnly }) => (
          <div className="form-group col-xl-4 col-lg-6 " key={id}>
            <label htmlFor={id} className='form-label'>{label}:</label>
            {isTextarea ? (
              <textarea
                id={id}
                name={id}
                rows="2"
                className='form-control'
                value={form[id]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                id={id}
                name={id}
                className='form-control'
                value={form[id]}
                onChange={handleChange}
                required={!readOnly}
                readOnly={readOnly}
              />
            )}
          </div>
        ))}
        <div className="form-group col-xl-4 col-lg-6">
          <label htmlFor="thumbnail" className='form-label'>Front Image:</label>
          <FileUploader
            acceptedFileTypes={['image/*']}
            path={`${form.productCode}/dp/`}
            autoUpload={false}
            maxFileCount={1}
            isResumable
            onUploadSuccess={(file) => {
              setForm(prev => ({ ...prev, thumbnail: file.key }));
            }}
          />
        </div>
        <div className="form-group col-xl-4 col-lg-6">
          <label htmlFor="images" className='form-label'>Images:</label>
          <FileUploader
            acceptedFileTypes={['image/*']}
            path={`${form.productCode}/images/`}
            autoUpload={false}
            maxFileCount={10}
            isResumable
            onUploadSuccess={(file) => {      
              setForm(prev => ({...prev,images: [...prev.images, file.key]}));
            }}
            multiple={true}
            showFileList={true}
          />
        </div>
        <div className="form-group col-xl-4 col-lg-6">
          <label htmlFor="videos" className='form-label'>Videos:</label>
          <FileUploader
            acceptedFileTypes={['video/*']}
            path={`${form.productCode}/videos/`} // Optional: separate folder for videos
            autoUpload={false}
            maxFileCount={5} // Optional: you can limit to fewer videos if needed
            isResumable
            multiple={true}
            showFileList={true}
            onUploadSuccess={(file) => {
              setForm(prev => ({ ...prev, videos: [...(prev.videos || []), file.key] }));
            }}
          />
        </div>
        <div className="form-group col-xl-4 col-lg-6">
          <label htmlFor="shown" className='form-label'>Display on Public website:</label>
          <div className="form-control d-flex justify-content-evenly">
            <div>
              <input type="radio" name="shown" id="shown" onChange={()=>{setForm(prev => ({ ...prev, shown:true }))}} value={true}/>
              <span className='mx-2'>Shown</span>
            </div>
            <div>
              <input type="radio" name="shown" id="shown" onChange={()=>{setForm(prev => ({ ...prev, shown:false }))}} value={false}/>
              <span className='mx-2'>Not Shown</span>
            </div>
          
          </div>
        </div>
        <div className="form-group">
          <button className='btn btn-dark py-2 mb-4 justify-content-center col form-control' type="submit">Add Stock</button>
        </div>
      </form>
    </div>
  );
};

export default NewStock;
