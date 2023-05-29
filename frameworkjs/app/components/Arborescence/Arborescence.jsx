import { Link } from "@remix-run/react"

import styles from "./Arborescence.css";


export default function Arborescence({ path }) {

  const splitedPaths = path.split("/");
  let linkAccumulator = "";

  return (
    <div className="Arborescence">
      {splitedPaths.map((splitedPath, index) => {
        linkAccumulator += `/${splitedPath}`;
        return splitedPaths.length-1 != index ? <Link to={linkAccumulator}>{splitedPath}</Link> : <p>{splitedPath}</p>
      })}
    </div>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}