import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    <main className="main hero-Selection">
        <div className="grid grid-two-cols container">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world, One Country at Time.
                </h1>
                <p className="paragraph">
                    Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                </p>
                <button className="btn-inline bg-white-box btn btn-darken">
                    Start Exploring <FaLongArrowAltRight />
                </button>
            </div>
            <div className="hero-image">
                <img src="/images/world.png" alt="world wide image" className="banner-image" />
            </div>
        </div>
    </main>
};