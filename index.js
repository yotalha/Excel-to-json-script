const reader = require('xlsx');

const file = reader.readFile('./userFile.xlsx');

let data = [];

const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

data.forEach((user) => {
    const username = user.Username;
    const str = username.split('.')
    console.log(`Hi ${str[0].charAt(0).toUpperCase() + str[0].slice(1)}`)
    console.log("\n")
    console.log(`Username: ${username}`)
    console.log(`Password: ${user.Password}`)
    console.log(`Access key ID: ${user.AccesskeyID}`)
    console.log(`Secret access key: ${user.Secretaccesskey}`)
    console.log(`Console login link: ${user.Consoleloginlink}`)
    console.log("\n")
    console.log("Kindly keep the following points in mind while using the account:\n")
    console.log("\t 1.Tag each resource with Owner = ahtazaz.ahmed@systemsltd.com")
    console.log("\t 2.Stop/Terminate resources when not in use, e.g., on weekends, day-ends, and holidays.")
    console.log("\t 3.Create all your resources in N. Virginia")
    console.log("Thanks,")
    console.log("Talha Arshad.")
    console.log("<-------------------------------------------------------->")
})
  
// Printing data
// console.log(data)