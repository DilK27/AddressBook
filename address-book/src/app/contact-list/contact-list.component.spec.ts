import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {

  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy;
  });

  it('should have id', () => {
    const idElement = element.querySelector('at-toolbar');
    expect(idElement).toBeTruthy;
  });

});

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('works', () => {
  });
});

