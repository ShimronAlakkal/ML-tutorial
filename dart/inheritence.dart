// This is a program to show how inheritance in dart work .
// Just another simple one

void main() {
  Employee jordan =
      Employee('Jordan', 'jordan@emp1.com', 10000, 'WEB DEVELOPMENT');
  print(jordan.employee_name);
  print(jordan.company);
  print('*******************************************');
  print(jordan.department);
  print(jordan.employee_name);
  print(jordan.pay);
  print(jordan.info_list);
  print('***********************************');
  print('address : ' + jordan.address);
}

class Organisation {
  String company = 'GOOGLE AND FACEBOOK';
  String address = 'ADDRESS FOR THE PERSON';
}

class Employee extends Organisation {
  String employee_name;
  String employee_mail;
  num pay;
  String department;
  List<dynamic> info_list;

  Employee(String name, String mail, num pay, String dept) {
    this.employee_name = name;
    this.employee_mail = mail;
    this.department = dept;
    this.pay = pay;
    this.info_list = [];
  }

  dynamic employee_info() {
    this.info_list.add(this.employee_name);
    this.info_list.add(this.employee_mail);
    this.info_list.add(this.pay);
    this.info_list.add(this.department);
    return this.info_list;
  }
}
