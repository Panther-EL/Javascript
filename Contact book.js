                                                                          //Contact Book 
//Stores the details of the contacts
let contacts = new Map()

//Includes new contact 
const addContact =(name,number) => {
  if (!contacts.has(name)){
    contacts.set(name,number)
    console.log(`You have successfully added ${name}`)
  }else{
    console.log(`${name} already exists in contacts`)
  }
  return
}

//Retrieves a contact's phone number
const getContact = (name) => {
if(contacts.has(name)){
  console.log(`${name}'s number is ${contacts.get(name)}`)
}else{
  console.log(`${name} can't be found`)
}
return
}

//Removes a contact
const deleteContacts = (name) => {
if(contacts.has(name)){
  contacts.delete(name)
  console.log(`${name} successfully deleted`)
} else{
  console.log(`${name} can't be found`)
}
return
}

//Displays all the contacts in the map
const showAllContacts = () => {
  let allContacts = contacts.forEach((number,name) => {
    console.log(`${name}: ${number}`)
  })
  
  
}

//Test cases
addContact('Elorm', '0551379948')
addContact('James', '0244609922')
deleteContacts('James')
showAllContacts()
