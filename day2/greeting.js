/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
const name1 =  'Alex';

console.log( greetingWords[1] + ', ' + prefixes[0] + ' name is ' + name1  );

/*
 @param {string} name
    //    name of person
 @parm  {string} gender
      //  Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
        //   greeting sentence
*/

function greeting(name, gender, isSelf) {
     
   let person;
   if(isSelf == true)
   {
       person = ' my'
   }
   else
   {
      if (gender == 'male')
      {
         person = ' his'
      }
      else if(gender == 'female')
      {
         person =  ' her'
      }
      else
      {
         person = ' their'
      }
   }
    return  `Hi,` + person + ` name is ` + name; // use template literal for string to return
  }
  
  let message;
  
  message = greeting("Adam", "male", true);
  console.log(message); // Hi, my name is Adam

   message = greeting("Elizabeth", "female", false);
  console.log(message); // Hey, their name is Elizabeth

   message = greeting("Agomi", "nonbinary", false);
  console.log(message); // Hey, their name is Elizabeth