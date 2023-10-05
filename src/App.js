// const heading = React.createElement(
//   "h1",
//   { id: "head" ,},
//   "Hello World from basic"
// );

import React, { lazy ,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contack";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Shimmer } from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
// import IndiaMart from "./Components/IndiaMart";

const IndiaMart = lazy(()=> import("./Components/IndiaMart"));

// const resOBJ = {
//   "info": {
//       "id": "24164",
//       "name": "Domino's Pizza",
//       "cloudinaryImageId": "hxoosforqtzk8vvtejiu",
//       "locality": "M M Ali Jauhar Marg",
//       "areaName": "New Friends Colony",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//           "Pizzas",
//           "Italian",
//           "Pastas",
//           "Desserts"
//       ],
//       "avgRating": 4.1,
//       "feeDetails": {
//           "restaurantId": "24164",
//           "fees": [
//               {
//                   "name": "BASE_DISTANCE",
//                   "fee": 3700
//               },
//               {
//                   "name": "BASE_TIME"
//               },
//               {
//                   "name": "ANCILLARY_SURGE_FEE"
//               }
//           ],
//           "totalFee": 3700
//       },
//       "parentId": "2456",
//       "avgRatingString": "4.1",
//       "totalRatingsString": "10K+",
//       "sla": {
//           "deliveryTime": 25,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25 mins",
//           "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//           "nextCloseTime": "2023-08-21 03:00:00",
//           "opened": true
//       },
//       "badges": {},
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//           "entityBadges": {
//               "imageBased": {},
//               "textBased": {},
//               "textExtendedBadges": {}
//           }
//       },
//       "aggregatedDiscountInfoV3": {
//           "header": "₹150 OFF",
//           "subHeader": "ABOVE ₹999",
//           "discountTag": "FLAT DEAL"
//       },
//       "orderabilityCommunication": {
//           "title": {},
//           "subTitle": {},
//           "message": {},
//           "customIcon": {}
//       },
//       "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {},
//               "video": {}
//           }
//       },
//       "reviewsSummary": {},
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {}
//   },
//   "analytics": {},
//   "cta": {
//       "link": "https://www.swiggy.com/restaurants/dominos-pizza-m-m-ali-jauhar-marg-new-friends-colony-delhi-24164",
//       "type": "WEBLINK"
//   }
// };

const AppLayout = () => {

  const[useName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name:"Danish Saifi"
    } 
    setUserName(data.name)
  },[])
  return (
    // <Hello/>
    <>
    {/* TO update the value of our context we need to pass a function bind with its state */}
      <UserContext.Provider value={{loggedInUser:useName , setUserName}}>
        <Header />
        {/* <Body /> */}
        <Outlet/>
      </UserContext.Provider>
    </>
    // <h1>Hello</h1>
  );
};

const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/Home",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/IndiaMart",
        element: <Suspense fallback={<Shimmer/>}>
              <IndiaMart />
            </Suspense>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ],

    errorElement: <Error />,
  },

  // Without Childer to make the header intact we are using children and outlet
  // {
  //   path: "/Home",
  //   element: <Home />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/About",
  //   element: <About />,
  // },
  // {
  // }
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// reactRoot.render(heading);
reactRoot.render(<RouterProvider router={appRoter} />);
