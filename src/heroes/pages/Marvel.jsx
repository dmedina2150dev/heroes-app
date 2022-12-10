import { HeroList } from "../components"


export const Marvel = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <ul>
        <HeroList publisher='Marvel Comics' />
      </ul>
    </>
  )
}
