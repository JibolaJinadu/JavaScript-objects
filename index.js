//  Question 1
//  Using the constructor method, create an InstagramPost() constructor function: 

function InstagramPost(handleOfAuthor, content, imageLinkPosted, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLinkPosted = imageLinkPosted;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
  }


//  Question 2
//  Create 2 Instagram post objects from the constructor function you created above:

let makunPost = new InstagramPost('@yomicasual','Product photos', 'Chttps://www.instagram.com/p/Coj85v_oFzm/?utm_source=ig_web_copy_link', 4165, 3894);
console.log(makunPost);

let remotePost = new InstagramPost('@iamremote','Behind-the-scenes photos', 'https://www.instagram.com/p/CjF4VtfoPzP/?utm_source=ig_web_copy_link', 87195, 70859);
console.log(remotePost);


//  Question 3a
//  Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location){
  return{
    name: name,
    age: age,
    location: location,
  }
}

const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
console.log(musa);


//  Question 3b
//  Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function JambScores(eng_score, govt_score, lit_score, crk_score){
    return{
      eng : eng_score,
      govt: govt_score,
      lit : lit_score,
      crk : crk_score,
    }
  }
  let jambScores = JambScores(70, 85, 82, 94);
  console.log(jambScores);
  
  musa.jambscore = jambScores;
  console.log(musa);


//  Question 4
//  What are the different ways you can clone an object? Give examples for each of them.
/** 
    we can clone an through the following ways: 
    Using Object.assign()
    Using spread Syntax
    Using JSON.parse(JSON.stringify())  
**/

//  Example: copying Object:laptop1 into 3 other Objects using 3 different approaches.
const laptop1 = {
    brand: 'HP',
    model: 'x509',
    weight: '1.85kg',
    memory: '12GB RAM',
    operatingSystem : 'windows 10 Home',
    color: 'Transparent silver',
  }

  
//  option 1 - using object.assign()
const laptop2 = Object.assign({} , laptop1)
laptop2.brand = 'Dell';
console.log(laptop1);
console.log(laptop2);


//  option 2 - using spread syntax i.e, ...
const laptop3 = {...laptop1};
laptop3.brand = 'Lenovo';
console.log(laptop1);
console.log(laptop3);

//  option 3 - using JSON.parse(JSON.stringify())
const laptop4 = JSON.parse(JSON.stringify(laptop1));
laptop4.brand = 'Apple';
console.log(laptop1);
console.log(laptop4);

//   Question 5
//   Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
//      ’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  }
  
  for(const key in presidentialCandidates){
    console.log((presidentialCandidates[key]) + ' '+ 'is the presidential candidate of'+ ' '+ key);
  }
