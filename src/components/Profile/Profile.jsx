import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {`User Name :  ${user.username}`}
      <br />
      {`User Id :  ${user.id}`}
      <br />
      {`Include Adult :  ${user.include_adult}`}
    </>
  );
};

export default Profile;
