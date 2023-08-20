// const heading = React.createElement(
//   "h1",
//   { id: "head" ,},
//   "Hello World from basic"
// );

import React from "react";
import  ReactDOM  from "react-dom/client";


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



const dataOBJ = [
  {
      "info": {
          "id": "253716",
          "name": "McDonald's",
          "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
          "locality": "M M Ali Jauhar Marg",
          "areaName": "New Friends Colony",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "American"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "253716",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "630",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-m-m-ali-jauhar-marg-new-friends-colony-delhi-253716",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "24164",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "hxoosforqtzk8vvtejiu",
          "locality": "M M Ali Jauhar Marg",
          "areaName": "New Friends Colony",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "24164",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "2456",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 25,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹999",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-m-m-ali-jauhar-marg-new-friends-colony-delhi-24164",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "53788",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Chitranjan park Road",
          "areaName": "Kalkaji",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 3.8,
          "feeDetails": {
              "restaurantId": "53788",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "721",
          "avgRatingString": "3.8",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-chitranjan-park-road-kalkaji-delhi-53788",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "26721",
          "name": "KFC",
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "locality": "Epicuria Food Mall",
          "areaName": "Nehru Place",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
          ],
          "avgRating": 4,
          "feeDetails": {
              "restaurantId": "26721",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5000
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5000
          },
          "parentId": "547",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-epicuria-food-mall-nehru-place-delhi-26721",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "5926",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Epicuria Food Mall",
          "areaName": "Nehru Place",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "5926",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4500
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4500
          },
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 01:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-epicuria-food-mall-nehru-place-delhi-5926",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "339083",
          "name": "Layla's Shawarma & Middle Eastern Kitchen",
          "cloudinaryImageId": "qrp0bfgrkm27qcbvvv3j",
          "locality": "Punjabi Mohalla",
          "areaName": "Greater Kailash 1",
          "costForTwo": "₹900 for two",
          "cuisines": [
              "Middle Eastern"
          ],
          "avgRating": 4.4,
          "feeDetails": {
              "restaurantId": "339083",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 6100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 6100
          },
          "parentId": "124062",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 00:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/laylas-shawarma-and-middle-eastern-kitchen-punjabi-mohalla-greater-kailash-1-delhi-339083",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "508723",
          "name": "EatFit",
          "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
          "locality": "2nd Phase",
          "areaName": "Okhla",
          "costForTwo": "₹270 for two",
          "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "508723",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "76139",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/eatfit-2nd-phase-okhla-delhi-508723",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "250900",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "Lajpat Nagar",
          "areaName": "Amar Colony",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Fast Food",
              "Salads",
              "Beverages"
          ],
          "avgRating": 3.8,
          "feeDetails": {
              "restaurantId": "250900",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "2",
          "avgRatingString": "3.8",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 04:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-lajpat-nagar-amar-colony-delhi-250900",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "15844",
          "name": "Faasos - Wraps & Rolls",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "Jagdamba Road",
          "areaName": "Kalkaji",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "North Indian",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
              "restaurantId": "15844",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 6100
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 6100
          },
          "parentId": "21809",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 03:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-jagdamba-road-kalkaji-delhi-15844",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "63002",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "v2z4zcon24k4lvffzdjz",
          "locality": "Pocket D & E Sarita Vihar",
          "areaName": "Sarita Vihar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "63002",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 6900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 6900
          },
          "parentId": "4925",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 7.4,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "7.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-pocket-d-and-e-sarita-vihar-delhi-63002",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "172777",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
          "locality": "Chitranjan park Road",
          "areaName": "Chittaranjan Park",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
              "restaurantId": "172777",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "6249",
          "avgRatingString": "4.6",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 5.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "5.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "EVERY ITEM",
              "subHeader": "@ ₹159",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-chitranjan-park-road-chittaranjan-park-delhi-172777",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "353992",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "v8qqk7k8x2idlhfpj1ab",
          "locality": "M M Ali Jauhar Marg",
          "areaName": "New Friends Colony",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4,
          "feeDetails": {
              "restaurantId": "353992",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 3700
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 3700
          },
          "parentId": "4961",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-m-m-ali-jauhar-marg-new-friends-colony-delhi-353992",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "316220",
          "name": "Ambersar by Enoki",
          "cloudinaryImageId": "tn3thspzfagkajcvded0",
          "locality": "Ishwar Nagar",
          "areaName": "New Friends Colony",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Kebabs",
              "North Indian",
              "Mughlai"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "316220",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4200
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4200
          },
          "parentId": "12136",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/ambersar-by-enoki-ishwar-nagar-new-friends-colony-delhi-316220",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "67192",
          "name": "Dashi - Dimsum & Sushi Bar",
          "cloudinaryImageId": "fkusbbr1xiyw4ram47a2",
          "locality": "Sarai Jullena",
          "areaName": "New Friends Colony",
          "costForTwo": "₹1000 for two",
          "cuisines": [
              "Japanese"
          ],
          "avgRating": 4.5,
          "feeDetails": {
              "restaurantId": "67192",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4200
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4200
          },
          "parentId": "262021",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:15:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/dashi-dimsum-and-sushi-bar-sarai-jullena-new-friends-colony-delhi-67192",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "393177",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "eadrb2ksmvhk1dr2bnht",
          "locality": "G Block",
          "areaName": "Kalkaji",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "393177",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "2233",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "33 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-21 04:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-g-block-kalkaji-delhi-393177",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "96044",
          "name": "Theobroma",
          "cloudinaryImageId": "kkp7zv2u2zwelpraybin",
          "locality": "M Block",
          "areaName": "Greater Kailash 2",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Bakery",
              "Desserts"
          ],
          "avgRating": 4.5,
          "feeDetails": {
              "restaurantId": "96044",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 7400
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 7400
          },
          "parentId": "1040",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "31 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-m-block-greater-kailash-2-delhi-96044",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "212953",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "wevotjalonteb0jwuvgm",
          "locality": "Masjid Moth Road",
          "areaName": "Masjid Moth",
          "costForTwo": "₹100 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
              "restaurantId": "212953",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 8400
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 8400
          },
          "parentId": "582",
          "avgRatingString": "4.0",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 8.1,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "8.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-road-masjid-moth-delhi-212953",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "303268",
          "name": "Barbeque Nation",
          "cloudinaryImageId": "ceaalcjtwzhvn8y1aszf",
          "locality": "New Friends Colony",
          "areaName": "New Friends Colony",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "North Indian",
              "Barbecue",
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Desserts"
          ],
          "avgRating": 3.6,
          "feeDetails": {
              "restaurantId": "303268",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 4200
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 4200
          },
          "parentId": "2438",
          "avgRatingString": "3.6",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/barbeque-nation-new-friends-colony-delhi-303268",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "420722",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
          "locality": "H Block",
          "areaName": "Kalkaji",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Fast Food",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
          ],
          "avgRating": 4.5,
          "feeDetails": {
              "restaurantId": "420722",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 5300
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 5300
          },
          "parentId": "281782",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-h-block-kalkaji-delhi-420722",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "156105",
          "name": "The Good Bowl",
          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
          "locality": "LSC DDA",
          "areaName": "Sarita Vihar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.2,
          "feeDetails": {
              "restaurantId": "156105",
              "fees": [
                  {
                      "name": "BASE_DISTANCE",
                      "fee": 6900
                  },
                  {
                      "name": "BASE_TIME"
                  },
                  {
                      "name": "ANCILLARY_SURGE_FEE"
                  }
              ],
              "totalFee": 6900
          },
          "parentId": "7918",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 7.4,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "7.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2023-08-20 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-lsc-dda-sarita-vihar-delhi-156105",
          "type": "WEBLINK"
      }
  }
];




