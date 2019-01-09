import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private liggingService: LoggingService) {

  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.liggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.liggingService.logStatusChange(status);

  }
}
