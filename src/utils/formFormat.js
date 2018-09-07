/**
 * Created by chang_feng on 2018/6/15
 */

import dayjs from 'dayjs'

/**
 * 处理每个数据
 *
 * @param {*} type 当type为key是传
 * @returns
 */
function handleDataToOwnWanted (item, type) {
  let query
  if (type === 1) {
    query = {
      type: item.type,
      key_name: item.key_name,
      conf_id: item.id,
      kind: item.kind
    }
  } else {
    query = {
      type: item.type,
      key_name: item.key_name,
      kind: item.kind
    }
  }
  return query
}

/**
 * 格式化获取的表单数据，改为自己定义的
 *
 * @export
 * @param {*} res 获取的数据
 * @returns
 */
export function formFormat (res) {
  let formData = {}
  let formBody = []
  let formMultiBody = []
  if (Array.isArray(res.data) && res.data.length) {
    res.data.forEach(item => {
      if (item.type === 'title') {
        formData.title = handleDataToOwnWanted(item)
      } else if (item.type === 'desc') {
        formData.desc = handleDataToOwnWanted(item)
      } else if (item.type === 'key') {
        if (Number(item.kind) === 1) {
          // 单行
          formBody.push(handleDataToOwnWanted(item, 1))
        } else if (Number(item.kind === 2)) {
          // 多行
          formMultiBody.push(handleDataToOwnWanted(item, 1))
        }
      } else {
        formData.button = handleDataToOwnWanted(item)
      }
    })
    // 如果接口中没有desc,则前端处理数据默认放置一个desc
    if (!formData.desc) {
      formData.desc = {
        type: 'desc',
        key_name: '',
        kind: '1'
      }
    }
    formData.body = formBody
    formData.formMultiBody = formMultiBody
    return formData
  } else {
    // 没数据时，使用默认数据
    formData = null
    return formData
  }
}

export function handleDateShow (date) {
  const hour = dayjs(date).hour() > 12
    ? dayjs(date).hour() - 12 >= 10
      ? `下午${dayjs(date).hour() - 12}`
      : `下午0${dayjs(date).hour() - 12}`
    : dayjs(date).hour() > 9
      ? `上午${dayjs(date).hour()}`
      : `上午0${dayjs(date).hour()}`
  const minute = dayjs(date).minute() >= 10 ? dayjs(date).minute() : `0${dayjs(date).minute()}`
  return `${dayjs(date).month() + 1}月${dayjs(date).date()}日 ${hour}:${minute}`
}
