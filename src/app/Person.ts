export class Person {

  id: number;
  nom: string;
  age: number;

  // constructor() {}
  constructor(nom, id, age) {
    this.age = age;
    this.id = id;
    this.nom = nom;
  }
}
