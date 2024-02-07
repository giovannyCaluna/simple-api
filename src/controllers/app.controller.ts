import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from '../../entities/User';
import { Spot } from '@binance/connector-typescript';
import { requestExampleHistoryDeposit } from './../../env/contants';
import { Deposit } from '../../entities/deposit';
import { requestUserHistoryDeposits } from 'entities/requestUserHistoryDeposits';


//const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @Post('historyDeposits')

  async getUserDEpositHistory(@Body() postData: requestUserHistoryDeposits): Promise<Deposit[]> {
    console.log(postData);


    //process to create key pairs

    // const keys = this.appService.generateKeyPair();
    // const signature = this.appService.signMessage('My message',keys.privateKey);
    // const verify = this.appService.verifySignature('My message', signature, keys.publicKey);


    var history = [];
    await this.appService.depositHistory(requestExampleHistoryDeposit).then((res) => {
      history = res;
      return history;
    }
    )
      .catch((error) => {
        throw new Error(error);
      });

    return history;





  }
}









