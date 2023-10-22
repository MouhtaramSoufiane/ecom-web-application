import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId!:number;
  orderDetails:any

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){
    this.orderId=this.route.snapshot.params['orderId'];
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:9999/order-service/fullOrder/${this.orderId}`).subscribe({
      next:(data)=>{
         this.orderDetails=data
      },
      error:(err)=>{

      }
    })
    
  }

}
