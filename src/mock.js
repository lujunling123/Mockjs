const Mock = require('mockjs');

Mock.mock('/api/data',(req, res)=>{
  return {
    data:"第一个数据"
  }
})
/**
 * String
 * generate 1 to 10 * of String type
 */
Mock.mock('/api/data/string', (req, res) => {
  return {
    data: Mock.mock({
      "string|1-100": "123"
    })
  }
})

/**
 * String
 * copy 3 types of  '***'
 */
Mock.mock('/api/data/string/2', (req, res) => {
  return {
    data: Mock.mock({
      "string|3": "***"
    })
  }
})