const Body = ()=>{
  return (
    <div className="body">

      <div className="search">Search</div>
      <div className="res-container"> 
      
      {dataOBJ.map((data)=>{
        return <RestaurantCard resData={data}/>
      })};
      
      </div>
        
    </div>
  )
}

const RestaurantCard=(params)=>{
  console.log(params.resData.info);
  return (
    <div className="res_card">
        <img className="res_image" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + params.resData.info.cloudinaryImageId}/>
        <div className="description">
        <h3>{params.resData.info.name}</h3>
        <h4>{params.resData.info.cuisines.join(", ")}</h4>
        <p>Ratings : {params.resData.info.avgRating}⭐</p>
        </div>
    </div>
  )
}


const Header = ()=>{
  return (
    <div className="headContainer">
      <div className="logo-container">
        <img  className="logo" src = "https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo-thumbnail.jpg"/>
      </div>
      <div className="nav-items">
        <ul className="li-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li className="cart">Cart</li>
        </ul>
      </div>
    </div>
  )
}


  const AppLayout = ()=>{
    return (
      // <Hello/>
      <>
        <Header/>
        <Body/>
      </>
      // <h1>Hello</h1>
    )
  }


  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
  
  // reactRoot.render(heading);
  reactRoot.render(<AppLayout/>);
