import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../types/models/payments';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private paymentsBaseUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentsBaseUrl)
  }
}
