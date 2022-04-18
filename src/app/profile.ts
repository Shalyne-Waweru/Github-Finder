export class Profile {
  //Here we make Angular sieve out what we need from the API
  constructor(
    public avatar_url:string,
    public html_url:string,
    public login:string,
    public followers:number,
    public following:number,
    public public_repos:number,
    public created_at:Date ){

  }
}
