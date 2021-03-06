import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import AuthModalReducer from "./auth_modal_reducer";
import UploadModalReducer from "./upload_modal_reducer";
import HomeUserGallery from "./home_user_gallery_reducer";
import LandingGalleryReducer from "./landing_gallery_reducer";
import ImageViewSelectionReducer from "./image_view_selection_reducer";
import HomeUserProfileReducer from "./home_user_profile_reducer";

const RootReducer = combineReducers({
  Session: SessionReducer,
  AuthModal: AuthModalReducer,
  UploadModal: UploadModalReducer,
  HomeUserGallery: HomeUserGallery,
  LandingGallery: LandingGalleryReducer,
  ImageSelection: ImageViewSelectionReducer,
  HomeUserProfile: HomeUserProfileReducer
});

export default RootReducer;
