import { Component, OnInit } from '@angular/core';
import { Payment } from '../../types/models/payments';
import { PaymentsService } from '../../services/payments.service';

@Component({
  selector: 'app-payments-list-page',
  templateUrl: './payments-list-page.component.html',
  styleUrls: ['./payments-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  displayedColumns = ['username', 'title', 'date', 'value', 'isPayed', 'actions'];
  payments: Payment[] = []

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.getPayments()
  }

  getPayments(): void {
    this.paymentsService
      .getPayments()
      .subscribe(payments => {
        this.payments = payments
      })
  }

}
