import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// 앱 기능용 예시 테이블 (필요에 맞게 수정)
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
