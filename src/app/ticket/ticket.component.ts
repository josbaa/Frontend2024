import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-lippupalvelu',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class TicketComponent {
  ticketCounts = { basic: 0, student: 0, senior: 0 };
  ticketPrices = { basic: 15, student: 10, senior: 8 };
  isMtkMember = false;

  buyerInfo = { firstName: '', lastName: '', email: '' };

  constructor(private orderService: OrderService) {}

  //kysytty tekoälyltä kuinka tehdä nousevan/päivitetyn lipun määrä ja lopullisen lipun määrä. Eli tästä.

  updateTicketCount(type: keyof typeof this.ticketCounts, amount: number) {
    if (this.ticketCounts[type] + amount >= 0) {
      this.ticketCounts[type] += amount;
    }
  }

  calculateTotalPrice(): number {
    let total =
      this.ticketCounts.basic * this.ticketPrices.basic +
      this.ticketCounts.student * this.ticketPrices.student +
      this.ticketCounts.senior * this.ticketPrices.senior;

    if (this.isMtkMember) {
      total *= 0.85;
    }

    return Math.round(total * 100) / 100;
  }

  //Tähän.

  submitOrder() {
    const order = {
      tickets: this.ticketCounts,
      total: this.calculateTotalPrice(),
      buyer: this.buyerInfo
    };

    
    this.orderService.saveOrder(order);

    alert('Tilaus lähetetty ja tallennettu!');
    console.log('Order:', order);
  }
}
