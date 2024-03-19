class teste{

    async index (req, res){
        console.log("OPA OPA OPA OPA OPA");
        return res.status(200).json({message: "kkkkkkkkk"});
    }
}

export default new teste();