import { combineReducers } from "redux";
import { assetReducer } from "./asset.reducer";
import { bannerReducer } from "./banner.reducer";
import { homeReducer } from "./home.reducer";
import { serviceReducer } from "./service.reducer";
import { newsReducer } from "./news.reducer";

const rootReducer = combineReducers({
  asset: assetReducer,
  banner: bannerReducer,
  home: homeReducer,
  service: serviceReducer,
  news: newsReducer,
});

export default rootReducer;
