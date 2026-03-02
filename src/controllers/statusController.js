
exports.getStatus = (req,res) => {
    res.json({ 
        status: "Online",
        message: "AWS Backend is Reachable",
        owner: "Mark Carroll",
        timestamp: new Date() 
    });
}