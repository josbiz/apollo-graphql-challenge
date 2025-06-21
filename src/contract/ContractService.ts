import { RowDataPacket } from "mysql2";
import { pool } from "../data/DbConnection";

class ContractService {
  static async getContractInfo(ownerId: number): Promise<RowDataPacket[]> {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(`
            SELECT cu.UsageTypeDesc, AVG(cu.PointsRemaining) as TotalPointsRemaining
            FROM dbo.contractusage cu
            JOIN contracts c ON c.Id = cu.ContractId
            WHERE c.OwnerId = ?
            AND cu.UsageType IN (4, 11, 12, 13, 14, 15)
            AND YEAR(cu.StartDate) >= YEAR(NOW())
            AND YEAR(cu.StartDate) >= YEAR(DATE_ADD(NOW(), INTERVAL 1 YEAR))
            AND YEAR(cu.EndDate) <= YEAR(DATE_ADD(NOW(), INTERVAL 1 YEAR))
            AND c.Active = 1
            AND c.ContractType != 'Resale'
            AND c.Delinquent = 0
            GROUP BY cu.UsageTypeDesc;
        `, [ownerId]);

        console.log(rows)
      return rows;
    } catch (e) {
      console.log(e);
    }
  }

}

export default ContractService;
