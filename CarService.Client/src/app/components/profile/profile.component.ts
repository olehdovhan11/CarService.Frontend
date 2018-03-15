import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../models/userDTO';
import { ProfileService } from '../../services/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommunicationService } from '../../services/communication.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: UserDTO;
  private userInfo: Element[];
  dataSource = new MatTableDataSource(this.userInfo);

  loading: boolean;

  public uploader: FileUploader;
  uploadFile: any;
  url: string;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService,
    private communicationService: CommunicationService) { }

  ngOnInit() {
    this.url = `https://localhost:44340/api/profile/set-avatar/`;

    this.uploader = new FileUploader({
      url: this.url,
      authToken: `Bearer ${localStorage.getItem("token")}`
    });

    this.getUserInfo();
    this.communicationService.isUpdatedReceived.subscribe(d => {
      if (d === true)
        this.getUserInfo();
    });
  }

  private getUserInfo() {
    this.loading = true;

    this.profileService.getUserInfo().subscribe((data: UserDTO) => {
      this.user = data;
      this.userInfo = [
        { name: "First Name", value: this.user.firstName },
        { name: "Last Name", value: this.user.lastName },
        { name: "Email", value: this.user.email },
        { name: "Phone Number", value: this.user.phoneNumber },
        { name: "City", value: this.user.city },
        { name: "Card Number", value: this.user.cardNumber }
      ];

      if (this.user.workExperience != undefined) {
        this.userInfo.push({ name: "Work Experience", value: this.user.workExperience.toString() });
        this.userInfo.push({ name: "Specialization", value: this.user.specialization });
        this.userInfo.push({ name: "Rate", value: this.user.mechanicRate.toFixed(1).toString() });
      }

      this.loading = false;
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

  uploadAvatar() {
    this.uploader.uploadAll();
  }
}

class Element {
  name: string;
  value: string;
}
