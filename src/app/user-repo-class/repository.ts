export class Repository {
  //Here we make Angular sieve out what we need from the API
  constructor(
    public name:string,
    public description:string,
    public html_url:string,
    public updated_at:Date){

  }
}
