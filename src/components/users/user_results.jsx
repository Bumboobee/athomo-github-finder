import { useContext } from "react";
import Spiner from "../layout/spiner";
import UserItem from "./user_item";
import GithubContext from "../../context/github/github_context";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext)
  
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spiner />;
  }
}

export default UserResults;
