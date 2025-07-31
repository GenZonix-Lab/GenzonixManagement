import { useEffect, useState } from 'react';
import SearchItems from '../Components/SearchItems'
const resourseApi = 'https://yn5xuarjc7.execute-api.ap-south-1.amazonaws.com/production//UsedResourceByUser'
const ResourseUse = () => {
    const [resourceDetail,setResourceDetail] = useState([]);
useEffect(() => {
    const fetchResourceDetail = async () => {
        const response = await fetch(resourseApi);
        // You may want to handle the response, e.g.:
        const data = await response.json();
        setResourceDetail(data)
    };
    fetchResourceDetail();
}, []);
  return (
    <>
    <div className="container">
        <div>
            <SearchItems />
        </div>
        <table className='table table-striped mt-2 border'>
            <thead>
                <tr>
                    <th className='border'>Username</th>
                    <th className='border'>Event Name</th>
                    <th className='border'>Event Time</th>
                    <th className='border'>Resources</th>
                    <th className='border'>Region</th>
                </tr>
            </thead>
            {resourceDetail.map((element)=>( 
            <tbody key={element.user_name} id='productTable'>
                {element.data_event.map( res => (res.map( events => (
                <tr key={events.EventId}>
                    <td className='border'>{events.Username}</td>
                    <td className='border'>{events.EventName}</td>
                    <td className='border'>{events.EventTime}</td>
                    <td className='border'>{events.Resources}</td>
                    <td className='border'>{events.Region}</td>
                </tr>
                ))))}
            </tbody>
            ))}
            
        </table>
    </div>
    </>
  )
}

export default ResourseUse