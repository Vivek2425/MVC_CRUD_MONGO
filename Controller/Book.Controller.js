const Book = require("../Model/Book.Modal")
module.exports = {
    GetData: (req, res) => {
        Book.find({})
            .then((books) => {
                res.send(books);
            })
            .catch((err) => {
                res.status(400).send("ERR")
            })
    },
    CreateData: (req, res) => {
        var book1 = new Book({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        });
        book1.save()
        .then((book) => { res.status(200).send(book); })
        .catch((err) => { if (err) return console.error(err); })
    },
    FindData: (req, res) => {
        Book.findById({ "_id": req.params.id })
        .then((book) => {
            if (!book) return res.status(404).send(
                "No data found.");
            res.status(200).send(book);
        })
        .catch((err) => {
            if (err) return res.status(500).send(
                "There was a problem finding.");
        })
    },
    UpdateData: (req, res) => {
        Book.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true })
        .then((book) => { res.status(200).send(book); })
        .catch((err) => {
            if (err) return res.status(500).send(
                "There was a problem updating.");
        })
    },
    DeleteData: (req, res) => {
        Book.findOneAndRemove({ "_id": req.params.id })
        .then((book) => {
            res.status(200).send(book);
        })
        .catch((err) => {
            if (err) return res.status(500).send(
                "There was a problem deleting.");
        })
    }
}