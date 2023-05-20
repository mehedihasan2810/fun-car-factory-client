import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaStar } from "react-icons/fa";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthProvider";
const Category = () => {
  const [allToys, setAllToys] = useState(null);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = () => {
      fetch("https://fun-car-factory-server.vercel.app/all-toys", {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setAllToys(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section data-aos="fade-up" className="category-container">
      <h2 className="category-title">Category</h2>
      <Tabs>
        <TabList>
          <Tab>Truck</Tab>
          <Tab>Ferrari</Tab>
          <Tab>Bus</Tab>
        </TabList>

        <TabPanel>
          <div className="grid">
            {allToys &&
              allToys.map((toy) => {
                if (toy.category.toLowerCase() === "truck") {
                  return (
                    <div key={toy._id} className="card">
                      <img src={toy.url} alt="" />
                      <div className="card-body">
                        <div className="name-price">
                          <h4>{toy.name}</h4>
                          <p>{toy.price}$</p>
                        </div>
                        <div className="ratings">
                          <div>
                            <p className="star">
                              {" "}
                              <FaStar />
                            </p>
                            {toy.rating}/5(100)
                          </div>
                          <Link to={`/toy-details/${toy._id}`}>
                            <button
                              onClick={() => {
                                if (currentUser) return;
                                // *show toast
                                toast.warn(
                                  "You have to log in first to view details!",
                                  {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 2000,
                                  }
                                );
                              }}
                              className="btn-primary"
                            >
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid">
            {allToys &&
              allToys.map((toy) => {
                if (toy.category.toLowerCase() === "ferrari") {
                  return (
                    <div key={toy._id} className="card">
                      <img src={toy.url} alt="" />
                      <div className="card-body">
                        <div className="name-price">
                          <h4>{toy.name}</h4>
                          <p>{toy.price}$</p>
                        </div>
                        <div className="ratings">
                          <div>
                            <p className="star">
                              {" "}
                              <FaStar />
                            </p>
                            {toy.rating}/5(100)
                          </div>
                          <Link to={`/toy-details/${toy._id}`}>
                            <button
                              onClick={() => {
                                if (currentUser) return;
                                // *show toast
                                toast.warn(
                                  "You have to log in first to view details!",
                                  {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 2000,
                                  }
                                );
                              }}
                              className="btn-primary"
                            >
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid">
            {allToys &&
              allToys.map((toy) => {
                if (toy.category.toLowerCase() === "bus") {
                  return (
                    <div key={toy._id} className="card">
                      <img src={toy.url} alt="" />
                      <div className="card-body">
                        <div className="name-price">
                          <h4>{toy.name}</h4>
                          <p>{toy.price}$</p>
                        </div>
                        <div className="ratings">
                          <div>
                            <p className="star">
                              {" "}
                              <FaStar />
                            </p>
                            {toy.rating}/5(100)
                          </div>
                          <Link to={`/toy-details/${toy._id}`}>
                            <button
                              onClick={() => {
                                if (currentUser) return;
                                // *show toast
                                toast.warn(
                                  "You have to log in first to view details!",
                                  {
                                    position: toast.POSITION.TOP_CENTER,
                                    autoClose: 2000,
                                  }
                                );
                              }}
                              className="btn-primary"
                            >
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Category;
