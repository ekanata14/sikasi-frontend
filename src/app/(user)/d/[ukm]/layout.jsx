import { Data } from "~/data/data";

export default function Layout({ user, admin }) {
  const role = Data.user.role;
  return <>{role === 'admin' ? admin : user}</>
}