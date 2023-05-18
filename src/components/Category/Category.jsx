import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaStar } from "react-icons/fa";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
const Category = () => {
  return (
    <section className="category-container">
      <h2 className="category-title">Category</h2>
      <Tabs>
        <TabList>
          <Tab>Truck</Tab>
          <Tab>Ferrari</Tab>
          <Tab>BMW</Tab>
        </TabList>

        <TabPanel>
          <div className="grid">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.pexels.com/photos/760979/pexels-photo-760979.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="card-body">
                <div className="name-price">
                  <h4>Tesla Super Truck</h4>
                  <p>20$</p>
                </div>
                <div className="ratings">
                  <p>
                    {" "}
                    <p className="star">
                      {" "}
                      <FaStar />
                    </p>
                    4/5(100)
                  </p>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Category;
