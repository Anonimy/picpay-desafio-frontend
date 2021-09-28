import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../types/models/payments';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.scss']
})
export class PaymentsTableComponent implements OnInit {
  displayedColumns = ['username', 'title', 'date', 'value', 'isPayed', 'actions'];

  @Input() payments!: Payment[]
  constructor() { }

  ngOnInit(): void {
  }

}
