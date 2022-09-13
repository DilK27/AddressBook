import { Component, OnInit } from '@angular/core';
import { FetchContactsService } from '../services/fetch-contacts.service';
import { ContactModel } from '../models/contact-model.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Array<ContactModel> = [];
  apiDataLoaded: boolean = false;
  pageNumber: number = 0;

  constructor(private fetchContacts: FetchContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
   this.getData();
  }

  getData() {
    this.apiDataLoaded = false;
    this.pageNumber = this.fetchContacts.getCurrentPage();
    this.fetchContacts.getContacts(this.pageNumber).subscribe((data: any) => {
      if(data && data.results) {
        this.contactList = data.results 
        console.log(this.contactList);
      }
      this.contactList.forEach((contact: ContactModel)=>{
        contact.flipped = false;
        contact.dob.date = new Date(contact.dob.date).toLocaleDateString();
      })
      this.apiDataLoaded = true;
    });
  }

  toggleFlip(contact: ContactModel, event: Event) {
    contact.flipped = contact.flipped ? false : true;
  }

  paginator(type: string) {
    type === 'next' ? this.pageNumber++ : this.pageNumber--;
    this.fetchContacts.setCurrentPage(this.pageNumber);
    this.getData();
  }

  routeToDetails(contact: ContactModel) {
    this.fetchContacts.setCurrentContact(contact);
    this.router.navigate(['/contact-details']);
  }

}
