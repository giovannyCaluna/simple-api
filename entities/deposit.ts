export class Deposit {
    id: string;
    amount: string;
    coin: string;
    network: string;
    status: number;
    address: string;
    addressTag: string;
    txId: string;
    insertTime: number;
    transferType: number;
    confirmTimes: string;
    unlockConfirm: number;
    walletType: number;
  
    constructor(data: Partial<Deposit>) {
      Object.assign(this, data);
    }
  }