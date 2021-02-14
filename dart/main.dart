import 'dart:io';

main() {
  stdout.writeln('Are we good to go for an input ?');
  var war = stdin.readLineSync();
  print('the input that you gave was $war');
  stdout.writeln('can we confirm? ');
  var intake = stdin.readLineSync();
  print(intake);
}
// main();