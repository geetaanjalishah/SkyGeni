import fs from "fs"
import path from "path"

export const loadData = (file: string) => {
  const filePath = path.join(__dirname, "..", "data", file)
  return JSON.parse(fs.readFileSync(filePath, "utf-8"))
}
