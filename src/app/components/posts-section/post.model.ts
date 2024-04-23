export class Post {
  public id?: string;
  public name: string;
  public description: string;

  constructor(names: string, desc: string) {
    this.name = names;
    this.description = desc;
  }
}
