class laptop{
    constructor(br,mo,pr){
        this.brand=br,
        this.model=mo,
        this.price=pr
    }
    showDetail(){
        console.log(`Brand:- ${this.brand}, Model:- ${this.model}, Price:- ${this.price}`);
    }
}

let mylaptop1 = new laptop("Dell","XPS 15",1500);
let mylaptop2 = new laptop("Dell","Latitude",15000);
let mylaptop3= new laptop("Dell","Inspiron",1300);
let mylaptop4 = new laptop("Dell","Alienware",20000);
let mylaptop5 = new laptop("Asus","ROG",50000);
let mylaptop6 = new laptop("Asus","Zephyrus",23000);
let mylaptop7 = new laptop("Asus","VivoBook 15",10000);
let mylaptop8 = new laptop("Asus","Tuf",46000);
let mylaptop9 = new laptop("Lenovo","Ideapad",12300);
let mylaptop10 = new laptop("Lenovo","Yoga",78000);


mylaptop1.showDetail();
