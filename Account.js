const FileSystem=require('./FileSystem')
module.exports=class Account{
    constructor(name){
        this.#name=name
    }
    #name
    #balance
    get name(){
        return this.#name
    }
    get balance(){
        return this.#balance
    }

    get filePath(){
        
        return `accounts/${this.name}.txt`
        
    }

    async #load(){
        
        this.#balance=parsefloat(await FileSystem.read(this.filePath))

    }

    static async find(accountName){
        const account=new Account(accountName);
        
        try{
            await account.load(); 
            return account
        }catch(e){
            return
        }   
    }
}