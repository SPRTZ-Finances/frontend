import axios from "axios";

class ApiLib {
    static async getExpenses() {
        return await axios.get('https://zpr-backend.herokuapp.com/expenses');
    }
}

export default ApiLib
