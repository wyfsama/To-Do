export const getImgUrl = (name: string) => {
  // 处理可能包含子目录的路径
  const pathArr = name.split('/')
  switch (pathArr.length) {
    case 1:
      // 单个文件名
      return new URL(`/src/renderer/src/assets/images/${name}`, import.meta.url).href
    case 2:
      // 一级子目录
      return new URL(`/src/renderer/src/assets/images/${pathArr[0]}/${pathArr[1]}`, import.meta.url).href
    default:
      console.error('Unsupported path depth')
      return ''
  }
}
