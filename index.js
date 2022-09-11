const Account=require('./Account')
const CommandLine=require('./CommandLine')


async function main(){
    const accountName=await CommandLine.ask(
        "Which account would you like to access?"
    )
    const account=await Account.find(accountName)
    if(account){
        console.log("Account Found")
    }else{
        console.log("Not Found")
    }
}
main()