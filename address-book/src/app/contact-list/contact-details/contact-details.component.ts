import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FetchContactsService } from '../../services/fetch-contacts.service';
import { ContactModel } from '../../models/contact-model.model';




@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: any

  constructor(private router: Router, private fetchContacts: FetchContactsService) {
    this.fetchContacts.currentUser$.pipe(take(1)).subscribe((contact: ContactModel) => {
      if (!contact) this.router.navigate(['/contact-list']); else this.contact = contact;    
    });
   }

  ngOnInit(): void {
  }

}
