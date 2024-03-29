import * as HTTPStatus from 'http-status';
export class Helpers {

  public ResponsedCode = {
    /* Token errors */
    INVALID_TOKEN: '-001',
    NULL_TOKEN: '-002',
    /* Login, signup, user error */
    WRONG_LOGIN_INFO: '-101',
    PASSWORD_NOT_MATCH: '-102',
    USERNAME_EXISTED: '-103',
    ACTIVATE_FAIL: '-104',
    CHANGE_PASSWORD_FAIL: '-105',
    EDIT_PERSONAL_FAIL: '-106',
    EDIT_COMPANY_FAIL: '-107',
    PASSWORD_RECOVERY_FAIL: '-108',

    //Get Fail
    GET_DATA_FAIL: '-200',
    /* DB error... */
    SAVE_TOKEN_FAIL: '-201',
    // Missing ID params
    ERROR_ID: '-202',
    // Interact Data Fail
    INTERACT_DATA_FAIL: '-203',
    // Create Data Fail
    CREATE_DATA_FAIL: '-204',
    // Missing body field or params
    MISSING_FIELD_OR_PARAMS: '-205',



    /* Mailing error */
    SEND_MAIL_FAIL: '-301',
    /* OK */
    LOGIN_SUCCESS: '101',
    SIGNUP_SUCCESS: '102',
    ACTIVATE_SUCCESS: '104',
    CHANGE_PASSWORD_SUCCESS: '105',
    EDIT_PERSONAL_SUCCESS: '106',
    EDIT_COMPANY_SUCCESS: '107',
    PASSWORD_RECOVERY_SUCCESS: '108',
    GET_DATA_SUCCESS: '200',
    CREATED_DATA_SUCCESS: '201',
    INTERACT_DATA_SUCCESS: '202',
    SEND_MAIL_SUCCESS: '301',
  };
  public static mapCodeToHTTPStatus = {
    '-001': HTTPStatus.UNAUTHORIZED,
    '-002': HTTPStatus.UNAUTHORIZED,
    '-101': HTTPStatus.OK,
    '-102': HTTPStatus.OK,
    '-103': HTTPStatus.OK,

    '-104': HTTPStatus.OK,
    '-105': HTTPStatus.OK,
    '-106': HTTPStatus.INTERNAL_SERVER_ERROR,
    '-107': HTTPStatus.INTERNAL_SERVER_ERROR,
    '-108': HTTPStatus.OK,
    '-200': HTTPStatus.BAD_REQUEST,
    '-201': HTTPStatus.INTERNAL_SERVER_ERROR,
    '-202': HTTPStatus.INTERNAL_SERVER_ERROR,

    '-203': HTTPStatus.BAD_REQUEST,
    '-204': HTTPStatus.BAD_REQUEST,
    '-205': HTTPStatus.BAD_REQUEST,


    '-301': HTTPStatus.BAD_REQUEST,
    '101': HTTPStatus.OK,
    '102': HTTPStatus.OK,
    '104': HTTPStatus.OK,
    '105': HTTPStatus.OK,
    '106': HTTPStatus.OK,
    '107': HTTPStatus.OK,
    '108': HTTPStatus.OK,
    '301': HTTPStatus.OK,
    '200': HTTPStatus.OK,
    '201': HTTPStatus.OK,
    '202': HTTPStatus.OK,


  }
  public static mapCodeToMsg = {
    /* Token error messages */
    '-001': 'Invalid token, session timeout. Please login again!',
    '-002': 'No token received, cannot authenticate. Please login!',
    /* Login, signup error messages */
    '-101': 'Wrong email or password',
    '-102': 'Confirmed password does not match',
    '-103': 'Email is already used',
    '-104': 'Avtivation token does not match!',
    '-105': 'Old password does not match',
    '-106': 'Cannot edit personal information!',
    '-107': `Cannot edit company's information!`,
    '-108': 'Cannot create a new password!',
    /* DB interaction error messages */
    '-200': 'Cannot Get Data. It can be caused from your connection database!',
    '-201': 'Cannot renew token, please try logging in again!',
    '-202': 'Cannot find data by an required Id, please check your Id field in body!',
    '-203': 'Cannot interact data, please check your required fields in body!',
    '-204': 'Cannot create data, please check your field in body!',
    '-205': 'Please check your body field or params. We cannot find it or cannot accept your field',

    /* Nodemailer error messages */
    '-301': 'Sending email failed',

    '-401': 'Get Data Fail',
    /* OK message */
    '101': "Logged in",
    '102': "Signed up",
    '200': "Get Data successs",
    '201': "Create Data successs",
    '202': "Interact Data successs",

    '104': "Activation success, you can now login to your account",
    '105': "Password changed! Please relogin with your new password!",
    '106': "Personal information changed!",
    '107': "Company's information changed",
    '108': 'New password sent via mail!',
    '301': "Mail sent",



  }
  public static response(res, definedCode, data = null, subData = null) {
    if (data === null) {
      res.status(this.mapCodeToHTTPStatus[definedCode]).json({
        code: definedCode,
        message: this.mapCodeToMsg[definedCode],
      })
    }
    else {
      res.status(this.mapCodeToHTTPStatus[definedCode]).json({
        data,
        ...subData,
        code: definedCode,
        message: this.mapCodeToMsg[definedCode],
      })
    }
  };
}




