import React, { useContext, useState } from "react";
import SearchForm from "../components/TransactionForm";
import DataContext from "../context/UserTransactionData"
import Axios from "axios"
function transactioninput() {
    const { changeFalseStatus } = useContext(DataContext)
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const uploadTransaction = (e) => {
        e.preventDefault()
        Axios({
            method: "POST",
            data: {
                type: type,
                name: name,
                value: amount
            },
            withCredentials: true,
            url: "http://localhost:3001/api/auth/transaction",
        }).then(res => {
            console.log(res)
            changeFalseStatus();
        })
    }
    return (
        <div>
            <SearchForm
                type={type}
                name={name}
                amount={amount}
                setType={(e) => setType(e.target.value)}
                setName={(e) => setName(e.target.value)}
                setAmount={(e) => setAmount(e.target.value)}
                submitForm={uploadTransaction}
            >

            </SearchForm>
        </div>
    )
}
export default transactioninput