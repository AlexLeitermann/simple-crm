export class User {
    id!: string;
    firstName!: string;
    lastName!: string;
    birthDate!: number;
    address!: string;
    zipCode!: number;
    city!: string;
    email!: string;

    constructor (obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.address = obj ? obj.address : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }
    
    // public toJSON() {
    //     return {
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         birthDate: this.birthDate,
    //         address: this.address,
    //         zipCode: this.zipCode,
    //         city: this.city,
    //         email: this.email,
    //     }
    // }

}