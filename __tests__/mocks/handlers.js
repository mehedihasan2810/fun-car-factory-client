import { graphql } from "msw";
import { carsMockData } from "./carsMockData";

// Mock Data
// export const posts = [
//   {
//     userId: 1,
//     id: 1,
//     title: "first post title",
//     body: "first post body",
//   },
//   {
//     userId: 2,
//     id: 5,
//     title: "second post title",
//     body: "second post body",
//   },
//   {
//     userId: 3,
//     id: 6,
//     title: "third post title",
//     body: "third post body",
//   },
// ];

// export const carsMockData2 = [
//   {
//     id: "64671bf3e81294b16783e451",
//     name: "TaTa super bus",
//     url: "https://images.pexels.com/photos/163836/vw-bulli-meadow-peace-163836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     sellerName: "mehedi",
//     email: "mehedimiah47@gmail.com",
//     category: "Bus",
//     price: 12,
//     rating: 5,
//     quantity: 8,
//     description: "this is tata super bus",
//   },
//   {
//     id: "64671a8fe81294b16783e44d",
//     name: "Ferrari 2021",
//     url: "https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     sellerName: "mehedi",
//     email: "mehedimiah47@gmail.com",
//     category: "ferrari",
//     price: 12,
//     rating: 5,
//     quantity: 8,
//     description: "this is ferrari 2021",
//   },
//   {
//     id: "646764f64e03bee6bd417725",
//     name: "Volbo bus",
//     url: "https://images.pexels.com/photos/2320208/pexels-photo-2320208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     sellerName: "rahim mia",
//     email: "jolome5780@sunetoa.com",
//     category: "bus",
//     price: 35,
//     rating: 3,
//     quantity: 10,
//     description: "this is a nice bus",
//   },
// ];

const carsLink = graphql.link(
  "https://fun-car-factory-server.vercel.app/graphql"
);
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  //   rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
  //     return res(ctx.status(200), ctx.json(posts));
  //   }),

  carsLink.query("GetCars", (req, res, ctx) => {
    return res(
      ctx.data({
        getCars: carsMockData,
      })
    );
  }),
];
