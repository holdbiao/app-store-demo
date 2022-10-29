/**
 * app信息类型
 */
export type IAppItem = {
  id: string; // id
  img: string; // 小图
  img100: string; // 大图
  type: string; // 类型
  name: string; // 应用名称
  artist: string; // 作者
} & Partial<IAppDetail>

/**
 * app详情信息
 */
export interface IAppDetail {
  averageUserRating: number; // 评分
  description: string; // 描述
  userRatingCount: number; // 评论数
}