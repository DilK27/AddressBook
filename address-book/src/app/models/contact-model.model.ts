export interface dob {
    age: number,
    date: string
}

export interface id {
    name: string,
    value: string
}

export interface location {
    city: string,
    state: string,
    coordinates: coordinates,
    country: string,
    postcode: string,
    street: street,
    timezone: timezone,

}

export interface coordinates {
    latitude: string,
    longitude: string
}

export interface street {
    name: string,
    number: number
}

export interface timezone {
    description: string,
    offset: string
}

export interface login {
    md5: string,
    password: string,
    salt: string,
    sha1: string,
    sha256: string,
    username: string,
    uuid: string
}

export interface name {
    first: string,
    last: string,
    title: string
}

export interface picture {
    large: string,
    medium: string,
    thumbnail: string
}

export interface registered {
    age: number,
    date: string
}

export class ContactModel {
    public cell: string;
    public dob: dob
    public email: string;
    public gender: string;
    public id: id;
    public location: location;
    public login: login;
    public name: name;
    public nat: string;
    public phone: string;
    public picture: picture;
    public registered: registered;
    public timezone: timezone;
    public flipped: boolean;

    constructor(cell: string, dob: dob, email: string, gender: string, id: id, location: location, timezone: timezone,
                login: login, name: name, nat: string, phone: string, picture: picture, registered: registered, flipped: boolean) 
    {
        this.cell = cell;
        this.dob = dob
        this.email = email;
        this.gender = gender;
        this.id = id;
        this.location = location;
        this.login = login;
        this.name = name;
        this.nat = nat;
        this.phone = phone;
        this.picture = picture;
        this.registered = registered;
        this.timezone = timezone;
        this.flipped = flipped;
    }

}


