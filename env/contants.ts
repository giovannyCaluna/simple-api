export const API_KEY = 'your_api_key';
export const BASE_URL = 'https://api.binance.com';
export const ENDPOINTS = {
  ACCOUNT_INFO: '/api/v3/account',
  ORDER_CREATE: '/api/v3/order',
};

export const rawDataDeposit = [
  {
    "id": "769800519366885376",
    "amount": "0.001",
    "coin": "BNB",
    "network": "BNB",
    "status": 0,
    "address": "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23",
    "addressTag": "101764890",
    "txId": "98A3EA560C6B3336D348B6C83F0F95ECE4F1F5919E94BD006E5BF3BF264FACFC",
    "insertTime": 1661493146000,
    "transferType": 0,
    "confirmTimes": "1/1",
    "unlockConfirm": 0,
    "walletType": 0
  },
  {
    "id": "769754833590042625",
    "amount":"0.50000000",
    "coin":"IOTA",
    "network":"IOTA",
    "status":1,
    "address":"SIZ9VLMHWATXKV99LH99CIGFJFUMLEHGWVZVNNZXRJJVWBPHYWPPBOSDORZ9EQSHCZAMPVAPGFYQAUUV9DROOXJLNW",
    "addressTag":"",
    "txId":"ESBFVQUTPIWQNJSPXFNHNYHSQNTGKRVKPRABQWTAXCDWOAKDKYWPTVG9BGXNVNKTLEJGESAVXIKIZ9999",
    "insertTime":1599620082000,
    "transferType":0,
    "confirmTimes": "1/1",
    "unlockConfirm": 0,
    "walletType": 0
  }
];

export const requestExampleHistoryDeposit = {
  includeSource: true,
  coin: 'BTC',
  status: 1,
  startTime: 1612531200000, // Example start time in milliseconds
  endTime: 1612617599000, // Example end time in milliseconds
  offset: 0,
  limit: 10,
  recvWindow: 5000,
  timestamp: Date.now(),
  txId: 'transaction_id',
};