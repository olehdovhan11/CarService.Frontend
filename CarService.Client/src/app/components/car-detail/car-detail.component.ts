import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { DetailCarInfo } from '../../models/detail-car-info';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

// private detailCarById: DetailCarInfo;
@Input() detailCarById: DetailCarInfo;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    this.carService.getDetailCarById(+this.route.snapshot.paramMap.get('id')).subscribe((data: DetailCarInfo) => {
      this.detailCarById = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

}
