export class ContactModel {
    public cell: string;
    public dob: object = {
        age: undefined,
        data: undefined
    };
    public email: string;
    public gender: string;
    public id: object = {
        name: undefined,
        value: undefined
    };
    public location: object = {
        city: undefined,
        coordinates: {
            latitude: undefined,
            longitude: undefined
        },
        country: undefined,
        postcode: undefined,
        state: undefined,
        steet: {
            name: undefined,
            number: undefined
        },
        timezone: {
            description: undefined,
            offset: undefined
        }
    };
    public login: object = {
        md5: undefined,
        password: undefined,
        salt: undefined,
        sha1: undefined,
        sha256: undefined,
        username: undefined,
        uuid: undefined,
    };
    public name: object = {
        first: undefined,
        last: undefined,
        title: undefined,
    };
    public nat: string;
    public phone: string;
    public picture: object = {
        large: undefined,
        medium: undefined,
        thumbnail: undefined,
    };
    public registered: object = {
        age: undefined,
        date: undefined,
    }
    public flipped: boolean;

    constructor(cell: string, dob: object, email: string, gender: string, id: object, location: object,
                login: object, name: object, nat: string, phone: string, picture: object, registered: object, flipped: boolean) 
    {
        this.cell = cell;
        this.dob = dob;
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
        this.flipped = flipped;
    }

    getCell(): string {
        return this.cell;
    }

    getDOB() {
        return // TODO dob object construction
    }

    getEmail(): string {
        return this.email;
    }

    getGender(): string {
        return this.gender;
    }

    getId() {
        return // TODO id object construction
    }

    getLocation() {
        return // TOOO location object construction
    }

    getLogin() {
        return // TODO login object construction
    }

    getName() {
        return // TODO name object construction
    }

    getNat(): string {
        return this.nat;
    }

    getPhone(): string {
        return this.phone;
    }

    getPicture() {
        return // TODO picture object construction
    }
    
    getRegistered() {
        return // TODO registered obhect construction
    }

    getFlipped(): boolean {
        return this.flipped;
    }


}


