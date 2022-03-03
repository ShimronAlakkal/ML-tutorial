// inorder to use a class or function inanother file, you've got to export it from this file

export class InstaLogin{

	constructor(username,password){
		this.uname = username;
		this.pwd = password;
	}

}

export function sum(){
	console.log('Summoned');
}