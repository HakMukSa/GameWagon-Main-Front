export type User = {
  id: number;
  userId: string;
  nickname: string;
  email: string;
  isMarketingVerify: boolean;
  token?: string;
}; // 사용자 정보
