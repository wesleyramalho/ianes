let instance = null;

class RefreshTokenHandler {
  constructor() {

    //TODO: Check if is something stored on localStorage?
    if (!instance) {
      instance = this;
    }

    this.promise = null;
    this.isRefreshing = false;
    return instance;
  }

  getPromiseWithNewToken() {
    return this.promise;
  }

  getNewToken(config) {
    this.isRefreshing = true;
    this.promise = new Promise((resolve, reject) => {
      debugger;
      let token = "MY NEW TOKEN";
      setTimeout(() => resolve(token), 4000);

      // fetch("/refreshToken") //TODO: Change url and config object
      //   .then(token => {
      //     let configWithNewToken = {
      //       ...config,
      //       token
      //     };
      //     this.isRefreshing = false;
      //     resolve(configWithNewToken);
      //   })
      //   .catch(error => {
      //     //set time out
      //     // TODO: Decide what to do when failure
      //     //try to getNewTokenAgain??
      //     this.isRefreshing = false;
      //     reject(error);
      //   });
    });
  }
}

export default RefreshTokenHandler;
