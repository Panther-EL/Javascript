 //Profile Builder Details
//Default profile settings
const defaultProfile = {
  name:'Elorm',
  email:'agbekoelorm32@gmail.com',
  location:'Ho',
  theme:'dark',
  language: 'English'
}

//Creating user profile 
const createProfile = (userInfo = {}) => {
  //Merge default profile
  const fullProfile = {...defaultProfile,...userInfo}

  //Destructuring the full profile
  const {name,email,location,theme,language} = fullProfile

  console.log(fullProfile)

}

//Test cases
createProfile({name:'Elorm',email:'elorm@gmail.com'})
createProfile()
