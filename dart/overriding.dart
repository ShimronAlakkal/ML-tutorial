void main() {

  Employee shown = Employee('Shawn James','shawn2james@gmail.com',100000);
  shown.employeeDetaild();
  shown.all_info();
}

class Employee {
  String name;
  String mail;
  num pay;

  Employee({this.name, this.mail, this.pay});

  void employeeDetaild() {
    print('emplayoee name : ' + this.name);
    print('employee salary : ' + this.pay.toString());
  }

  String get_contact(String name) {
    if (name == this.name) {
      return this.mail + ' is the contact for the employee given here ';
    } else if (name == '') {
      return 'no contact for this guy because you dindt give any';
    } else {
      return 'Sorry , unfortunately we are not able to find the person';
    }
  }
}

class CompanyDetails extends Employee {
  String company_name = 'STELLAR';
  String company_address = 'www.stellar.org';
  String employee_name = 'Shimron' ; 

  CompanyDetails({this.company_address, this.company_name,this.employee_name});

  void all_info() {

    print('Company name :' + this.company_name);
    print('Company Address : '+this.company_address);

    @override
    print('Employee name : '+this.employee_name);
    
    print('*****************************************************************');
  }
}
