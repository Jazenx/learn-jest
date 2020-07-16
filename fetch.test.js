// import { fetchData, fetchData2 } from "./fetch";

// // 回调函数 跨域错误了
// test('should fetchData return {"error_code":"52003","error_msg":"UNAUTHORIZED USER"}', async (done) => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       error_code: "52003",
//       error_msg: "UNAUTHORIZED USER",
//     });
//     done();
//   });
// });

// // promise 跨域错误了

// test('should fetchData2 return {"error_code":"52003","error_msg":"UNAUTHORIZED USER"}', () => {
//   return fetchData2((res) => {
//     expect(res.data).toEqual({
//       error_code: "52003",
//       error_msg: "UNAUTHORIZED USER",
//     });
//   });
// });

// // promise error 跨域错误了

// test('should fetchData3 return {"error_code":"52003","error_msg":"UNAUTHORIZED USER"}', () => {
//   expect.assertions(1) 
//   return fetchData2().catch((e) => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// });


