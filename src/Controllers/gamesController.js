import db from "../db.js";

export async function getGames(req, res) {
  try {
    const { rows: games } = db.query("SELECT * FROM games ");
    res.send(games);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
