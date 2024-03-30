import {
  AcnePage,
  AllProductsPage,
  AntiUlcerPage,
  ArthritisPage,
  BloodPressurePage,
  BloodSugarPage,
  CholesterolPage,
  ContactPage,
  CurvesEnchanersPage,
  DetoxPage,
  EyeCarePage,
  FertilityBoosterPage,
  FibriodPage,
  HerbalPowderPage,
  Homepage,
  ImmuneBoosterPage,
  NutraceuticalPage,
  RespiratoryCarePage,
  SearchAllProductPage,
  ServiceAutoPage,
  ServiceDogPage,
  ServiceFabricsPage,
  ServiceFashionPage,
  ServiceFoodStuffPage,
  ServiceInteriorPage,
  ServiceJewelryPage,
  ServiceLaundryPage,
  ServiceLogisticsPage,
  ServiceSuperStorePage,
  ServiceTomatoesFarmPage,
  ServiceUnisexPage,
  ServicesBitcoinPage,
  ServicesBuildingPage,
  ServicesPage,
  ServicesSolarPage,
  SexualWellnessPage,
  StubbornDiseasesPage,
  WeightManagementPage,
} from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const RoutesE = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/allproducts",
      element: <AllProductsPage />,
    },
    {
      path: "/search_product",
      element: <SearchAllProductPage />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/immune_booster",
      element: <ImmuneBoosterPage />,
    },
    {
      path: "/nutraceuticals",
      element: <NutraceuticalPage />,
    },
    {
      path: "/herbal_powder",
      element: <HerbalPowderPage />,
    },
    {
      path: "/fertility_boosters",
      element: <FertilityBoosterPage />,
    },
    {
      path: "/fibriods",
      element: <FibriodPage />,
    },
    {
      path: "/weight_management",
      element: <WeightManagementPage />,
    },
    {
      path: "/curves_enhancers",
      element: <CurvesEnchanersPage />,
    },
    {
      path: "/sexual_wellness",
      element: <SexualWellnessPage />,
    },
    {
      path: "/acne",
      element: <AcnePage />,
    },
    {
      path: "/arthritis",
      element: <ArthritisPage />,
    },
    {
      path: "/blood_pressure",
      element: <BloodPressurePage />,
    },
    {
      path: "/blood_sugar",
      element: <BloodSugarPage />,
    },
    {
      path: "/cholesterol",
      element: <CholesterolPage />,
    },
    {
      path: "/detox",
      element: <DetoxPage />,
    },
    {
      path: "/respiratory_care",
      element: <RespiratoryCarePage />,
    },
    {
      path: "/anti_ulcer",
      element: <AntiUlcerPage />,
    },
    {
      path: "/stubborn_diseases",
      element: <StubbornDiseasesPage />,
    },
    {
      path: "/eye_care",
      element: <EyeCarePage />,
    },
    {
      path: "/services/building-material",
      element: <ServicesBuildingPage />,
    },
    {
      path: "/services/auto-dealer",
      element: <ServiceAutoPage />,
    },
    {
      path: "/services/bitcoin-trade",
      element: <ServicesBitcoinPage />,
    },
    {
      path: "/services/dog-import",
      element: <ServiceDogPage />,
    },
    {
      path: "/services/fabrics-import",
      element: <ServiceFabricsPage />,
    },
    {
      path: "/services/fashion",
      element: <ServiceFashionPage />,
    },
    {
      path: "/services/foodstuff",
      element: <ServiceFoodStuffPage />,
    },
    {
      path: "/services/interior-decoration",
      element: <ServiceInteriorPage />,
    },
    {
      path: "/services/jewelry",
      element: <ServiceJewelryPage />,
    },
    {
      path: "/services/laundry",
      element: <ServiceLaundryPage />,
    },
    {
      path: "/services/logistics",
      element: <ServiceLogisticsPage />,
    },
    {
      path: "/services/unisex-salon",
      element: <ServiceUnisexPage />,
    },
    {
      path: "/services/solar",
      element: <ServicesSolarPage />,
    },
    {
      path: "/services/super-store",
      element: <ServiceSuperStorePage />,
    },
    {
      path: "/services/tomatoes-farm",
      element: <ServiceTomatoesFarmPage />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <RoutesE />
    </Router>
  );
};

export default AppWrapper;
