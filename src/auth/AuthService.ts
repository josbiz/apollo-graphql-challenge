import { RowDataPacket } from "mysql2";
import {pool} from "../data/DbConnection"

class AuthService {
    static async getOwnerData(email: string, ownerNumber: string): Promise<RowDataPacket[]> {
        try {
            const [rows] = await pool.query<RowDataPacket[]>("SELECT Id, email, number as ownerNumber FROM owner WHERE email = ? AND number = ?", [email, ownerNumber])
            return rows
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthService;
