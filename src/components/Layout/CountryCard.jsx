export const CountryCard = ({country}) => {
    const { flags, name, population, region, capital }= country;
    return <li className="country-card card">
        <div className="bg-white-box container-card">
            <img src={flags.svg} alt={flags.svg} srcset="" />
        </div>
    </li>
}