import { RowDataPacket } from "mysql2";
import { pool } from "../data/DbConnection";

class ReservationService {
  static async findAll(): Promise<RowDataPacket[]> {
    try {
        const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM dbo.reservation");
        return rows;
    } catch (e) {
        console.log(e);
    }
  }
}

export default ReservationService;
