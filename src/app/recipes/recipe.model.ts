export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, descr: string, imagePat: string) {
    this.name = name;
    this.description = descr;
    this.imagePath = imagePat;
  }
}
