import { createStore } from 'vuex'

/**
 * import modules
 */
import modal from "./modules/modal";
import user from "./modules/user";
import login from "./modules/login";

export default createStore({
  modules: {
    modal,
    login,
    user
  }
})


