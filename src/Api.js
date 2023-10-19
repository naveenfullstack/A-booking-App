const Domain = process.env.REACT_APP_DOMAIN
const requests = {

  //Headers
  key : process.env.REACT_APP_API_KEY,
  authantication : process.env.REACT_APP_AUTHANTICATION,

  //API Urls
  Domain : process.env.REACT_APP_DOMAIN,
  ForgetPassword : `${Domain}/mediax/auth/forgotpassword`,
  login : `${Domain}/booking/auth/login`,
  signup : `${Domain}/booking/auth/signup`,
  GetIp : `${Domain}/booking/auth/get-ip-details`,
  googleAuth : `${Domain}/booking/auth/thirdparty/signup/google`,
  checkUSer : `${Domain}/booking/auth/checkuser`
};

export default requests;