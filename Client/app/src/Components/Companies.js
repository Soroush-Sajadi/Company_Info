import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CompaniesCards from './CompaniesCards';


const Companies = () => {
  const dispatch = useDispatch();
  

  const fetchData = async () => {
    const data = await fetch(`http://localhost:5000`);
    const dataJson = await data.json();
    dispatch({type:"COMPANIES_DATA", payload: dataJson})
  }
  useEffect(() => {
    fetchData()
  },[])

  return(
    <>
     <CompaniesCards />
    </>
  )
}

export default Companies;