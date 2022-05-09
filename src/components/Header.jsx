import { Link } from "solid-app-router"

const Header = () => {
  return (
    <div
      style={{
        "align-items": "center",
        border: "1px solid #33333333",
        height: "56px",
        display: "flex",
        "justify-content" : 'center',
        gap : "10px"
      }}
    >
    <Link href="/"  > Home </Link>
    <Link href="/add-note" > All Notes </Link>
    </div>
  )
}

export default Header