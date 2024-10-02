export interface ILoginInput {
  email: string;
  password: string;
}

export interface ISendMoneyInput {
  receiverEmail: string;
  amount: number;
  description: string;
}
