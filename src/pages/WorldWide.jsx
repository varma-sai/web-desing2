import React, {useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries, fetchCountryData } from "../redux/services"
import { setSelectedCountry } from "../redux/covidTrackerSlice"
import Card from "../components/worldWide/Card"
import Loading from "../components/worldWide/Loading"
import Error from "../components/worldWide/Error"
import Chart  from "../components/worldWide/Chart"

const WorldWide = () => {
  const [dataArr, setDataArr] = useState([])
  const dispatch = useDispatch()
  const {countries, selectedCountry, countryData, status, error} = useSelector((state) => state.covidTracker)

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCountry !== null) {
    dispatch(fetchCountryData(selectedCountry));
    }
    }, [dispatch, selectedCountry]);
    

    useEffect(() => {
      countryData ? setDataArr([
        { name: 'Infected', value: countryData.Confirmed, color: "info" , date: countryData.Date},
        { name: 'Recovered', value: countryData.Recovered, color:"secondary", date: countryData.Date },
        { name: 'Active', value: countryData.Active, color:"warning", date: countryData.Date },
        { name: 'Deaths', value: countryData.Deaths, color: "danger", date: countryData.Date },
      ]) : setDataArr([]);
    }, [countryData, selectedCountry]);
  

    return (
      <main className='container my-3'>
        <div className='row text-center'>
          <h1 className="text-success">Covid-19 Statistics</h1>
          <p className="fs-5 text-dark">Global and Country Wise Cases of Corona Virus</p>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
          <select onChange={(e) => dispatch(setSelectedCountry(e.target.value))}>
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.ISO2} value={country.Slug}>
                {country.Country}
              </option>
            ))}
          </select>
        </div>
        <div className="row row-cols-2 row-cols-md-4">
          {status === 'loading' ? (
            <Loading />
          ) : status === 'failed' ? (
            <Error message={error} />
          ) : dataArr.length > 0 ? (
            <>
              {dataArr.map((data, index) => (
                <Card data={data} key={index} />
              ))}
              <Chart chartData={dataArr} />
            </>
          ) : (
            <div className="container-fluid alert alert-danger" role="alert">
              No data available
            </div>
          )}
        </div>
      </main>
    );
    
}

export default WorldWide