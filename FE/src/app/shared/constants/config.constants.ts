export const ITEMS_PER_PAGE = 40;
export const CONFIG = {
  PAGE_INDEX: 1,
  PAGE_SIZE: 40,
  ExpirationDate: 30,
  TimeoutLocalStorage: 8, //hours
  TimeRefreshToken: 1, // minutes
  permissions: {
    /**
     * @description DASHBOARD is parent
     */
    DASHBOARD: {
      NAME: 'DASHBOARD',
      R: 'DASHBOARD_R',
    },
    VISITOR_LOG: {
      NAME: 'VISITOR_LOG',
      C: 'VISITOR_LOG_C',
      R: 'VISITOR_LOG_R',
      U: 'VISITOR_LOG_U',
      D: 'VISITOR_LOG_D',
    },
    /**
     * @description CONFIGURATION is parent
     */
    CONFIGURATION: {
      NAME: 'CONFIGURATION',
      R: 'CONFIGURATION_R',
    },
    CHECK_IN_FLOW: {
      NAME: 'CHECK_IN_FLOW',
      C: 'CHECK_IN_FLOW_C',
      R: 'CHECK_IN_FLOW_R',
      U: 'CHECK_IN_FLOW_U',
      D: 'CHECK_IN_FLOW_D',
    },
    CHECK_OUT: {
      NAME: 'CHECK_OUT',
      C: 'CHECK_OUT_C',
      R: 'CHECK_OUT_R',
      U: 'CHECK_OUT_U',
      D: 'CHECK_OUT_D',
    },
    BRANDING_WELCOME_SCREEN: {
      NAME: 'BRANDING_WELCOME_SCREEN',
      C: 'BRANDING_WELCOME_SCREEN_C',
      R: 'BRANDING_WELCOME_SCREEN_R',
      U: 'BRANDING_WELCOME_SCREEN_U',
      D: 'BRANDING_WELCOME_SCREEN_D',
    },
    REGISTRATION: {
      NAME: 'REGISTRATION',
      C: 'REGISTRATION_C',
      R: 'REGISTRATION_R',
      U: 'REGISTRATION_U',
      D: 'REGISTRATION_D',
    },
    /**
     * @description ACCOUNT is parent
     */
    ACCOUNT: {
      NAME: 'ACCOUNT',
      R: 'ACCOUNT_R',
    },
    ACCOUNT_MANAGEMENT: {
      NAME: 'ACCOUNT_MANAGEMENT',
      C: 'ACCOUNT_MANAGEMENT_C',
      R: 'ACCOUNT_MANAGEMENT_R',
      U: 'ACCOUNT_MANAGEMENT_U',
      D: 'ACCOUNT_MANAGEMENT_D',
    },
    COMPANY_CONFIG: {
      NAME: 'COMPANY_CONFIG',
      C: 'COMPANY_CONFIG_C',
      R: 'COMPANY_CONFIG_R',
      U: 'COMPANY_CONFIG_U',
      D: 'COMPANY_CONFIG_D',
    },
    BRANCH_MANAGEMENT: {
      NAME: 'BRANCH_MANAGEMENT',
      C: 'BRANCH_MANAGEMENT_C',
      R: 'BRANCH_MANAGEMENT_R',
      U: 'BRANCH_MANAGEMENT_U',
      D: 'BRANCH_MANAGEMENT_D',
    },
    DEVICE_MANAGEMENT: {
      NAME: 'DEVICE_MANAGEMENT',
      C: 'DEVICE_MANAGEMENT_C',
      R: 'DEVICE_MANAGEMENT_R',
      U: 'DEVICE_MANAGEMENT_U',
      D: 'DEVICE_MANAGEMENT_D',
    },
    EMPLOYEE_MANAGEMENT: {
      NAME: 'EMPLOYEE_MANAGEMENT',
      C: 'EMPLOYEE_MANAGEMENT_C',
      R: 'EMPLOYEE_MANAGEMENT_R',
      U: 'EMPLOYEE_MANAGEMENT_U',
      D: 'EMPLOYEE_MANAGEMENT_D',
    },
  },
  COLORS: ['#276beb', '#49a134', '#a7872b', '#de5858'],
  Gender: [
    {
      id: 1,
      name: 'female',
      label: 'female',
    },
    {
      id: 2,
      name: 'male',
      label: 'male',
    },
    {
      id: 3,
      name: 'other',
      label: 'other',
    },
  ],
  GENDER_LIST: [
    {
      id: 0,
      displayName: 'gender.male'
    },
    {
      id: 1,
      displayName: 'gender.female'
    },
    {
      id: 2,
      displayName: 'gender.other'
    }
  ],
  VISITOR_CLASS: [
    {
      id: 'normal',
      displayName: 'visitor.class.normal'
    },
    {
      id: 'vip',
      displayName: 'visitor.class.vip'
    }
  ],
  PARAMETER_EMAIL: ['user_name', 'first_name', 'user_email', 'active_link'],
  PARAMETER_VISITOR: [
    'branch_name',
    'company_name',
    'contact_person',
    'feedback',
    'from_company',
    'purpose',
    'ratting',
    'visitor_name',
    'visitor_phone_number',
    'visitor_type',
  ],
  PAGINATION: [
    {
      label: '10',
      value: 10,
    },
    {
      label: '20',
      value: 20,
    },
    {
      label: '30',
      value: 30,
    },
    {
      label: '40',
      value: 40,
    },
    {
      label: '50',
      value: 50,
    },
  ],
  minDate: {
    year: 1950,
    month: 1,
    day: 1,
  },
  maxDate: {
    year: 2050,
    month: 1,
    day: 1,
  },
  datetimeFormat: 'DD/MM/YYYY HH:mm',
  dateFormat: 'DD/MM/YYYY',
  serverDateFormat: 'DD/MM/YYYY',
  monthFormat: 'MM/YYYY',
  dateFormatTime: [
    { id: 0, key: 'DD-MM-YYYY' },
    { id: 1, key: 'MM-DD-YYYY' },
    { id: 2, key: 'YYYY-MM-DD' },
    { id: 3, key: 'YYYY-DD-MM' },
  ],
  customerTypes: [
    {
      id: 0,
      key: 'clientManagement.customerType.notAccounting',
    },
    {
      id: 1,
      key: 'clientManagement.customerType.accounting',
    },
  ],
  TYPE_SENT_REPORT: [
    {
      id: 0,
      key: 'DAILY'
    },
    {
      id: 1,
      key: 'MONTHLY'
    }
  ],
  roles: [
    {
      id: 1,
      key: 'accountManagement.roleAdmin',
    },
    {
      id: 2,
      key: 'accountManagement.rolePrinter',
    },
    {
      id: 3,
      key: 'accountManagement.roleAccounting',
    },
  ],
  Minutes: [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
    { id: '21' },
    { id: '22' },
    { id: '23' },
    { id: '24' },
    { id: '25' },
    { id: '26' },
    { id: '27' },
    { id: '28' },
    { id: '29' },
    { id: '30' },
    { id: '31' },
    { id: '32' },
    { id: '33' },
    { id: '34' },
    { id: '35' },
    { id: '36' },
    { id: '37' },
    { id: '38' },
    { id: '39' },
    { id: '40' },
    { id: '41' },
    { id: '42' },
    { id: '43' },
    { id: '44' },
    { id: '45' },
    { id: '46' },
    { id: '47' },
    { id: '48' },
    { id: '49' },
    { id: '50' },
    { id: '51' },
    { id: '52' },
    { id: '53' },
    { id: '54' },
    { id: '55' },
    { id: '56' },
    { id: '57' },
    { id: '58' },
    { id: '59' }
  ],
  Hours: [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
    { id: '21' },
    { id: '22' },
    { id: '23' }
  ],
  Weeks: [
    { id: '1', name: 'quarzt.Sunday', value: 'Chủ nhật' },
    { id: '2', name: 'quarzt.Monday', value: 'Thứ hai' },
    { id: '3', name: 'quarzt.Tuesday', value: 'Thứ ba' },
    { id: '4', name: 'quarzt.Wednesday', value: 'Thứ tư' },
    { id: '5', name: 'quarzt.Thursday', value: 'Thứ năm' },
    { id: '6', name: 'quarzt.Friday', value: 'Thứ sáu' },
    { id: '7', name: 'quarzt.Saturday', value: 'Thứ bảy' },
  ],
  DayinMonth: [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: '5', name: '5' },
    { id: '6', name: '6' },
    { id: '7', name: '7' },
    { id: '8', name: '8' },
    { id: '9', name: '9' },
    { id: '10', name: '10' },
    { id: '11', name: '11' },
    { id: '12', name: '12' },
    { id: '13', name: '13' },
    { id: '14', name: '14' },
    { id: '15', name: '15' },
    { id: '16', name: '16' },
    { id: '17', name: '17' },
    { id: '18', name: '18' },
    { id: '19', name: '19' },
    { id: '20', name: '20' },
    { id: '21', name: '21' },
    { id: '22', name: '22' },
    { id: '23', name: '23' },
    { id: '24', name: '24' },
    { id: '25', name: '25' },
    { id: '26', name: '26' },
    { id: '27', name: '27' },
    { id: '28', name: '28' },
    { id: '29', name: '29' },
    { id: '30', name: '30' },
    { id: '31', name: '31' },
  ],
  Months: [
    { id: '1', name: 'January' },
    { id: '2', name: 'February' },
    { id: '3', name: 'March' },
    { id: '4', name: 'April' },
    { id: '5', name: 'May' },
    { id: '6', name: 'June' },
    { id: '7', name: 'July' },
    { id: '8', name: 'August' },
    { id: '9', name: 'September' },
    { id: '10', name: 'october' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' },
  ],

  VIETNAM_CITY: [
    {
      code: "SG",
      name: "Hồ Chí Minh",
      district: [
        {
          name: "Bình Chánh",
          pre: "Huyện",
          ward: [
            {
              name: "An Phú Tây",
              pre: "Xã"
            },
            {
              name: "Bình Chánh",
              pre: "Xã"
            },
            {
              name: "Bình Hưng",
              pre: "Xã"
            },
            {
              name: "Bình Lợi",
              pre: "Xã"
            },
            {
              name: "Đa Phước",
              pre: "Xã"
            },
            {
              name: "Hưng Long",
              pre: "Xã"
            },
            {
              name: "Lê Minh Xuân",
              pre: "Xã"
            },
            {
              name: "Phạm Văn Hai",
              pre: "Xã"
            },
            {
              name: "Phong Phú",
              pre: "Xã"
            },
            {
              name: "Quy Đức",
              pre: "Xã"
            },
            {
              name: "Tân Kiên",
              pre: "Xã"
            },
            {
              name: "Tân Nhựt",
              pre: "Xã"
            },
            {
              name: "Tân Quý Tây",
              pre: "Xã"
            },
            {
              name: "Tân Túc",
              pre: "Thị trấn"
            },
            {
              name: "Vĩnh Lộc A",
              pre: "Xã"
            },
            {
              name: "Vĩnh Lộc B",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Bình Tân",
          pre: "Quận",
          ward: [
            {
              name: "An Lạc",
              pre: "Phường"
            },
            {
              name: "An Lạc A",
              pre: "Phường"
            },
            {
              name: "Bình Hưng Hòa",
              pre: "Phường"
            },
            {
              name: "Bình Hưng Hòa A",
              pre: "Phường"
            },
            {
              name: "Bình Hưng Hòa B",
              pre: "Phường"
            },
            {
              name: "Bình Trị Đông",
              pre: "Phường"
            },
            {
              name: "Bình Trị Đông A",
              pre: "Phường"
            },
            {
              name: "Bình Trị Đông B",
              pre: "Phường"
            },
            {
              name: "Tân Tạo",
              pre: "Phường"
            },
            {
              name: "Tân Tạo A",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Bình Thạnh",
          pre: "Quận",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "17",
              pre: "Phường"
            },
            {
              name: "19",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "21",
              pre: "Phường"
            },
            {
              name: "22",
              pre: "Phường"
            },
            {
              name: "24",
              pre: "Phường"
            },
            {
              name: "25",
              pre: "Phường"
            },
            {
              name: "26",
              pre: "Phường"
            },
            {
              name: "27",
              pre: "Phường"
            },
            {
              name: "28",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Cần Giờ",
          pre: "Huyện",
          ward: [
            {
              name: "An Thới Đông",
              pre: "Xã"
            },
            {
              name: "Bình Khánh",
              pre: "Xã"
            },
            {
              name: "Cần Thạnh ",
              pre: "Phường"
            },
            {
              name: "Long Hòa",
              pre: "Xã"
            },
            {
              name: "Lý Nhơn",
              pre: "Xã"
            },
            {
              name: "Tam Thôn Hiệp",
              pre: "Xã"
            },
            {
              name: "Thạnh An",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Củ Chi",
          pre: "Huyện",
          ward: [
            {
              name: "An Nhơn Tây",
              pre: "Xã"
            },
            {
              name: "An Phú",
              pre: "Xã"
            },
            {
              name: "An Phú Trung",
              pre: "Xã"
            },
            {
              name: "Bình Mỹ",
              pre: "Xã"
            },
            {
              name: "Củ Chi",
              pre: "Thị trấn"
            },
            {
              name: "Hòa Phú",
              pre: "Xã"
            },
            {
              name: "Nhuận Đức",
              pre: "Xã"
            },
            {
              name: "Phạm Văn Cội",
              pre: "Xã"
            },
            {
              name: "Phú Hòa Đông",
              pre: "Xã"
            },
            {
              name: "Phú Mỹ Hưng",
              pre: "Xã"
            },
            {
              name: "Phước Hiệp",
              pre: "Xã"
            },
            {
              name: "Phước Thạnh",
              pre: "Xã"
            },
            {
              name: "Phước Vĩnh An",
              pre: "Xã"
            },
            {
              name: "Tân An Hội",
              pre: "Xã"
            },
            {
              name: "Tân Phú Trung",
              pre: "Xã"
            },
            {
              name: "Tân Thạnh Đông",
              pre: "Xã"
            },
            {
              name: "Tân Thạnh Tây",
              pre: "Xã"
            },
            {
              name: "Tân Thông Hội",
              pre: "Xã"
            },
            {
              name: "Thái Mỹ",
              pre: "Xã"
            },
            {
              name: "Trung An",
              pre: "Xã"
            },
            {
              name: "Trung Lập Hạ",
              pre: "Xã"
            },
            {
              name: "Trung Lập Hạ",
              pre: "Xã"
            },
            {
              name: "Trung Lập Thượng",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Gò Vấp",
          pre: "Quận",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "16",
              pre: "Phường"
            },
            {
              name: "17",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Hóc Môn",
          pre: "Huyện",
          ward: [
            {
              name: " Đông Thạnh",
              pre: "Xã"
            },
            {
              name: " Hóc Môn",
              pre: "Phường"
            },
            {
              name: "Bà Điểm",
              pre: "Phường"
            },
            {
              name: "Nhị Bình",
              pre: "Xã"
            },
            {
              name: "Tân Hiệp",
              pre: "Xã"
            },
            {
              name: "Tân Thới Nhì",
              pre: "Xã"
            },
            {
              name: "Tân Xuân",
              pre: "Xã"
            },
            {
              name: "Thới Tam Thôn",
              pre: "Xã"
            },
            {
              name: "Trung Chánh",
              pre: "Xã"
            },
            {
              name: "Xuân Thới Đông",
              pre: "Xã"
            },
            {
              name: "Xuân Thới Sơn",
              pre: "Xã"
            },
            {
              name: "Xuân Thới Thượng",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Nhà Bè",
          pre: "Huyện",
          ward: [
            {
              name: "Hiệp Phước",
              pre: "Phường"
            },
            {
              name: "Long Thới",
              pre: "Xã"
            },
            {
              name: "Nhà Bè",
              pre: "Thị trấn"
            },
            {
              name: "Nhơn Đức",
              pre: "Xã"
            },
            {
              name: "Phú Xuân",
              pre: "Xã"
            },
            {
              name: "Phước Kiển",
              pre: "Xã"
            },
            {
              name: "Phước Lộc",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Phú Nhuận",
          pre: "Quận",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "17",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "25",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 1",
          pre: "",
          ward: [
            {
              name: "Bến Nghé",
              pre: "Phường"
            },
            {
              name: "Bến Thành",
              pre: "Phường"
            },
            {
              name: "Cầu Kho",
              pre: "Phường"
            },
            {
              name: "Cầu Ông Lãnh",
              pre: "Phường"
            },
            {
              name: "Cô Giang",
              pre: "Phường"
            },
            {
              name: "Đa Kao",
              pre: "Phường"
            },
            {
              name: "Nguyễn Cư Trinh",
              pre: "Phường"
            },
            {
              name: "Nguyễn Thái Bình",
              pre: "Phường"
            },
            {
              name: "Phạm Ngũ Lão",
              pre: "Phường"
            },
            {
              name: "Tân Định",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 10",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 11",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "16",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 12",
          pre: "",
          ward: [
            {
              name: "An Phú Đông",
              pre: "Phường"
            },
            {
              name: "Đông Hưng Thuận",
              pre: "Phường"
            },
            {
              name: "Hiệp Thành",
              pre: "Phường"
            },
            {
              name: "Tân Chánh Hiệp",
              pre: "Phường"
            },
            {
              name: "Tân Hưng Thuận",
              pre: "Phường"
            },
            {
              name: "Tân Thới Hiệp",
              pre: "Phường"
            },
            {
              name: "Tân Thới Nhất",
              pre: "Phường"
            },
            {
              name: "Thạnh Lộc",
              pre: "Phường"
            },
            {
              name: "Thạnh Xuân",
              pre: "Phường"
            },
            {
              name: "Thới An",
              pre: "Phường"
            },
            {
              name: "Trung Mỹ Tây",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 2",
          pre: "",
          ward: [
            {
              name: " Thạnh Mỹ Lợi",
              pre: "Phường"
            },
            {
              name: "An Khánh",
              pre: "Phường"
            },
            {
              name: "An Lợi Đông",
              pre: "Phường"
            },
            {
              name: "An Phú",
              pre: "Phường"
            },
            {
              name: "Bình An",
              pre: "Phường"
            },
            {
              name: "Bình Khánh",
              pre: "Phường"
            },
            {
              name: "Bình Trưng Đông",
              pre: "Phường"
            },
            {
              name: "Bình Trưng Tây",
              pre: "Phường"
            },
            {
              name: "Cát Lái",
              pre: "Phường"
            },
            {
              name: "Thảo Điền",
              pre: "Phường"
            },
            {
              name: "Thủ Thiêm",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 3",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 4",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "16",
              pre: "Phường"
            },
            {
              name: "18",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 5",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 6",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 7",
          pre: "",
          ward: [
            {
              name: "Bình Thuận",
              pre: "Phường"
            },
            {
              name: "Phú Mỹ",
              pre: "Phường"
            },
            {
              name: "Phú Thuận",
              pre: "Phường"
            },
            {
              name: "Tân Hưng",
              pre: "Phường"
            },
            {
              name: "Tân Kiểng",
              pre: "Phường"
            },
            {
              name: "Tân Phong",
              pre: "Phường"
            },
            {
              name: "Tân Phú",
              pre: "Phường"
            },
            {
              name: "Tân Quy",
              pre: "Phường"
            },
            {
              name: "Tân Thuận Đông",
              pre: "Phường"
            },
            {
              name: "Tân Thuận Tây",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 8",
          pre: "",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "16",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Quận 9",
          pre: "",
          ward: [
            {
              name: "Hiệp Phú",
              pre: "Phường"
            },
            {
              name: "Long Bình",
              pre: "Phường"
            },
            {
              name: "Long Phước",
              pre: "Phường"
            },
            {
              name: "Long Thạnh Mỹ",
              pre: "Phường"
            },
            {
              name: "Long Trường",
              pre: "Phường"
            },
            {
              name: "Phú Hữu",
              pre: "Phường"
            },
            {
              name: "Phước Bình",
              pre: "Phường"
            },
            {
              name: "Phước Long A",
              pre: "Phường"
            },
            {
              name: "Phước Long B",
              pre: "Phường"
            },
            {
              name: "Tân Phú",
              pre: "Phường"
            },
            {
              name: "Tăng Nhơn Phú A",
              pre: "Phường"
            },
            {
              name: "Tăng Nhơn Phú B",
              pre: "Phường"
            },
            {
              name: "Trường Thạnh",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Tân Bình",
          pre: "Quận",
          ward: [
            {
              name: "1",
              pre: "Phường"
            },
            {
              name: "10",
              pre: "Phường"
            },
            {
              name: "11",
              pre: "Phường"
            },
            {
              name: "12",
              pre: "Phường"
            },
            {
              name: "13",
              pre: "Phường"
            },
            {
              name: "14",
              pre: "Phường"
            },
            {
              name: "15",
              pre: "Phường"
            },
            {
              name: "2",
              pre: "Phường"
            },
            {
              name: "3",
              pre: "Phường"
            },
            {
              name: "4",
              pre: "Phường"
            },
            {
              name: "5",
              pre: "Phường"
            },
            {
              name: "6",
              pre: "Phường"
            },
            {
              name: "7",
              pre: "Phường"
            },
            {
              name: "8",
              pre: "Phường"
            },
            {
              name: "9",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Tân Phú",
          pre: "Quận",
          ward: [
            {
              name: "Hiệp Tân",
              pre: "Phường"
            },
            {
              name: "Hòa Thạnh",
              pre: "Phường"
            },
            {
              name: "Phú Thạnh",
              pre: "Phường"
            },
            {
              name: "Phú Thọ Hòa",
              pre: "Phường"
            },
            {
              name: "Phú Trung",
              pre: "Phường"
            },
            {
              name: "Sơn Kỳ",
              pre: "Phường"
            },
            {
              name: "Tân Quý",
              pre: "Phường"
            },
            {
              name: "Tân Sơn Nhì",
              pre: "Phường"
            },
            {
              name: "Tân Thành",
              pre: "Phường"
            },
            {
              name: "Tân Thới Hòa",
              pre: "Phường"
            },
            {
              name: "Tây Thạnh",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Thủ Đức",
          pre: "Quận",
          ward: [
            {
              name: "Bình Chiểu",
              pre: "Phường"
            },
            {
              name: "Bình Thọ",
              pre: "Phường"
            },
            {
              name: "Hiệp Bình Chánh",
              pre: "Phường"
            },
            {
              name: "Hiệp Bình Phước",
              pre: "Phường"
            },
            {
              name: "Linh Chiểu",
              pre: "Phường"
            },
            {
              name: "Linh Đông",
              pre: "Phường"
            },
            {
              name: "Linh Tây",
              pre: "Phường"
            },
            {
              name: "Linh Trung",
              pre: "Phường"
            },
            {
              name: "Linh Xuân",
              pre: "Phường"
            },
            {
              name: "Tam Bình",
              pre: "Phường"
            },
            {
              name: "Tam Phú",
              pre: "Phường"
            },
            {
              name: "Trường Thọ",
              pre: "Phường"
            }
          ]
        }
      ]
    },
    {
      code: "HN",
      name: "Hà Nội",
      district: [
        {
          name: "Ba Đình",
          pre: "Quận",
          ward: [
            {
              name: "Cống Vị",
              pre: "Phường"
            },
            {
              name: "Điện Biên",
              pre: "Phường"
            },
            {
              name: "Đội Cấn",
              pre: "Phường"
            },
            {
              name: "Giảng Võ",
              pre: "Phường"
            },
            {
              name: "Kim Mã",
              pre: "Phường"
            },
            {
              name: "Liễu Giai",
              pre: "Phường"
            },
            {
              name: "Ngọc Hà",
              pre: "Phường"
            },
            {
              name: "Ngọc Khánh",
              pre: "Phường"
            },
            {
              name: "Nguyễn Trung Trực",
              pre: "Phường"
            },
            {
              name: "Phúc Xá",
              pre: "Phường"
            },
            {
              name: "Quán Thánh",
              pre: "Phường"
            },
            {
              name: "Thành Công",
              pre: "Phường"
            },
            {
              name: "Trúc Bạch",
              pre: "Phường"
            },
            {
              name: "Vĩnh Phúc",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Ba Vì",
          pre: "Huyện",
          ward: [
            {
              name: "Ba Trại",
              pre: "Xã"
            },
            {
              name: "Ba Vì",
              pre: "Xã"
            },
            {
              name: "Cẩm Lĩnh",
              pre: "Xã"
            },
            {
              name: "Cam Thượng",
              pre: "Xã"
            },
            {
              name: "Châu Sơn",
              pre: "Xã"
            },
            {
              name: "Chu Minh",
              pre: "Xã"
            },
            {
              name: "Cổ Đô",
              pre: "Xã"
            },
            {
              name: "Đông Quang",
              pre: "Xã"
            },
            {
              name: "Đồng Thái",
              pre: "Xã"
            },
            {
              name: "Khánh Thượng",
              pre: "Xã"
            },
            {
              name: "Minh Châu",
              pre: "Xã"
            },
            {
              name: "Minh Quang",
              pre: "Xã"
            },
            {
              name: "Phong Vân",
              pre: "Xã"
            },
            {
              name: "Phú Châu",
              pre: "Xã"
            },
            {
              name: "Phú Cường",
              pre: "Xã"
            },
            {
              name: "Phú Đông",
              pre: "Xã"
            },
            {
              name: "Phú Phương",
              pre: "Xã"
            },
            {
              name: "Phú Sơn",
              pre: "Xã"
            },
            {
              name: "Sơn Đà",
              pre: "Xã"
            },
            {
              name: "Tản Hồng",
              pre: "Xã"
            },
            {
              name: "Tản Lĩnh",
              pre: "Xã"
            },
            {
              name: "Tây Đằng",
              pre: "Thị trấn"
            },
            {
              name: "Thái Hòa",
              pre: "Xã"
            },
            {
              name: "Thuần Mỹ",
              pre: "Xã"
            },
            {
              name: "Thụy An",
              pre: "Xã"
            },
            {
              name: "Tiên Phong",
              pre: "Xã"
            },
            {
              name: "Tòng Bạt",
              pre: "Xã"
            },
            {
              name: "Vân Hòa",
              pre: "Xã"
            },
            {
              name: "Vạn Thắng",
              pre: "Xã"
            },
            {
              name: "Vật Lại",
              pre: "Xã"
            },
            {
              name: "Yên Bài",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Bắc Từ Liêm",
          pre: "Quận",
          ward: [
            {
              name: "Cổ Nhuế 1",
              pre: "Phường"
            },
            {
              name: "Cổ Nhuế 2",
              pre: "Phường"
            },
            {
              name: "Đông Ngạc",
              pre: "Phường"
            },
            {
              name: "Đức Thắng",
              pre: "Phường"
            },
            {
              name: "Liên Mạc",
              pre: "Phường"
            },
            {
              name: "Minh Khai",
              pre: "Phường"
            },
            {
              name: "Phú Diễn",
              pre: "Phường"
            },
            {
              name: "Phúc Diễn",
              pre: "Phường"
            },
            {
              name: "Tây Tựu",
              pre: "Phường"
            },
            {
              name: "Thượng Cát",
              pre: "Phường"
            },
            {
              name: "Thụy Phương",
              pre: "Phường"
            },
            {
              name: "Xuân Đỉnh",
              pre: "Phường"
            },
            {
              name: "Xuân Tảo",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Cầu Giấy",
          pre: "Quận",
          ward: [
            {
              name: "Dịch Vọng",
              pre: "Phường"
            },
            {
              name: "Dịch Vọng Hậu",
              pre: "Phường"
            },
            {
              name: "Mai Dịch",
              pre: "Phường"
            },
            {
              name: "Nghĩa Đô",
              pre: "Phường"
            },
            {
              name: "Nghĩa Tân",
              pre: "Phường"
            },
            {
              name: "Quan Hoa",
              pre: "Phường"
            },
            {
              name: "Trung Hòa",
              pre: "Phường"
            },
            {
              name: "Yên Hòa",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Chương Mỹ",
          pre: "Huyện",
          ward: [
            {
              name: "Chúc Sơn",
              pre: "Thị trấn"
            },
            {
              name: "Đại Yên",
              pre: "Xã"
            },
            {
              name: "Đồng Lạc",
              pre: "Xã"
            },
            {
              name: "Đồng Phú",
              pre: "Xã"
            },
            {
              name: "Đông Phương Yên",
              pre: "Xã"
            },
            {
              name: "Đông Sơn",
              pre: "Xã"
            },
            {
              name: "Hoà Chính",
              pre: "Xã"
            },
            {
              name: "Hoàng Diệu",
              pre: "Xã"
            },
            {
              name: "Hoàng Văn Thụ",
              pre: "Xã"
            },
            {
              name: "Hồng Phong",
              pre: "Xã"
            },
            {
              name: "Hợp Đồng",
              pre: "Xã"
            },
            {
              name: "Hữu Văn",
              pre: "Xã"
            },
            {
              name: "Lam Điền",
              pre: "Xã"
            },
            {
              name: "Mỹ Lương",
              pre: "Xã"
            },
            {
              name: "Nam Phương Tiến",
              pre: "Xã"
            },
            {
              name: "Ngọc Hòa",
              pre: "Xã"
            },
            {
              name: "Phú Nam An",
              pre: "Xã"
            },
            {
              name: "Phú Nghĩa",
              pre: "Xã"
            },
            {
              name: "Phụng Châu",
              pre: "Xã"
            },
            {
              name: "Quảng Bị",
              pre: "Xã"
            },
            {
              name: "Tân Tiến",
              pre: "Xã"
            },
            {
              name: "Thanh Bình",
              pre: "Xã"
            },
            {
              name: "Thượng Vực",
              pre: "Xã"
            },
            {
              name: "Thụy Hương",
              pre: "Xã"
            },
            {
              name: "Thuỷ Xuân Tiên",
              pre: "Xã"
            },
            {
              name: "Tiên Phương",
              pre: "Xã"
            },
            {
              name: "Tốt Động",
              pre: "Xã"
            },
            {
              name: "Trần Phú",
              pre: "Xã"
            },
            {
              name: "Trung Hòa",
              pre: "Xã"
            },
            {
              name: "Trường Yên",
              pre: "Xã"
            },
            {
              name: "Văn Võ",
              pre: "Xã"
            },
            {
              name: "Xuân Mai",
              pre: "Thị trấn"
            }
          ]
        },
        {
          name: "Đan Phượng",
          pre: "Huyện",
          ward: [
            {
              name: "Đan Phượng",
              pre: "Xã"
            },
            {
              name: "Đồng Tháp",
              pre: "Xã"
            },
            {
              name: "Hạ Mỗ",
              pre: "Xã"
            },
            {
              name: "Hồng Hà",
              pre: "Xã"
            },
            {
              name: "Liên Hà",
              pre: "Xã"
            },
            {
              name: "Liên Hồng",
              pre: "Xã"
            },
            {
              name: "Liên Trung",
              pre: "Xã"
            },
            {
              name: "Phùng",
              pre: "Thị trấn"
            },
            {
              name: "Phương Đình",
              pre: "Xã"
            },
            {
              name: "Song Phượng",
              pre: "Xã"
            },
            {
              name: "Tân Hội",
              pre: "Xã"
            },
            {
              name: "Tân Lập",
              pre: "Xã"
            },
            {
              name: "Thọ An",
              pre: "Xã"
            },
            {
              name: "Thọ Xuân",
              pre: "Xã"
            },
            {
              name: "Thượng Mỗ",
              pre: "Xã"
            },
            {
              name: "Trung Châu",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Đông Anh",
          pre: "Huyện",
          ward: [
            {
              name: "Bắc Hồng",
              pre: "Xã"
            },
            {
              name: "Cổ Loa",
              pre: "Xã"
            },
            {
              name: "Đại Mạch",
              pre: "Xã"
            },
            {
              name: "Đông Anh",
              pre: "Thị trấn"
            },
            {
              name: "Đông Hội",
              pre: "Xã"
            },
            {
              name: "Dục Tú",
              pre: "Xã"
            },
            {
              name: "Hải Bối",
              pre: "Xã"
            },
            {
              name: "Kim Chung",
              pre: "Xã"
            },
            {
              name: "Kim Nỗ",
              pre: "Xã"
            },
            {
              name: "Liên Hà",
              pre: "Xã"
            },
            {
              name: "Mai Lâm",
              pre: "Xã"
            },
            {
              name: "Nam Hồng",
              pre: "Xã"
            },
            {
              name: "Nguyên Khê",
              pre: "Xã"
            },
            {
              name: "Tàm Xá",
              pre: "Xã"
            },
            {
              name: "Tầm Xá",
              pre: "Xã"
            },
            {
              name: "Thụy Lâm",
              pre: "Xã"
            },
            {
              name: "Tiên Dương",
              pre: "Xã"
            },
            {
              name: "Uy Nỗ",
              pre: "Xã"
            },
            {
              name: "Vân Hà",
              pre: "Xã"
            },
            {
              name: "Vân Nội",
              pre: "Xã"
            },
            {
              name: "Việt Hùng",
              pre: "Xã"
            },
            {
              name: "Vĩnh Ngọc",
              pre: "Xã"
            },
            {
              name: "Võng La",
              pre: "Xã"
            },
            {
              name: "Xuân Canh",
              pre: "Xã"
            },
            {
              name: "Xuân Nộn",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Đống Đa",
          pre: "Quận",
          ward: [
            {
              name: "Cát Linh",
              pre: "Phường"
            },
            {
              name: "Hàng Bột",
              pre: "Phường"
            },
            {
              name: "Khâm Thiên",
              pre: "Phường"
            },
            {
              name: "Khương Thượng",
              pre: "Phường"
            },
            {
              name: "Kim Liên",
              pre: "Phường"
            },
            {
              name: "Láng Hạ",
              pre: "Phường"
            },
            {
              name: "Láng Thượng",
              pre: "Phường"
            },
            {
              name: "Nam Đồng",
              pre: "Phường"
            },
            {
              name: "Ngã Tư Sở",
              pre: "Phường"
            },
            {
              name: "Ô Chợ Dừa",
              pre: "Phường"
            },
            {
              name: "Phương Liên",
              pre: "Phường"
            },
            {
              name: "Phương Mai",
              pre: "Phường"
            },
            {
              name: "Quang Trung",
              pre: "Phường"
            },
            {
              name: "Quốc Tử Giám",
              pre: "Phường"
            },
            {
              name: "Thịnh Quang",
              pre: "Phường"
            },
            {
              name: "Thổ Quan",
              pre: "Phường"
            },
            {
              name: "Trung Liệt",
              pre: "Phường"
            },
            {
              name: "Trung Phụng",
              pre: "Phường"
            },
            {
              name: "Trung Tự",
              pre: "Phường"
            },
            {
              name: "Văn Chương",
              pre: "Phường"
            },
            {
              name: "Văn Miếu",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Gia Lâm",
          pre: "Huyện",
          ward: [
            {
              name: "Bát Tràng",
              pre: "Xã"
            },
            {
              name: "Cổ Bi",
              pre: "Xã"
            },
            {
              name: "Đa Tốn",
              pre: "Xã"
            },
            {
              name: "Đặng Xá",
              pre: "Xã"
            },
            {
              name: "Đình Xuyên",
              pre: "Xã"
            },
            {
              name: "Đông Dư",
              pre: "Xã"
            },
            {
              name: "Dương Hà",
              pre: "Xã"
            },
            {
              name: "Dương Quang",
              pre: "Xã"
            },
            {
              name: "Dương Xá",
              pre: "Xã"
            },
            {
              name: "Kiêu Kỵ",
              pre: "Xã"
            },
            {
              name: "Kim Lan",
              pre: "Thị trấn"
            },
            {
              name: "Kim Sơn",
              pre: "Xã"
            },
            {
              name: "Lệ Chi",
              pre: "Xã"
            },
            {
              name: "Ninh Hiệp",
              pre: "Xã"
            },
            {
              name: "Phù Đổng",
              pre: "Xã"
            },
            {
              name: "Phú Thị",
              pre: "Xã"
            },
            {
              name: "Trâu Quỳ",
              pre: "Thị trấn"
            },
            {
              name: "Trung Mầu",
              pre: "Xã"
            },
            {
              name: "Văn Đức",
              pre: "Xã"
            },
            {
              name: "Yên Thường",
              pre: "Xã"
            },
            {
              name: "Yên Viên",
              pre: "Thị trấn"
            },
            {
              name: "Yên Viên",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Hà Đông",
          pre: "Quận",
          ward: [
            {
              name: "Biên Giang",
              pre: "Phường"
            },
            {
              name: "Đồng Mai",
              pre: "Phường"
            },
            {
              name: "Dương Nội",
              pre: "Phường"
            },
            {
              name: "Hà Cầu",
              pre: "Phường"
            },
            {
              name: "Kiến Hưng",
              pre: "Phường"
            },
            {
              name: "La Khê",
              pre: "Phường"
            },
            {
              name: "Mỗ Lao",
              pre: "Phường"
            },
            {
              name: "Nguyễn Trãi",
              pre: "Phường"
            },
            {
              name: "Phú La",
              pre: "Phường"
            },
            {
              name: "Phú Lãm",
              pre: "Phường"
            },
            {
              name: "Phú Lương",
              pre: "Phường"
            },
            {
              name: "Phúc La",
              pre: "Phường"
            },
            {
              name: "Quang Trung",
              pre: "Phường"
            },
            {
              name: "Vạn Phúc",
              pre: "Phường"
            },
            {
              name: "Văn Quán",
              pre: "Phường"
            },
            {
              name: "Yên Nghĩa",
              pre: "Phường"
            },
            {
              name: "Yết Kiêu",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Hai Bà Trưng",
          pre: "Quận",
          ward: [
            {
              name: "Bạch Đằng",
              pre: "Phường"
            },
            {
              name: "Bách Khoa",
              pre: "Phường"
            },
            {
              name: "Bạch Mai",
              pre: "Phường"
            },
            {
              name: "Bùi Thị Xuân",
              pre: "Phường"
            },
            {
              name: "Cầu Dền",
              pre: "Phường"
            },
            {
              name: "Đống Mác",
              pre: "Phường"
            },
            {
              name: "Đồng Nhân",
              pre: "Phường"
            },
            {
              name: "Đồng Tâm",
              pre: "Phường"
            },
            {
              name: "Lê Đại Hành",
              pre: "Phường"
            },
            {
              name: "Minh Khai",
              pre: "Phường"
            },
            {
              name: "Ngô Thì Nhậm",
              pre: "Phường"
            },
            {
              name: "Nguyễn Du",
              pre: "Phường"
            },
            {
              name: "Phạm Đình Hổ",
              pre: "Phường"
            },
            {
              name: "Phố Huế",
              pre: "Phường"
            },
            {
              name: "Quỳnh Lôi",
              pre: "Phường"
            },
            {
              name: "Quỳnh Mai",
              pre: "Phường"
            },
            {
              name: "Thanh Lương",
              pre: "Phường"
            },
            {
              name: "Thanh Nhàn",
              pre: "Phường"
            },
            {
              name: "Trương Định",
              pre: "Phường"
            },
            {
              name: "Vĩnh Tuy",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Hoài Đức",
          pre: "Huyện",
          ward: [
            {
              name: "An Khánh",
              pre: "Xã"
            },
            {
              name: "An Thượng",
              pre: "Xã"
            },
            {
              name: "Cát Quế",
              pre: "Xã"
            },
            {
              name: "Đắc Sở",
              pre: "Xã"
            },
            {
              name: "Di Trạch",
              pre: "Xã"
            },
            {
              name: "Đông La",
              pre: "Xã"
            },
            {
              name: "Đức Giang",
              pre: "Xã"
            },
            {
              name: "Đức Thượng",
              pre: "Xã"
            },
            {
              name: "Dương Liễu",
              pre: "Xã"
            },
            {
              name: "Kim Chung",
              pre: "Xã"
            },
            {
              name: "La Phù",
              pre: "Xã"
            },
            {
              name: "Lại Yên",
              pre: "Xã"
            },
            {
              name: "Minh Khai",
              pre: "Xã"
            },
            {
              name: "Sơn Đồng",
              pre: "Xã"
            },
            {
              name: "Song Phương",
              pre: "Xã"
            },
            {
              name: "Tiền Yên",
              pre: "Xã"
            },
            {
              name: "Trạm Trôi",
              pre: "Thị trấn"
            },
            {
              name: "Vân Canh",
              pre: "Xã"
            },
            {
              name: "Vân Côn",
              pre: "Xã"
            },
            {
              name: "Yên Sở",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Hoàn Kiếm",
          pre: "Quận",
          ward: [
            {
              name: "Chương Dương Độ",
              pre: "Phường"
            },
            {
              name: "Cửa Đông",
              pre: "Phường"
            },
            {
              name: "Cửa Nam",
              pre: "Phường"
            },
            {
              name: "Đồng Xuân",
              pre: "Phường"
            },
            {
              name: "Hàng Bạc",
              pre: "Phường"
            },
            {
              name: "Hàng Bài",
              pre: "Phường"
            },
            {
              name: "Hàng Bồ",
              pre: "Phường"
            },
            {
              name: "Hàng Bông",
              pre: "Phường"
            },
            {
              name: "Hàng Buồm",
              pre: "Phường"
            },
            {
              name: "Hàng Đào",
              pre: "Phường"
            },
            {
              name: "Hàng Gai",
              pre: "Phường"
            },
            {
              name: "Hàng Mã",
              pre: "Phường"
            },
            {
              name: "Hàng Trống",
              pre: "Phường"
            },
            {
              name: "Lý Thái Tổ",
              pre: "Phường"
            },
            {
              name: "Phan Chu Trinh",
              pre: "Phường"
            },
            {
              name: "Phúc Tân",
              pre: "Phường"
            },
            {
              name: "Trần Hưng Đạo",
              pre: "Phường"
            },
            {
              name: "Tràng Tiền",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Hoàng Mai",
          pre: "Quận",
          ward: [
            {
              name: "Đại Kim",
              pre: "Phường"
            },
            {
              name: "Định Công",
              pre: "Phường"
            },
            {
              name: "Giáp Bát",
              pre: "Phường"
            },
            {
              name: "Hoàng Liệt",
              pre: "Phường"
            },
            {
              name: "Hoàng Văn Thụ",
              pre: "Phường"
            },
            {
              name: "Lĩnh Nam",
              pre: "Phường"
            },
            {
              name: "Mai Động",
              pre: "Phường"
            },
            {
              name: "Tân Mai",
              pre: "Phường"
            },
            {
              name: "Thanh Trì",
              pre: "Phường"
            },
            {
              name: "Thịnh Liệt",
              pre: "Phường"
            },
            {
              name: "Trần Phú",
              pre: "Phường"
            },
            {
              name: "Tương Mai",
              pre: "Phường"
            },
            {
              name: "Vĩnh Hưng",
              pre: "Phường"
            },
            {
              name: "Yên Sở",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Long Biên",
          pre: "Quận",
          ward: [
            {
              name: "Bồ Đề",
              pre: "Phường"
            },
            {
              name: "Cự Khối",
              pre: "Phường"
            },
            {
              name: "Đức Giang",
              pre: "Phường"
            },
            {
              name: "Gia Thụy",
              pre: "Phường"
            },
            {
              name: "Giang Biên",
              pre: "Phường"
            },
            {
              name: "Long Biên",
              pre: "Phường"
            },
            {
              name: "Ngọc Lâm",
              pre: "Phường"
            },
            {
              name: "Ngọc Thụy",
              pre: "Phường"
            },
            {
              name: "Phúc Đồng",
              pre: "Phường"
            },
            {
              name: "Phúc Lợi",
              pre: "Phường"
            },
            {
              name: "Sài Đồng",
              pre: "Phường"
            },
            {
              name: "Thạch Bàn",
              pre: "Phường"
            },
            {
              name: "Thượng Thanh",
              pre: "Phường"
            },
            {
              name: "Việt Hưng",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Mê Linh",
          pre: "Huyện",
          ward: [
            {
              name: "Chi Đông",
              pre: "Thị trấn"
            },
            {
              name: "Chu Phan",
              pre: "Xã"
            },
            {
              name: "Đại Thịnh",
              pre: "Xã"
            },
            {
              name: "Hoàng Kim",
              pre: "Xã"
            },
            {
              name: "Kim Hoa",
              pre: "Xã"
            },
            {
              name: "Liên Mạc",
              pre: "Xã"
            },
            {
              name: "Mê Linh",
              pre: "Xã"
            },
            {
              name: "Quang Minh",
              pre: "Thị trấn"
            },
            {
              name: "Tam Đồng",
              pre: "Xã"
            },
            {
              name: "Thạch Đà",
              pre: "Xã"
            },
            {
              name: "Thanh Lâm",
              pre: "Xã"
            },
            {
              name: "Tiền Phong",
              pre: "Xã"
            },
            {
              name: "Tiến Thắng",
              pre: "Xã"
            },
            {
              name: "Tiến Thịnh",
              pre: "Xã"
            },
            {
              name: "Tráng Việt",
              pre: "Xã"
            },
            {
              name: "Tự Lập",
              pre: "Xã"
            },
            {
              name: "Văn Khê",
              pre: "Xã"
            },
            {
              name: "Vạn Yên",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Mỹ Đức",
          pre: "Huyện",
          ward: [
            {
              name: "An Mỹ",
              pre: "Xã"
            },
            {
              name: "An Phú",
              pre: "Xã"
            },
            {
              name: "An Tiến",
              pre: "Xã"
            },
            {
              name: "Bột Xuyên",
              pre: "Xã"
            },
            {
              name: "Đại Hưng",
              pre: "Xã"
            },
            {
              name: "Đại Nghĩa",
              pre: "Thị trấn"
            },
            {
              name: "Đốc Tín",
              pre: "Xã"
            },
            {
              name: "Đồng Tâm",
              pre: "Xã"
            },
            {
              name: "Hồng Sơn",
              pre: "Xã"
            },
            {
              name: "Hợp Thanh",
              pre: "Xã"
            },
            {
              name: "Hợp Tiến",
              pre: "Xã"
            },
            {
              name: "Hùng Tiến",
              pre: "Xã"
            },
            {
              name: "Hương Sơn",
              pre: "Xã"
            },
            {
              name: "Lê Thanh",
              pre: "Xã"
            },
            {
              name: "Mỹ Thành",
              pre: "Xã"
            },
            {
              name: "Phù Lưu Tế",
              pre: "Xã"
            },
            {
              name: "Phúc Lâm",
              pre: "Xã"
            },
            {
              name: "Phùng Xá",
              pre: "Xã"
            },
            {
              name: "Thượng Lâm",
              pre: "Xã"
            },
            {
              name: "Tuy Lai",
              pre: "Xã"
            },
            {
              name: "Vạn Kim",
              pre: "Xã"
            },
            {
              name: "Xuy Xá",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Nam Từ Liêm",
          pre: "Quận",
          ward: [
            {
              name: "Cầu Diễn",
              pre: "Thị trấn"
            },
            {
              name: "Đại Mỗ",
              pre: "Phường"
            },
            {
              name: "Mễ Trì",
              pre: "Phường"
            },
            {
              name: "Mỹ Đình 1",
              pre: "Phường"
            },
            {
              name: "Mỹ Đình 2",
              pre: "Phường"
            },
            {
              name: "Phú Đô",
              pre: "Phường"
            },
            {
              name: "Phương Canh",
              pre: "Phường"
            },
            {
              name: "Tây Mỗ",
              pre: "Phường"
            },
            {
              name: "Trung Văn",
              pre: "Phường"
            },
            {
              name: "Xuân Phương",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Phú Xuyên",
          pre: "Huyện",
          ward: [
            {
              name: "Bạch Hạ",
              pre: "Xã"
            },
            {
              name: "Châu Can",
              pre: "Xã"
            },
            {
              name: "Chuyên Mỹ",
              pre: "Xã"
            },
            {
              name: "Đại Thắng",
              pre: "Xã"
            },
            {
              name: "Đại Xuyên",
              pre: "Xã"
            },
            {
              name: "Hoàng Long",
              pre: "Xã"
            },
            {
              name: "Hồng Minh",
              pre: "Xã"
            },
            {
              name: "Hồng Thái",
              pre: "Xã"
            },
            {
              name: "Khai Thái",
              pre: "Xã"
            },
            {
              name: "Minh Tân",
              pre: "Xã"
            },
            {
              name: "Nam Phong",
              pre: "Xã"
            },
            {
              name: "Nam Triều",
              pre: "Xã"
            },
            {
              name: "Phú Minh",
              pre: "Thị trấn"
            },
            {
              name: "Phú Túc",
              pre: "Xã"
            },
            {
              name: "Phú Xuyên",
              pre: "Thị trấn"
            },
            {
              name: "Phú Yên",
              pre: "Xã"
            },
            {
              name: "Phúc Tiến",
              pre: "Xã"
            },
            {
              name: "Phượng Dực",
              pre: "Xã"
            },
            {
              name: "Quang Lãng",
              pre: "Xã"
            },
            {
              name: "Quang Trung",
              pre: "Xã"
            },
            {
              name: "Sơn Hà",
              pre: "Xã"
            },
            {
              name: "Tân Dân",
              pre: "Xã"
            },
            {
              name: "Thụy Phú",
              pre: "Xã"
            },
            {
              name: "Tri Thủy",
              pre: "Xã"
            },
            {
              name: "Tri Trung",
              pre: "Xã"
            },
            {
              name: "Văn Hoàng",
              pre: "Xã"
            },
            {
              name: "Văn Nhân",
              pre: "Xã"
            },
            {
              name: "Vân Từ",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Phúc Thọ",
          pre: "Huyện",
          ward: [
            {
              name: "Cẩm Đình",
              pre: "Xã"
            },
            {
              name: "Gạch",
              pre: "Thị trấn"
            },
            {
              name: "Hát Môn",
              pre: "Xã"
            },
            {
              name: "Hiệp Thuận",
              pre: "Xã"
            },
            {
              name: "Liên Hiệp",
              pre: "Xã"
            },
            {
              name: "Long Xuyên",
              pre: "Xã"
            },
            {
              name: "Ngọc Tảo",
              pre: "Xã"
            },
            {
              name: "Phúc Hòa",
              pre: "Xã"
            },
            {
              name: "Phúc Thọ",
              pre: "Thị trấn"
            },
            {
              name: "Phụng Thượng",
              pre: "Xã"
            },
            {
              name: "Phương Độ",
              pre: "Xã"
            },
            {
              name: "Sen Chiểu",
              pre: "Xã"
            },
            {
              name: "Tam Hiệp",
              pre: "Xã"
            },
            {
              name: "Tam Thuấn",
              pre: "Xã"
            },
            {
              name: "Thanh Đa",
              pre: "Xã"
            },
            {
              name: "Thọ Lộc",
              pre: "Xã"
            },
            {
              name: "Thượng Cốc",
              pre: "Xã"
            },
            {
              name: "Tích Giang",
              pre: "Xã"
            },
            {
              name: "Trạch Mỹ Lộc",
              pre: "Xã"
            },
            {
              name: "Vân Hà",
              pre: "Xã"
            },
            {
              name: "Vân Nam",
              pre: "Xã"
            },
            {
              name: "Vân Phúc",
              pre: "Xã"
            },
            {
              name: "Võng Xuyên",
              pre: "Xã"
            },
            {
              name: "Xuân Phú",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Quốc Oai",
          pre: "Huyện",
          ward: [
            {
              name: "Cấn Hữu",
              pre: "Xã"
            },
            {
              name: "Cộng Hòa",
              pre: "Xã"
            },
            {
              name: "Đại Thành",
              pre: "Xã"
            },
            {
              name: "Đồng Quang",
              pre: "Xã"
            },
            {
              name: "Đông Xuân",
              pre: "Xã"
            },
            {
              name: "Đông Yên",
              pre: "Xã"
            },
            {
              name: "Hòa Thạch",
              pre: "Xã"
            },
            {
              name: "Liệp Tuyết",
              pre: "Xã"
            },
            {
              name: "Nghĩa Hương",
              pre: "Xã"
            },
            {
              name: "Ngọc Liệp",
              pre: "Xã"
            },
            {
              name: "Ngọc Mỹ",
              pre: "Xã"
            },
            {
              name: "Phú Cát",
              pre: "Xã"
            },
            {
              name: "Phú Mãn",
              pre: "Xã"
            },
            {
              name: "Phượng Cách",
              pre: "Xã"
            },
            {
              name: "Quốc Oai",
              pre: "Thị trấn"
            },
            {
              name: "Sài Sơn",
              pre: "Xã"
            },
            {
              name: "Tân Hòa",
              pre: "Xã"
            },
            {
              name: "Tân Phú",
              pre: "Xã"
            },
            {
              name: "Thạch Thán",
              pre: "Xã"
            },
            {
              name: "Tuyết Nghĩa",
              pre: "Xã"
            },
            {
              name: "Yên Sơn",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Sóc Sơn",
          pre: "Huyện",
          ward: [
            {
              name: "Bắc Phú",
              pre: "Xã"
            },
            {
              name: "Bắc Sơn",
              pre: "Xã"
            },
            {
              name: "Đông Xuân",
              pre: "Xã"
            },
            {
              name: "Đức Hoà",
              pre: "Xã"
            },
            {
              name: "Hiền Ninh",
              pre: "Xã"
            },
            {
              name: "Hồng Kỳ",
              pre: "Xã"
            },
            {
              name: "Kim Lũ",
              pre: "Xã"
            },
            {
              name: "Mai Đình",
              pre: "Xã"
            },
            {
              name: "Minh Phú",
              pre: "Xã"
            },
            {
              name: "Minh Trí",
              pre: "Xã"
            },
            {
              name: "Nam Sơn",
              pre: "Xã"
            },
            {
              name: "Phú Cường",
              pre: "Xã"
            },
            {
              name: "Phù Linh",
              pre: "Xã"
            },
            {
              name: "Phù Lỗ",
              pre: "Xã"
            },
            {
              name: "Phú Minh",
              pre: "Xã"
            },
            {
              name: "Quang Tiến",
              pre: "Xã"
            },
            {
              name: "Sóc Sơn",
              pre: "Thị trấn"
            },
            {
              name: "Tân Dân",
              pre: "Xã"
            },
            {
              name: "Tân Hưng",
              pre: "Xã"
            },
            {
              name: "Tân Minh",
              pre: "Xã"
            },
            {
              name: "Thanh Xuân",
              pre: "Xã"
            },
            {
              name: "Tiên Dược",
              pre: "Xã"
            },
            {
              name: "Trung Giã",
              pre: "Xã"
            },
            {
              name: "Việt Long",
              pre: "Xã"
            },
            {
              name: "Xuân Giang",
              pre: "Xã"
            },
            {
              name: "Xuân Thu",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Sơn Tây",
          pre: "Thị xã",
          ward: [
            {
              name: "Cổ Đông",
              pre: "Xã"
            },
            {
              name: "Đường Lâm",
              pre: "Xã"
            },
            {
              name: "Kim Sơn",
              pre: "Phường"
            },
            {
              name: "Lê Lợi",
              pre: "Phường"
            },
            {
              name: "Ngô Quyền",
              pre: "Phường"
            },
            {
              name: "Phú Thịnh",
              pre: "Phường"
            },
            {
              name: "Quang Trung",
              pre: "Phường"
            },
            {
              name: "Sơn Đông",
              pre: "Xã"
            },
            {
              name: "Sơn Lộc",
              pre: "Phường"
            },
            {
              name: "Thanh Mỹ",
              pre: "Xã"
            },
            {
              name: "Trung Hưng",
              pre: "Phường"
            },
            {
              name: "Trung Sơn Trầm",
              pre: "Phường"
            },
            {
              name: "Viên Sơn",
              pre: "Phường"
            },
            {
              name: "Xuân Khanh",
              pre: "Phường"
            },
            {
              name: "Xuân Sơn",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Tây Hồ",
          pre: "Quận",
          ward: [
            {
              name: "Bưởi",
              pre: "Phường"
            },
            {
              name: "Nhật Tân",
              pre: "Phường"
            },
            {
              name: "Phú Thượng",
              pre: "Phường"
            },
            {
              name: "Quảng An",
              pre: "Phường"
            },
            {
              name: "Thụy Khuê",
              pre: "Phường"
            },
            {
              name: "Tứ Liên",
              pre: "Phường"
            },
            {
              name: "Xuân La",
              pre: "Phường"
            },
            {
              name: "Yên Phụ",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Thạch Thất",
          pre: "Huyện",
          ward: [
            {
              name: "Bình Phú",
              pre: "Xã"
            },
            {
              name: "Bình Yên",
              pre: "Xã"
            },
            {
              name: "Cẩm Yên",
              pre: "Xã"
            },
            {
              name: "Cần Kiệm",
              pre: "Xã"
            },
            {
              name: "Canh Nậu",
              pre: "Xã"
            },
            {
              name: "Chàng Sơn",
              pre: "Xã"
            },
            {
              name: "Đại Đồng",
              pre: "Xã"
            },
            {
              name: "Dị Nậu",
              pre: "Xã"
            },
            {
              name: "Đồng Trúc",
              pre: "Xã"
            },
            {
              name: "Hạ Bằng",
              pre: "Xã"
            },
            {
              name: "Hương Ngải",
              pre: "Xã"
            },
            {
              name: "Hữu Bằng",
              pre: "Xã"
            },
            {
              name: "Kim Quan",
              pre: "Xã"
            },
            {
              name: "Lại Thượng",
              pre: "Xã"
            },
            {
              name: "Liên Quan",
              pre: "Thị trấn"
            },
            {
              name: "Phú Kim",
              pre: "Xã"
            },
            {
              name: "Phùng Xá",
              pre: "Xã"
            },
            {
              name: "Tân Xã",
              pre: "Xã"
            },
            {
              name: "Thạch Hòa",
              pre: "Xã"
            },
            {
              name: "Thạch Xá",
              pre: "Xã"
            },
            {
              name: "Tiến Xuân",
              pre: "Xã"
            },
            {
              name: "Yên Bình",
              pre: "Xã"
            },
            {
              name: "Yên Trung",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Thanh Oai",
          pre: "Huyện",
          ward: [
            {
              name: "Bích Hòa",
              pre: "Xã"
            },
            {
              name: "Bình Minh",
              pre: "Xã"
            },
            {
              name: "Cao Dương",
              pre: "Xã"
            },
            {
              name: "Cao Viên",
              pre: "Xã"
            },
            {
              name: "Cự Khê",
              pre: "Xã"
            },
            {
              name: "Dân Hòa",
              pre: "Xã"
            },
            {
              name: "Đỗ Động",
              pre: "Xã"
            },
            {
              name: "Hồng Dương",
              pre: "Xã"
            },
            {
              name: "Kim An",
              pre: "Xã"
            },
            {
              name: "Kim Bài",
              pre: "Thị trấn"
            },
            {
              name: "Kim Thư",
              pre: "Xã"
            },
            {
              name: "Liên Châu",
              pre: "Xã"
            },
            {
              name: "Mỹ Hưng",
              pre: "Xã"
            },
            {
              name: "Phương Trung",
              pre: "Xã"
            },
            {
              name: "Tam Hưng",
              pre: "Xã"
            },
            {
              name: "Tân Ước",
              pre: "Xã"
            },
            {
              name: "Thanh Cao",
              pre: "Xã"
            },
            {
              name: "Thanh Mai",
              pre: "Xã"
            },
            {
              name: "Thanh Thùy",
              pre: "Xã"
            },
            {
              name: "Thanh Văn",
              pre: "Xã"
            },
            {
              name: "Xuân Dương",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Thanh Trì",
          pre: "Huyện",
          ward: [
            {
              name: "Đại Áng",
              pre: "Xã"
            },
            {
              name: "Đông Mỹ",
              pre: "Xã"
            },
            {
              name: "Duyên Hà",
              pre: "Xã"
            },
            {
              name: "Hữu Hòa",
              pre: "Xã"
            },
            {
              name: "Liên Ninh",
              pre: "Xã"
            },
            {
              name: "Ngọc Hồi",
              pre: "Xã"
            },
            {
              name: "Ngũ Hiệp",
              pre: "Xã"
            },
            {
              name: "Tả Thanh Oai",
              pre: "Xã"
            },
            {
              name: "Tam Hiệp",
              pre: "Xã"
            },
            {
              name: "Tân Triều",
              pre: "Xã"
            },
            {
              name: "Thanh Liệt",
              pre: "Xã"
            },
            {
              name: "Tứ Hiệp",
              pre: "Xã"
            },
            {
              name: "Văn Điển",
              pre: "Thị trấn"
            },
            {
              name: "Vạn Phúc",
              pre: "Xã"
            },
            {
              name: "Vĩnh Quỳnh",
              pre: "Xã"
            },
            {
              name: "Yên Mỹ",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Thanh Xuân",
          pre: "Quận",
          ward: [
            {
              name: "Hạ Đình",
              pre: "Phường"
            },
            {
              name: "Khương Đình",
              pre: "Phường"
            },
            {
              name: "Khương Mai",
              pre: "Phường"
            },
            {
              name: "Khương Trung",
              pre: "Phường"
            },
            {
              name: "Kim Giang",
              pre: "Phường"
            },
            {
              name: "Nhân Chính",
              pre: "Phường"
            },
            {
              name: "Phương Liệt",
              pre: "Phường"
            },
            {
              name: "Thanh Xuân Bắc",
              pre: "Phường"
            },
            {
              name: "Thanh Xuân Nam",
              pre: "Phường"
            },
            {
              name: "Thanh Xuân Trung",
              pre: "Phường"
            },
            {
              name: "Thượng Đình",
              pre: "Phường"
            }
          ]
        },
        {
          name: "Thường Tín",
          pre: "Huyện",
          ward: [
            {
              name: "Chương Dương",
              pre: "Xã"
            },
            {
              name: "Dũng Tiến",
              pre: "Xã"
            },
            {
              name: "Duyên Thái",
              pre: "Xã"
            },
            {
              name: "Hà Hồi",
              pre: "Xã"
            },
            {
              name: "Hiền Giang",
              pre: "Xã"
            },
            {
              name: "Hòa Bình",
              pre: "Xã"
            },
            {
              name: "Hồng Vân",
              pre: "Xã"
            },
            {
              name: "Khánh Hà",
              pre: "Xã"
            },
            {
              name: "Lê Lợi",
              pre: "Xã"
            },
            {
              name: "Liên Phương",
              pre: "Xã"
            },
            {
              name: "Minh Cường",
              pre: "Xã"
            },
            {
              name: "Nghiêm Xuyên",
              pre: "Xã"
            },
            {
              name: "Nguyễn Trãi",
              pre: "Xã"
            },
            {
              name: "Nhị Khê",
              pre: "Xã"
            },
            {
              name: "Ninh Sở",
              pre: "Xã"
            },
            {
              name: "Quất Động",
              pre: "Xã"
            },
            {
              name: "Tân Minh",
              pre: "Xã"
            },
            {
              name: "Thắng Lợi",
              pre: "Xã"
            },
            {
              name: "Thống Nhất",
              pre: "Xã"
            },
            {
              name: "Thư Phú",
              pre: "Xã"
            },
            {
              name: "Thường Tín",
              pre: "Thị trấn"
            },
            {
              name: "Tiền Phong",
              pre: "Xã"
            },
            {
              name: "Tô Hiệu",
              pre: "Xã"
            },
            {
              name: "Tự Nhiên",
              pre: "Xã"
            },
            {
              name: "Văn Bình",
              pre: "Xã"
            },
            {
              name: "Vạn Điểm",
              pre: "Xã"
            },
            {
              name: "Văn Phú",
              pre: "Xã"
            },
            {
              name: "Vân Tảo",
              pre: "Xã"
            },
            {
              name: "Văn Tự",
              pre: "Xã"
            }
          ]
        },
        {
          name: "Ứng Hòa",
          pre: "Huyện",
          ward: [
            {
              name: "Cao Thành",
              pre: "Xã"
            },
            {
              name: "Đại Cường",
              pre: "Xã"
            },
            {
              name: "Đại Hùng",
              pre: "Xã"
            },
            {
              name: "Đội Bình",
              pre: "Xã"
            },
            {
              name: "Đông Lỗ",
              pre: "Xã"
            },
            {
              name: "Đồng Tân",
              pre: "Xã"
            },
            {
              name: "Đồng Tiến",
              pre: "Xã"
            },
            {
              name: "Hòa Lâm",
              pre: "Xã"
            },
            {
              name: "Hòa Nam",
              pre: "Xã"
            },
            {
              name: "Hòa Phú",
              pre: "Xã"
            },
            {
              name: "Hoa Sơn",
              pre: "Xã"
            },
            {
              name: "Hòa Xá",
              pre: "Xã"
            },
            {
              name: "Hồng Quang",
              pre: "Xã"
            },
            {
              name: "Kim Đường",
              pre: "Xã"
            },
            {
              name: "Liên Bạt",
              pre: "Xã"
            },
            {
              name: "Lưu Hoàng",
              pre: "Xã"
            },
            {
              name: "Minh Đức",
              pre: "Xã"
            },
            {
              name: "Phù Lưu",
              pre: "Xã"
            },
            {
              name: "Phương Tú",
              pre: "Xã"
            },
            {
              name: "Quảng Phú Cầu",
              pre: "Xã"
            },
            {
              name: "Sơn Công",
              pre: "Xã"
            },
            {
              name: "Tân Phương",
              pre: "Xã"
            },
            {
              name: "Tảo Dương Văn",
              pre: "Xã"
            },
            {
              name: "Trầm Lộng",
              pre: "Xã"
            },
            {
              name: "Trung Tú",
              pre: "Xã"
            },
            {
              name: "Trường Thịnh",
              pre: "Xã"
            },
            {
              name: "Vân Đình",
              pre: "Thị trấn"
            },
            {
              name: "Vạn Thái",
              pre: "Xã"
            },
            {
              name: "Viên An",
              pre: "Xã"
            },
            {
              name: "Viên Nội",
              pre: "Xã"
            }
          ]
        }
      ]
    },
    {
      code: "PQ",
      name: "Phú Quốc",
      district: [
        {
          name: "Phú Quốc",
          pre: "Đảo",
          ward: [
            {
              name: "An Thới",
              pre: "Phường"
            },
            {
              name: "Dương Đông",
              pre: "Phường"
            },
            {
              name: "Bãi Thơm",
              pre: "Xã"
            },
            {
              name: "Cửa Cạn",
              pre: "Xã"
            },
            {
              name: "Cửa Dương",
              pre: "Xã"
            },
            {
              name: "Dương Tơ",
              pre: "Xã"
            },
            {
              name: "Gành Dầu",
              pre: "Xã"
            },
            {
              name: "Hàm Ninh",
              pre: "Xã"
            },
            {
              name: "Thổ Châu",
              pre: "Xã"
            },
          ]
        }
      ]
    }
  ],
  hashConfig: {
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCCwfDsC7TC72EpHnjOdoGP+MymavCVkoZ+FiV+GavjnxaULj/D
    SPJnFo9YsLktVP9K0+hDKFmZkDWcKN+uRTBL1oKR1XCRlBQi56j21zVl3/83ZHSm
    yDpUpciGREQwcf+ySziDeFEE+7ETQCpuywsw1Lj7A9hhX0F4qtTg6hEUEwIDAQAB
    AoGASbe1cB6ZZl021cvMJ/o/yT9ngVtBD9Jv6J3rvVATzFxgimIYqKxznRLm9gWM
    ILaOx0z44QPan+zhjIyurr1rIEIGtMFS+4n4JXvbFmdp6QmPYyuoDCQ6cSBUll33
    ay2uIUrjt2lus+PEDpm72mgiP+hsCEiM5seHDWohI3TN6GECQQDpK/lnQSMa394h
    mLQF1+M+9fe0nroe9jFyLEoXdLcrtZ9gVKyNXVuypsctsd4CqtxQl12ZxfgvC2H7
    UflH3bAnAkEAj48kRzhntFlwEFzLC6y3Lf1hwTfXdSUPXc7LqebieL+lfj3eT0Ob
    2rVrJ9JqV7Y3rKaHhAhFoKMHPYf3Mh0ENQJBAIf2u2SJJ/Y4yidfCsJJg9onxTwO
    PktllamUx9NrnI+hRYD/fuqjoJ/I/mXXzLRTe0qHKO5M8Q5FnenVf/12+IsCQCse
    vrHZwmSMfLmddaujDD53HjawNDpOkGgH5mq5HAtS3T2nDbBXSWgPGAmVDTYdWGm2
    d3v0FB3k+hbEUT6vMoUCQEwNSuWgnJMV+w8s7FfKPw10wSnY1zF5HoipMv1TlmQR
    FFZoh+OhnDZO0/JyA5Z63mIPe+mpzZUhw8WbUvtiLic=
    -----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCwfDsC7TC72EpHnjOdoGP+Mym
    avCVkoZ+FiV+GavjnxaULj/DSPJnFo9YsLktVP9K0+hDKFmZkDWcKN+uRTBL1oKR
    1XCRlBQi56j21zVl3/83ZHSmyDpUpciGREQwcf+ySziDeFEE+7ETQCpuywsw1Lj7
    A9hhX0F4qtTg6hEUEwIDAQAB
    -----END PUBLIC KEY-----`,
    enabled: true,
  },
  enumTimes: [
    { id: 1, code: '00:00', cron: '0 0 0 * * ? ' },
    { id: 2, code: '00:15', cron: '0 15 0 * * ? ' },
    { id: 3, code: '00:30', cron: '0 30 0 * * ? ' },
    { id: 4, code: '00:45', cron: '0 45 0 * * ? ' },
  ],
  serialFormat: [

    {
      label: {
        en: 'Year',
        vi: 'Năm'
      },
      value: 'YEAR'
    },
    {
      label: {
        en: 'Transport Code',
        vi: 'Mã ĐV Vận Tải'
      },
      value: 'MA_DV'
    },
    {
      label: {
        en: 'Node',
        vi: 'Nốt'
      },
      value: 'NODE'
    },
    {
      label: {
        en: 'Route Code',
        vi: 'Mã Tuyến'
      },
      value: 'MA_TUYEN'
    },
    {
      label: {
        en: 'Name ZH',
        vi: 'Name ZH'
      },
      value: 'NAME_ZH'
    },
  ],
  sequenceFormat: [
    {
      label: {
        en: 'Sequence (6 digits)',
        vi: 'Số Serial (6 số)'
      },
      value: 'SEQUENCE06'
    },
    {
      label: {
        en: 'Sequence (7 digits)',
        vi: 'Số Serial (7 số)'
      },
      value: 'SEQUENCE07'
    },
    {
      label: {
        en: 'Sequence (8 digits)',
        vi: 'Số Serial (8 số)'
      },
      value: 'SEQUENCE08'
    },
    {
      label: {
        en: 'Sequence (9 digits)',
        vi: 'Số Serial (9 số)'
      },
      value: 'SEQUENCE09'
    },
    {
      label: {
        en: 'Sequence (10 digits)',
        vi: 'Số Serial (10 số)'
      },
      value: 'SEQUENCE10'
    },
    {
      label: {
        en: 'Sequence (11 digits)',
        vi: 'Số Serial (11 số)'
      },
      value: 'SEQUENCE11'
    },
    {
      label: {
        en: 'Sequence (12 digits)',
        vi: 'Số Serial (12 số)'
      },
      value: 'SEQUENCE12'
    }
  ],
  fallback:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==',
  enableGoogleMaps: true,
  typeOfSerialCard: [
    {
      value: 'UU_TIEN',
      lable: {
        vi: 'Ưu tiên',
        en: 'Priority'
      }
    },
    {
      value: 'BINH_THUONG',
      lable: {
        vi: 'Bình Thường',
        en: 'Normal'
      }
    }
  ],
  statusOfMonthCard: [
    {
      value: 'DRAFT',
      label: 'DRAFT'
    },
    {
      value: 'SUBMITTED',
      label: 'SUBMITTED'
    },
    {
      value: 'APPROVED',
      label: 'APPROVED'
    },
    {
      value: 'REJECT',
      label: 'REJECT'
    },
  ]
};
