import { graphql } from "msw";
import { carsMockData } from "./carsMockData";

const carsLink = graphql.link(
  "https://fun-car-factory-server.vercel.app/graphql",
  // "http://localhost:4000/graphql"
);

export const handlers = [
  carsLink.query("GetCars", (req, res, ctx) => {
    return res(
      ctx.data({
        getCars: carsMockData,
      })
    );
  }),
  carsLink.query("MyCars", (req, res, ctx) => {
    return res(
      ctx.data({
        myCars: carsMockData,
      })
    );
  }),

  carsLink.query("GetCar", (req, res, ctx) => {
    const { id } = req.variables;
    const car = carsMockData.find((car) => car.id === id);
    return res(
      ctx.data({
        getCar: car,
      })
    );
  }),
];
