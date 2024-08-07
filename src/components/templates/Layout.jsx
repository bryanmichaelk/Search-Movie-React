import { Fragment } from "react";
import Navbar from "../organisms/Navbar";

export default function Layout(props) {
  const { children, onSubmit, onChange, genres } = props;
  return (
    <Fragment>
      <Navbar onSubmit={onSubmit} onChange={onChange} />
      {children}
    </Fragment>
  );
}
