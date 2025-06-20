import { RowDataPacket } from "mysql2";
import { pool } from "../data/DbConnection";

class OwnerService {
  static async findOwnerRoleById(Id: number): Promise<RowDataPacket[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM dbo.ownerroles WHERE OwnerId = ?", [Id]);
        return rows;
    } catch (e) {
        console.log(e);
    }
  }
}

export default OwnerService;
