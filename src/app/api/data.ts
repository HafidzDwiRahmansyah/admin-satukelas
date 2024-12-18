import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "db.json");

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error reading db.json:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Unknown error occurred");
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
