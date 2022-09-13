const Services = () => {
    return ( 
        <div className="Services">
            
                <div className="beans card">
                    <div className="beans-pic">
                        <img src={require("./pexels-jonathan-borba-2878709.jpg")}alt="image not found"/>
                    </div>
                    <div className="beans-desc">
                        <h2>Beans</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta?
                            lorem
                            <br />
                            Lorem ipsum dolor sit amet.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nostrum.
                        </p>
                    </div>
                </div>
                <div className="mugs card">
                    <div className="mugs-pic">
                    <img src={require("./pexels-kristina-paukshtite-2417857.jpg")}alt="image not found"/>
                    </div>
                    <div className="mugs-desc">
                        <h2>Mugs</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta?
                            lorem
                            <br />
                            Lorem ipsum dolor sit amet.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nostrum.
                        </p>
                    </div>
                </div>
                <div className="locations card">
                    <div className="locations-pic">
                    <img src={require("./pexels-marina-leonova-7635156.jpg")}alt="image not found"/>
                    </div>
                    <div className="locations-desc">
                        <h2>Locations</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta?
                            lorem
                            <br />
                            Lorem ipsum dolor sit amet.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nostrum.
                        </p>
                    </div>
                </div>
            
        </div>
     );
}
 
export default Services;