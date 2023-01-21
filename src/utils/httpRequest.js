import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

console.log(process.env);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;

// file để tạo baseURL

// types of environment:
// Local / development : .env.development
// Test/ staging
// UAT Kiểm thử chấp nhận của người dùng (user acceptance test - UAT) được định nghĩa
//  là một loại kiểm thử được thực hiện bởi chính khách hàng để xác nhận hệ thống đã
// hoạt động đúng như mong đợi và thỏa mãn yêu cầu của người dùng hay chưa
// production
