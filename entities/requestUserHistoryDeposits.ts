export class requestUserHistoryDeposits {
    includeSource: boolean;
    coin: string;
    status: number;
    startTime: number;
    endTime: number;
    offset: number;
    limit: number;
    recvWindow: number;
    timestamp: number;
    txId: string;
  
    constructor(data: Partial<requestUserHistoryDeposits>) {
      Object.assign(this, data);
    }
  }