// export interface PromotionData {
//   title: string;
//   image: string;
//   url: string;
//   active_from: string;
//   active_to: string;
//   category: string;
// }
export interface PromotionData {
  title: string;
  description: string;
  badge?: string | null;
  day: string;
  date?: string | null;
  percent: string;
  image: string;
  color: string;
}
