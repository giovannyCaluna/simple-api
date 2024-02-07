import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';
import * as NodeRSA from 'node-rsa';
import { Deposit } from 'entities/deposit';
import { rawDataDeposit } from 'env/contants';

@Injectable()
export class AppService {
  apiKey = process.env.BINANCE_API_KEY || '';
  apiSecret = process.env.BINANCE_API_SECRET || '';

  testService(): string {
    return 'Hello World!';
  }

  generateKeyPair(): { publicKey: string; privateKey: string } {
    const key = new NodeRSA({ b: 2048 });
    const publicKey = key.exportKey('public');
    const privateKey = key.exportKey('private');
    return { publicKey, privateKey };
  }

  signMessage(message: string, privateKey: string): string {
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(message);
    return sign.sign(privateKey, 'base64');
  }

  verifySignature(message: string, signature: string, publicKey: string): boolean {

    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(message);
    return verify.verify(publicKey, signature, 'base64');
  }


  async depositHistory(params: {
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
  }): Promise<any> {
    const endpoint = 'https://api.binance.com/sapi/v1/capital/deposit/hisrec'; // replace with your API endpoint

    // Generate signature
    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    const signature = crypto
      .createHmac('sha256', this.apiSecret)
      .update(queryString)
      .digest('hex');

    // Make API call with headers
    try {
      // const response = await axios.get(endpoint, {
      //   headers: {
      //     'X-MBX-APIKEY': this.apiKey,
      //   },
      //   params: { ...params, signature },
      // });

      //return response.data;
      return this.createHistoryResponse();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  createHistoryResponse(): Deposit[] {
    const deposits: Deposit[] = rawDataDeposit.map(data => new Deposit(data));
    return deposits;
  }

}



