const cookBeanSouffle = require("./library.js");

async function hostDinnerParty() {
  try {
    let dinenr = await cookBeanSouffle()
  console.log(`${dinner} is served!` 
  } catch (error) {
    console.log(error)
    console.log('Ordring a pizza!')
  } 
}

hostDinnerParty()
