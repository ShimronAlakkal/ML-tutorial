void main() {
  List<String> string_list = [
    'a',
    'list',
    'that',
    'contains',
    'string',
    'values',
    'only'
  ];

  List<dynamic> dynamic_list = ['a', 'list', 'whith', 12, 'sdfs', 2652.881];

  print(
      '____________________________string list_____________________________________________________');
  for (int index = 0; index < string_list.length; index++) {
    print('this is the index: $index' + ' value > ' + string_list[index]);
  }
  print(
      '________________________________________DYNAMIC list________________________________________________');
  for (int index = 0; index < dynamic_list.length; index++) {
    print(dynamic_list[index]);
  }

  Map<dynamic, dynamic> the_py_dictionary = {
    1: 'Shimron',
    'string 2 ': 'Shimron',
    3.232: 23233.33
  };

  print(
      '------------------------------------------------------------------------------------------');
  for (int index = 0; index < the_py_dictionary.length; index += 1) {
    print(the_py_dictionary[index]);
  }
  print(
      '-------------------2----------------------------------------------------------------------');

  for (int index = 0; index < the_py_dictionary.length; index += 1) {
    print(the_py_dictionary[index]);
  }
  print(the_py_dictionary.values);
}
