import { Injectable } from '@angular/core';

export interface Contact {
  fromName: string;
  phoneNumber: number;
  subject?: string;
  date?: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public contacts: Contact[] = [
    {
      fromName: 'Matt Chorsey',
      phoneNumber: 77122712561,
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0
    },
    {
      fromName: 'Lauren Ruthford',
      phoneNumber: 77490437021,
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1
    },
    {
      fromName: 'Jordan Firth',
      phoneNumber: 77722173195,
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2
    },
    {
      fromName: 'Bill Thomas',
      phoneNumber: 77124895249,
      subject: 'The situation',
      date: 'Yesterday',
      id: 3
    },
    {
      fromName: 'Joanne Pollan',
      phoneNumber: 77599661878,
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4
    },
    {
      fromName: 'Andrea Cornerston',
      phoneNumber: 77815435046,
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5
    },
    {
      fromName: 'Moe Chamont',
      phoneNumber: 78116426676,
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6
    },
    {
      fromName: 'Kelly Richardson',
      phoneNumber: 77728177259,
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7
    }
  ];

  constructor() { }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number): Contact {
    return this.contacts[id];
  }
}
