export class Employee{
    empname:string;
    empid:number;
    constructor(empname:string,empid:number){
        this.empname=empname;
        this.empid=empid;
    }
    getEmpName(){
        return this.empname;
    }
    getEmpId(){
        return this.empid;
    }
}