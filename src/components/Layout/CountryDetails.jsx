import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryData, getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams ();
    const [isPending, startTransition]= useTransition();
        const [Country, setCountry]= useState([]);
    
        useEffect(() => {
            startTransition(async () => {
                const res= await getCountryIndData(params.id)
                console.log(res);
                if(res.status===200) {
                    setCountry(res.data[0])
                }
            })
        }, []);
    
        if (isPending) return <Loader />
    
    console.log(params);

    return(
        <section className="country-details-card card container">
            <div className="bg-white-box container-card">
            <div className="grid grid-two-cols country-image"></div>
            <img 
            src={country.flags.svg} 
            alt={country.flags.svg} className="flag" 
            />

            <div className="country-content">
                <p className="card-title">{country.name.official}</p>
                <div className="infoContainer">
                    <p>
                        <span className="card-description"> Native Names:</span> {Object.keys(CountryDetails.name.nativeName).map((key) => country.name.nativeName[key].common).join(",")}
                    </p>
                </div>
            </div>
            </div>
        </section>
    );
};