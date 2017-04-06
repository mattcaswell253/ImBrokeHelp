import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AccountService } from '../account.service';
import { Account } from '../account.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AccountService]
})
export class AdminComponent {

  constructor(private accountService: AccountService) { }

  submitForm(name: string, description: string, goal: number) {
    var newAccount: Account = new Account(name, description, goal);
    this.accountService.addAccount(newAccount);
  }

}