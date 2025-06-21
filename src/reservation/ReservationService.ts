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

  static async getUpcomingReservations(ownerId: number): Promise<RowDataPacket[]>{
    try {
      const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT ReservationId, SiteName, Checkin, Checkout, Status 
        FROM dbo.reservation 
        WHERE OwnerId = ? 
        AND Checkout >= NOW();
      `, [ownerId]);
      return rows;
    } catch (e) {
      console.log(e);
    }
  }

  static async getPastReservations(ownerId: number): Promise<RowDataPacket[]>{
    try {
      const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT ReservationId, SiteName, Checkin, Checkout, Status 
        FROM dbo.reservation 
        WHERE OwnerId = ?
        AND Checkout < NOW()
        And Checkin < NOW();
      `, [ownerId]);
      return rows;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ReservationService;
