import { NavLink } from "react-router-dom";

export const CountryCard = ({country}) => {
    const { flags, name, population, region, capital }= country;
    return <li className="country-card card">
        <div className="bg-white-box container-card">
            <img src={flags.svg} alt={flags.svg} srcset="" />

            <div className="countryInfo">
                <p className="card-title">{name.common.length > 10?name.common.slice(0, 10)+"...": name.common}</p>
                <p>
                    <span className="card-description">Population:</span>{population.toLocaleString()}
                </p>
                <p>
                    <span className="card-description">Region:</span>{region}
                </p>
                <p>
                    <span className="card-description">Population:</span>{capital[0]}
                </p>
                <NavLink to={`/country/${name.common}`}>
                    <button>Read More</button>
                </NavLink>

            </div>
        </div>
    </li>
}