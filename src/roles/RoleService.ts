import { RowDataPacket } from "mysql2";
import { pool } from "../data/DbConnection";

class RoleService {
  static async findAll(): Promise<RowDataPacket[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM dbo.roles");
        return rows;
    } catch (e) {
        console.log(e);
    }
  }

  static async findById(id: number): Promise<RowDataPacket[]> {
    try {
        console.log("id", id)
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM dbo.roles WHERE Id = ? ", [id]);
        return rows;
    } catch (error) {
        console.log(error)
    }
  }
}

export default RoleService;
