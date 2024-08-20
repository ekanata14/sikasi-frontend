
export default function Layout({ user, admin }) {
  const role = 'user';
  return <>{role === 'admin' ? admin : user}</>
}