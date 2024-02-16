import http from "../http-common";

class TutorialDataService {
  creatAccount() {
    return http.get("/signup");
  }  
}

export default new TutorialDataService();
