import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SH_SideNav from './SH_SideNav'
import data from './data.json'

const Service_History = () => {
  return (
    <div className=''>
         <Navbar/>
        <div>
       <div className='flex start-0'>
        <SH_SideNav/>
        <div className="overflow-x-auto ml-20 my-20">
              <div className="table-container">
                <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Provider Name </th>
            <th>Service</th>
            <th>Rating</th>
            <th>Location </th>
            <th>Date/Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,id) => (
            <tr key={id}>
              <th></th>
              <td>{d.providerName}</td>
              <td>{d.serviceName}</td>
              <td>{d.rating}</td>
              <td>{d.location}</td>
              <td>{d.dateTime}</td>
              <td>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </div>
       </div>


        </div>
        <div>

            <Footer className=""/>
        </div>
    </div>
  )
}

export default Service_History