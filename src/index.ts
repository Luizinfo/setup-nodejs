import express from "express"
import { Response, Request } from "express"
import Person from "person"

const app = express()
app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayMyName())
})

app.listen(3000, () => console.log("listening on port 3000!"))
