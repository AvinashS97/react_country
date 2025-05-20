import { FaLongArrowAltRight } from "react-icons/fa";

export const Home = () => {
    return (
        <main className="main hero-Selection">
        <div className="grid grid-two-cols container">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the world, One Country at Time.
                </h1>
                <p className="paragraph">
                    Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.
                </p>
                <button btn btn-darken btn-inline bg-white-box>
                    Start Exploring <FaLongArrowAltRight />
                </button>
            </div>
            <div className="hero-image">
                <img src=""></img>
            </div>
        </div>
        </main>
    )
}