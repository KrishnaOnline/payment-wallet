const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        default: 1000,
        required: true,
    }
})

const Account = mongoose.model("Account", bankAccountSchema);
module.exports = Account;