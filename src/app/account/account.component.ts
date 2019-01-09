import {Component, Input, OnInit} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoggingService, AccountService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private logginservise: LoggingService,
              private accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.logginservise.logStatusChange(status);
  }


  ngOnInit() {
  }

}
