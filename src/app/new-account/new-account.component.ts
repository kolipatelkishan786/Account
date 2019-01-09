import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private logginservice: LoggingService,
              private accountservice: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountservice.addAccount(accountName, accountStatus);
    this.logginservice.logStatusChange(accountStatus);
  }

  ngOnInit() {
  }


}
