import React, {useState} from 'react';
import CompanyImage from '../Images/company.jpg';
import Profile from '../Images/profile.png';
import { useSelector } from 'react-redux';
import '../Style/CompaniesCards.css'

const CompaniesCards = () => {
  const [ loading, setLoading ] = useState('Loading')
  const data = useSelector((state => state.companies));
  console.log(data)
  return(
    <>
     {data.length !== 0 ? 
        <div className="companies-wrapper">
          {data.map((item, i) => 
            <div key={i} className="company-card">
              <img src={CompanyImage} alt="Company Image" />
              <div className="company-info">
                <h4>{item.companyName}</h4>
                <p>{item.city}</p>
                <p>{item.visitAddress}</p>
              </div>
              <div className="company-roles-wrapper">
              {item.roles.map((item, i) =>
                <div key={i} className="company-roles-outer">
                  <div className="company-roles-inner">
                  <img src={Profile} alt="Profile" />
                  <div className="company-roles-info">
                    <p>{item.name}</p>
                    <p className="company-roles-info-buttom">{item.role}</p>
                  </div>
                  </div>
                </div>
              )}
              </div>
            </div>
          )}
        </div>
        : 
        loading}
    </>
  )
}

export default CompaniesCards;