export default (req, res) => {

    console.log('Console Log Backend (Server)',req.body);

    const { values } = req.body;
    
    res.statusCode = 200;
    res.json({ message: "Bienvenide", email: values.email });
}
