import { useEffect, useState } from 'react';
import SearchItems from '../Components/SearchItems'
const resourseApi = 'https://hss03vsscj.execute-api.ap-south-1.amazonaws.com/Production/UsedResourceByUser'
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
resourceDetail.map((element)=>( 
    element.data_event.map( res => (
        //console.log(res)
        res.map( events => (
                //console.log(events.Resources)
                events.Resources.map( datares => (
                    console.log("Type:",datares.ResourceType,"Name:", datares.ResourceName)
                ))
            ))
        
        ))
    //console.log(element.user_name)
    ))
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
            <tbody id='productTable'>
                {element.data_event.map( res => (res.map( events => (
                    <tr>
                        <td className='border'>{events.Username}</td>
                        <td className='border'>{events.EventName}</td>
                        <td className='border'>{events.EventTime}</td>
                        <td className='border'>
                            <table className='table table-striped' style={{display: events.Resources.length > 0 ? '' : 'none'}}>
                                <thead>
                                    <tr className='text-center fw-100'>
                                        <th className='border-end'>ResourceType</th>
                                        <th>ResourceName</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.Resources.map( datares => (
                                    <tr>
                                        <td className='border-end'>{datares.ResourceType}</td>
                                        <td>{datares.ResourceName}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
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